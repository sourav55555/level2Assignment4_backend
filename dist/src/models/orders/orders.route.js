import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { UserRole } from "../../lib/constants";
import { orderController } from "./orders.controller";
const router = Router();
// router.get("/", orderController.getAllorder)
router.post("/cart", authenticate(UserRole.USER), orderController.createOrderItem);
router.get("/cart", authenticate(UserRole.USER), orderController.getOrderItem);
router.post("/", authenticate(UserRole.USER), orderController.createOrder);
router.get("/status/:id", authenticate(UserRole.USER, UserRole.PROVIDER), orderController.orderStatus);
router.patch("/status/:id", authenticate(UserRole.USER, UserRole.PROVIDER), orderController.changeOrderStatus);
router.get("/", authenticate(UserRole.ADMIN), orderController.allOrders);
router.get("/provider", authenticate(UserRole.PROVIDER), orderController.providerOrders);
router.get("/user", authenticate(UserRole.USER), orderController.userOrders);
export default router;
//# sourceMappingURL=orders.route.js.map