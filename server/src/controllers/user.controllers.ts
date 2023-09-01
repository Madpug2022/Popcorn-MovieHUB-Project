import { Request, Response } from "express"
import { prismaClient } from '../config/prismaClient'

const prisma = prismaClient

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).send(err)
    }

}
export const createUsers = async (req: Request, res: Response) => {
    try {
        const { nickname, email, name, picture } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (user) {
            return res.status(305).send('User already exists')
        }
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                nickname: nickname,
                picture: picture
            }
        })
        res.status(201).send('User created');
    } catch (err) {
        res.status(500).send("Error creating user")
    }

}
export const getUserByNickname = async (req: Request, res: Response) => {
    try {
        const { userNickName } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                nickname: userNickName
            },
            include: {
                movies: {
                    select: {
                        id: true,
                        name: true,
                        score: true,
                        critique: true,
                        poster_image: true,
                        poster_image_id: true,
                        genre: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                series: {
                    select: {
                        id: true,
                        name: true,
                        score: true,
                        critique: true,
                        poster_image: true,
                        poster_image_id: true,
                        genre: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
            }
        })
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send('Error fetching user')
    }

}
