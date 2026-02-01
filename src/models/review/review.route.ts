import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { reviewController } from "./review.controller";


const router = Router();

router.get("/", reviewController.getAllreview)
router.post("/", authenticate(UserRole.USER, UserRole.PROVIDER) ,reviewController.createReview)

export default router