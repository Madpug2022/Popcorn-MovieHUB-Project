import { Request, Response } from "express"
import { prismaClient } from '../config/prismaClient'

const prisma = prismaClient

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const { userEmail, type, name, link, imageLink } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                email: userEmail
            }
        })
        if (user) {
            await prisma.popcorn.create({
                data: {
                    user: { connect: { id: user.id } },
                    name: name,
                    type: type,
                    link: link,
                    image: imageLink,
                    image_id: imageLink
                }
            })
            res.status(200).send('Recipe uploaded sucessfully')
        } else res.status(404).send('No user found')

    } catch (err) {
        console.error("Error creating recipe:", err);
        res.status(500).json({ err: "An error occurred while creating recipe." });
    }
}

export const deleteRecipe = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;

        const targetRecipe = await prisma.popcorn.delete({ where: { id: id } })

        if (!targetRecipe) { res.status(404).send('No movie found') }

        res.status(200).send('Recipe deleted successfully')
    } catch (err) {
        console.error("Error deleting recipe:", err);
        res.status(500).json({ err: "An error occurred while deleting the recipe." });
    }
}

export const getRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await prisma.popcorn.findMany({
            include: { user: { select: { nickname: true } } }
        });
        res.status(200).json(recipes)
    } catch (err) {
        console.error("Error getting recipes");
        res.status(500).json({ err: "Error fetching recipes." })
    }
}
