import { Router } from "express"
import { createMovie, deleteMovie } from "../controllers/movie.controllers";
import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";

const movieRoutes = Router();


movieRoutes.post('/', checkJwtMiddleware, createMovie);

movieRoutes.delete('/', checkJwtMiddleware, deleteMovie);

export default movieRoutes;
