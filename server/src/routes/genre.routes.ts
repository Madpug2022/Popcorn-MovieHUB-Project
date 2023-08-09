import { Router } from "express"
import { getAllGenres } from "../controllers/genre.controllers";

const genreRoutes = Router();


genreRoutes.get('/', getAllGenres);

export default genreRoutes;
