import { Router } from "express"
import { createUsers, getAllUsers, getUserByNickname, } from "../controllers/user.controllers";
import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";


const userRoutes = Router();

//Declaracion de rutas con metodo que corresponde a cada una
userRoutes.get("/", checkJwtMiddleware, getAllUsers)

userRoutes.get("/:userNickName", getUserByNickname)

userRoutes.post('/', checkJwtMiddleware, createUsers)





export default userRoutes
