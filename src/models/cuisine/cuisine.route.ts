import { Router } from "express";
import { cuisineController } from "./cuisine.controller.js";
import authenticate from "@/middleware/authMiddleware.js";
import { UserRole } from "@prisma/client";
// import { quisineController } from "./quisines.controller";



const router = Router();

router.get("/", cuisineController.getAllCuisine)
router.post("/", authenticate(UserRole.ADMIN) , cuisineController.createCuisine);
router.put("/:id", authenticate(UserRole.ADMIN) , cuisineController.updateCuisine);
router.delete("/:id", authenticate(UserRole.ADMIN) , cuisineController.deleteCuisine)

export default router