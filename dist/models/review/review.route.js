import { Router } from "express";
import { reviewController } from "./review.controller.js";
import authenticate from "../../middleware/authMiddleware.js";
import { UserRole } from "@prisma/client";
// import { quisineController } from "./quisines.controller";
const router = Router();
router.get("/", reviewController.getAllreview);
router.post("/", authenticate(UserRole.USER, UserRole.PROVIDER), reviewController.createReview);
export default router;
//# sourceMappingURL=review.route.js.map