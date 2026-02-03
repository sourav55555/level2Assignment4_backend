import { Router } from "express";
import { mealController } from "./meal.controller.js";
import authenticate from "../../middleware/authMiddleware.js";
import { UserRole } from "@prisma/client";
;
const router = Router();
router.get("/", mealController.getAllMeal);
router.get("/:id", mealController.getMeal);
router.delete("/:id", authenticate(UserRole.PROVIDER), mealController.deleteMeal);
router.put("/:id", authenticate(UserRole.PROVIDER), mealController.updateMeal);
export default router;
//# sourceMappingURL=meal.router.js.map