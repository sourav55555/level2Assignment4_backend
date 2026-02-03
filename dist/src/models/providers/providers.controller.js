import { providerService } from "./providers.service";
const createMeal = async (req, res) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;
     
        const result = await providerService.createMeal(payload, userId);

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
const getMeals = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await providerService.getMealsData(userId);

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
const dashboardData = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await providerService.dashboardData(userId);
   
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
const getPrividerProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await providerService.getPrividerProfile(id);

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
export const providerController = {
    createMeal,
    getMeals,
    dashboardData,
    getPrividerProfile
};
//# sourceMappingURL=providers.controller.js.map