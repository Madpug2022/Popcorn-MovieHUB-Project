import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllBrands = async (req: Request, res: Response) => {
    const brands = await prisma.brands.findMany();
    res.status(200).json(brands)
}
