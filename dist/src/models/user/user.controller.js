import { userService } from "./user.service";

const getAlluser = async (req, res) => {
    try {
        const result = await userService.userList();
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "user creation failed",
            message: e
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const payload = req.body;
        const id = req.user?.id;
     
        const result = await userService.updateUser(payload, id);

        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        });
    }
};
const useStatusUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
      
        const result = await userService.updateUserStatus({ status }, id);

        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userService.deleteUser(id);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "cuisine delete failed",
            message: e
        });
    }
};
const getMyProfile = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await userService.getMyProfile(userId);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Failed to get profile",
            message: e
        });
    }
};
export const userController = {
    getAlluser,
    updateUser,
    useStatusUpdate,
    deleteUser,
    getMyProfile
};
//# sourceMappingURL=user.controller.js.map