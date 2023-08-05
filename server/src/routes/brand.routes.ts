import { Router } from "express"
import { getAllBrands } from "../controllers/brand.controllers";

const brandRoutes = Router();


brandRoutes.get('/', getAllBrands)

export default brandRoutes;
