import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { userController } from "./user.controller";


const router = Router();

router.get("/",  authenticate( UserRole.ADMIN),userController.getAlluser)
router.patch("/:id",  userController.useStatusUpdate)
router.put("/", authenticate(UserRole.USER, UserRole.PROVIDER, UserRole.ADMIN) ,userController.updateUser)

export default router