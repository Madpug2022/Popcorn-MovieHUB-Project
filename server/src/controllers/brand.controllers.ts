import { Request, Response } from "express"
import { prismaClient } from '../config/prismaClient'

const prisma = prismaClient

export const getAllBrands = async (req: Request, res: Response) => {
    try {
        const brands = await prisma.brands.findMany();
        res.status(200).json(brands)
    } catch (err) {
        console.error("Error fetching brands:", err);
        res.status(500).json({ err: "An error occurred while fetching brands." });
    }
}
