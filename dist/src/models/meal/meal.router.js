import { Router } from "express";
;
import { UserRole } from "../../lib/constants";
import { mealController } from "./meal.controller";
import authenticate from "../../middleware/authMiddleware";
const router = Router();
router.get("/", mealController.getAllMeal);
router.get("/:id", mealController.getMeal);
router.delete("/:id", authenticate(UserRole.PROVIDER), mealController.deleteMeal);
router.put("/:id", authenticate(UserRole.PROVIDER), mealController.updateMeal);
export default router;
//# sourceMappingURL=meal.router.js.map