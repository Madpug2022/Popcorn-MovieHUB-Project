import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";
import { uploadImage } from "../config/cloudinary";
import fs from 'fs-extra';

const prisma = new PrismaClient()

export const createMovie = async (req: Request, res: Response) => {
    try {
        const { userEmail, genres, name, review, score } = req.body;

        if ((req.files as any)?.posterImage) {
            const upload = await uploadImage((req.files as any).posterImage.tempFilePath);

            await fs.unlink((req.files as any).posterImage.tempFilePath)
            const user = await prisma.user.findFirst({
                where: {
                    email: userEmail
                }
            })
            const genreId = await prisma.genre.findFirst({
                where: {
                    name: genres
                }
            })
            if (user) {
                const newMovie = await prisma.movies.create({
                    data: {
                        User: { connect: { id: user.id } },
                        poster_image: upload.secure_url,
                        poster_image_id: upload.public_id,
                        name: name,
                        score: parseInt(score),
                        critique: review,
                        genre: { connect: { id: genreId?.id } }
                    }
                })
                res.status(200).send('Movie uploaded sucessfully')
            } else res.status(404).send('No user found')
        }
    } catch (err) {
        console.error("Error creating movie:", err);
        res.status(500).json({ err: "An error occurred while creating movie." });
    }
}
