import { Router } from "express";
import { providerController } from "./providers.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";


const router = Router();

router.post("/create", authenticate(UserRole.PROVIDER), providerController.createMeal)
router.get("/meals", authenticate(UserRole.PROVIDER), providerController.getMeals)
// router.get("/meal/:id", authenticate(UserRole.PROVIDER), providerController.getMeal)
router.get("/dashboard", authenticate(UserRole.PROVIDER), providerController.dashboardData)

export default router