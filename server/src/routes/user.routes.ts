import { Router } from "express"
import { createUsers, deleteUsers, getAllUsers, updateUsers } from "../controllers/user.controllers";
import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";


const userRoutes = Router();

//Declaracion de rutas con metodo que corresponde a cada una
userRoutes.get("/", checkJwtMiddleware, getAllUsers)

userRoutes.post('/', checkJwtMiddleware, createUsers)

userRoutes.put("/:userId", updateUsers)

userRoutes.delete("/:userId", deleteUsers)

export default userRoutes
