import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllGenres = async (req: Request, res: Response) => {
    const genres = await prisma.genre.findMany();
    res.status(200).json(genres)
}
