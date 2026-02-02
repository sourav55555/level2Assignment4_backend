import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { cuisineController } from "./cuisine.controller";


const router = Router();

router.get("/", cuisineController.getAllCuisine)
router.post("/", authenticate(UserRole.ADMIN) , cuisineController.createCuisine);
router.delete("/:id", authenticate(UserRole.ADMIN) , cuisineController.deleteCuisine)

export default router