import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { userController } from "./admin.controller";


const router = Router();

router.get("/dashboard",  authenticate( UserRole.ADMIN),userController.getDashboard)
// router.patch("/:id",  userController.useStatusUpdate)
// router.put("/", authenticate(UserRole.USER, UserRole.PROVIDER, UserRole.ADMIN) ,userController.updateUser)
// router.delete("/", authenticate( UserRole.ADMIN) ,userController.deleteUser)

export default router