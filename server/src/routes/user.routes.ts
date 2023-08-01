import { Router } from "express"
import { createUsers, deleteUsers , getAllUsers, updateUsers } from "../controllers/user.controllers";


const userRoutes = Router();

//Declaracion de rutas con metodo que corresponde a cada una
userRoutes.get("/" , getAllUsers)

userRoutes.post('/', createUsers)

userRoutes.put("/:userId", updateUsers)

userRoutes.delete("/:userId", deleteUsers)

export default userRoutes
