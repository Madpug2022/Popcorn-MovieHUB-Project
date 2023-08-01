import { Request, Response } from "express"
import { v4 as uuidv4 } from 'uuid';
import userModel from "../schemas/user-schema"


export const getAllUsers = async (req: Request, res: Response) => {
    const {name} = req.body;
    const user = await userModel.findOne( {name} )

    if (user) {
        console.log(user)
        return res.status(409).send('User already exists')

    }

    res.status(200).send("ok")
}
export const createUsers = async (req: Request, res: Response) => {
    const guid = uuidv4()
    const {name} = req.body;
    if (!name) return res.status(400).send();

    const user = await userModel.findOne( {name} ).exec()

    if (user) {
        return res.status(409).send('User already registered')
    }

    const newUser = new userModel({_id:guid, name});
    await newUser.save();

    res.status(201).send("User created")
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
