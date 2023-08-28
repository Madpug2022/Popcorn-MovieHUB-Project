import { Router } from "express"
import { createSerie, deleteSerie, editSerie } from "../controllers/series.controllers";
import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";

const serieRoutes = Router();


serieRoutes.post('/', checkJwtMiddleware, createSerie);

serieRoutes.delete('/', checkJwtMiddleware, deleteSerie);

serieRoutes.put('/', checkJwtMiddleware, editSerie);

export default serieRoutes;
