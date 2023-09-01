import { Request, Response } from "express"
import { uploadImage, deleteImage } from "../config/cloudinary";
import fs from 'fs-extra';
import { prismaClient } from '../config/prismaClient'

const prisma = prismaClient

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

export const deleteMovie = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;

        const targetMovie = await prisma.movies.delete({ where: { id: id } })

        if (!targetMovie) { res.status(404).send('No movie found') }
        else

            await deleteImage(targetMovie?.poster_image_id);

        res.status(200).send('Movie deleted successfully')
    } catch (err) {
        console.error("Error deleting movie:", err);
        res.status(500).json({ err: "An error occurred while deleting the movie." });
    }
}

export const editMovie = async (req: Request, res: Response) => {
    try {
        const { id, name, review, score } = req.body;

        const updatedMovie = await prisma.movies.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                score: parseInt(score),
                critique: review
            }
        })
        if (updatedMovie) {
            res.status(200).send('Movie updated successfully')
        }

    } catch (err) {
        console.error("Error editing movie:", err);
        res.status(500).json({ err: "An error occurred while editing the movie." });
    }
}
