import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware.js";
import { adminController } from "./admin.controller.js";
import { UserRole } from "@prisma/client";
const router = Router();
router.get("/dashboard", authenticate(UserRole.ADMIN), adminController.getDashboard);
// router.patch("/:id",  adminController.useStatusUpdate)
// router.put("/", authenticate(AdminRole.ADMIN, AdminRole.PROVIDER, AdminRole.ADMIN) ,adminController.updateAdmin)
// router.delete("/", authenticate( AdminRole.ADMIN) ,adminController.deleteAdmin)
export default router;
//# sourceMappingURL=admin.route.js.map