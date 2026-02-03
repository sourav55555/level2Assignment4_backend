import authenticate from "@/middleware/authMiddleware.js";
import { UserRole } from "@prisma/client";
import { Router } from "express";
import { userController } from "./user.controller.js";
// import { quisineController } from "./quisines.controller";



const router = Router();

router.get("/",  authenticate( UserRole.ADMIN),userController.getAlluser)
router.get("/me",  authenticate( UserRole.ADMIN,UserRole.PROVIDER,UserRole.USER),userController.getMyProfile)
router.patch("/:id",  userController.useStatusUpdate)
router.put("/", authenticate(UserRole.USER, UserRole.PROVIDER, UserRole.ADMIN) ,userController.updateUser)
router.delete("/", authenticate( UserRole.ADMIN) ,userController.deleteUser)

export default router