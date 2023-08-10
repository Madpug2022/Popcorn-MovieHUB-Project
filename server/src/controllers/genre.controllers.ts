import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const genres = await prisma.genre.findMany();
        res.status(200).json(genres)
    } catch (err) {
        console.error("Error fetching genres:", err);
        res.status(500).json({ err: "An error occurred while fetching genres." });
    }
}
