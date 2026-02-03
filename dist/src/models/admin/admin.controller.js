import { adminService } from "./admin.service";

const getDashboard = async (req, res) => {
    try {
        const result = await adminService.getDashboard();
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "admin creation failed",
            message: e
        });
    }
};
export const adminController = {
    getDashboard
};
//# sourceMappingURL=admin.controller.js.map