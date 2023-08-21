import { Router } from "express"
import { createMovie } from "../controllers/movie.controllers";
import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";

const movieRoutes = Router();


movieRoutes.post('/', checkJwtMiddleware, createMovie);



export default movieRoutes;
