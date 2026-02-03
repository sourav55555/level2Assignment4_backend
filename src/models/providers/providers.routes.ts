import authenticate from "@/middleware/authMiddleware.js";
import { UserRole } from "@prisma/client";
import { Router } from "express";
import { providerController } from "./providers.controller.js";



const router = Router();

router.post("/create", authenticate(UserRole.PROVIDER), providerController.createMeal)
router.get("/meals", authenticate(UserRole.PROVIDER), providerController.getMeals)
// router.get("/meal/:id", authenticate(UserRole.PROVIDER), providerController.getMeal)
router.get("/dashboard", authenticate(UserRole.PROVIDER), providerController.dashboardData)
router.get("/:id", providerController.getPrividerProfile)

export default router