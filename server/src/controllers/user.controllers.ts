import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users)
}
export const createUsers = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    if (user) {
        return res.send('User found')
    }

    const newUser = await prisma.user.create({
        data: req.body
    })
    res.status(201).json(newUser).send('User created')
}
export const updateUsers = (req: Request, res: Response) => {
    const userData = req.params;
    const { email } = req.body;

    console.log(userData);
    console.log(email);

    res.status(202).send("User Updated")
}
export const deleteUsers = (req: Request, res: Response) => {
    res.status(203).send(`User ${req.params.userId} deleted`)
}
