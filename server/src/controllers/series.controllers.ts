import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";
import { uploadImage, deleteImage } from "../config/cloudinary";
import fs from 'fs-extra';

const prisma = new PrismaClient()

export const createSerie = async (req: Request, res: Response) => {
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
                const newSerie = await prisma.series.create({
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
                res.status(200).send('Serie uploaded sucessfully')
            } else res.status(404).send('No user found')
        }
    } catch (err) {
        console.error("Error creating Serie:", err);
        res.status(500).json({ err: "An error occurred while creating serie." });
    }
}

export const deleteSerie = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;

        const targetSerie = await prisma.series.delete({ where: { id: id } })

        if (!targetSerie) { res.status(404).send('No serie found') }
        else

            await deleteImage(targetSerie?.poster_image_id);

        res.status(200).send('Serie deleted successfully')
    } catch (err) {
        console.error("Error deleting serie:", err);
        res.status(500).json({ err: "An error occurred while deleting the serie." });
    }
}

export const editSerie = async (req: Request, res: Response) => {
    try {
        const { id, name, review, score } = req.body;

        const updatedSerie = await prisma.series.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                score: parseInt(score),
                critique: review
            }
        })
        if (updatedSerie) {
            res.status(200).send('Serie updated successfully')
        }

    } catch (err) {
        console.error("Error editing serie:", err);
        res.status(500).json({ err: "An error occurred while editing the serie." });
    }
}
