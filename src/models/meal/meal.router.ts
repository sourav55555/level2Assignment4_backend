import { Router } from "express";;
import { UserRole } from "../../lib/constants";
import { mealController } from "./meal.controller";


const router = Router();


router.get("/", mealController.getAllMeal)
router.get("/:id", mealController.getMeal)

export default router