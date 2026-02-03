import { Router } from "express";
// import { quisineController } from "./quisines.controller";
import authenticate from "../../middleware/authMiddleware";
import { adminController } from "./admin.controller";
import { UserRole } from "../../lib/constants";
const router = Router();
router.get("/dashboard", authenticate(UserRole.ADMIN), adminController.getDashboard);
// router.patch("/:id",  adminController.useStatusUpdate)
// router.put("/", authenticate(AdminRole.ADMIN, AdminRole.PROVIDER, AdminRole.ADMIN) ,adminController.updateAdmin)
// router.delete("/", authenticate( AdminRole.ADMIN) ,adminController.deleteAdmin)
export default router;
//# sourceMappingURL=admin.route.js.map