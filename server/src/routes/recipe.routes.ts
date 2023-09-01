import { Router } from "express"
import { checkJwtMiddleware } from "../middlewares/checkjwt.middleware";
import { getRecipes, deleteRecipe, createRecipe } from "../controllers/recipe.controllers";

const recipeRoutes = Router();


recipeRoutes.get('/', getRecipes);

recipeRoutes.delete('/', checkJwtMiddleware, deleteRecipe);

recipeRoutes.post('/', checkJwtMiddleware, createRecipe);

export default recipeRoutes;
