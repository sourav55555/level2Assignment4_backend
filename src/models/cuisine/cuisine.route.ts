import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { cuisineController } from "./cuisine.controller";


const router = Router();

router.get("/", cuisineController.getAllCuisine)

export default router