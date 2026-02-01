import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { orderController } from "./orders.controller";


const router = Router();

// router.get("/", orderController.getAllorder)
router.post("/", authenticate(UserRole.USER, UserRole.PROVIDER) , orderController.createOrder)
router.get("/status/:id", authenticate(UserRole.USER, UserRole.PROVIDER) , orderController.orderStatus)
router.patch("/status/:id", authenticate(UserRole.USER, UserRole.PROVIDER) , orderController.changeOrderStatus)
router.get("/", authenticate(UserRole.ADMIN) ,orderController.allOrders)

export default router;