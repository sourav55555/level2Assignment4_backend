import { mealService } from "./meal.service";
const getAllMeal = async (req, res) => {
    try {
        const { cuisineIds, dietPreferences, minPrice, maxPrice } = req.query;
        const filters = {
            ...(cuisineIds && {
                cuisineIds: String(cuisineIds).split(","),
            }),
            ...(dietPreferences && {
                dietPreferences: String(dietPreferences)
                    .split(","),
            }),
            ...(minPrice && { minPrice: Number(minPrice) }),
            ...(maxPrice && { maxPrice: Number(maxPrice) }),
        };
    
        const result = await mealService.mealList(filters);
        res.status(200).json({ success: true, data: result });
    }
    catch (e) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch meals",
            error: e instanceof Error ? e.message : e,
        });
    }
};
const getMeal = async (req, res) => {
    try {
        const mealId = req.params.id;
        const result = await mealService.getMeal(mealId);

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
const deleteMeal = async (req, res) => {
    try {
        const mealId = req.params.id;
        const userId = req.user?.id;
        const result = await mealService.deleteMeal(mealId, userId);
 
        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal Deletion failed",
            message: e
        });
    }
};
const updateMeal = async (req, res) => {
    try {
        const mealId = req.params.id;
        const userId = req.user?.id;
        const payload = req.body;
        const result = await mealService.updateMeal(payload, mealId, userId);

        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal Update failed",
            message: e
        });
    }
};
export const mealController = {
    getAllMeal,
    getMeal,
    deleteMeal,
    updateMeal
};
//# sourceMappingURL=meal.controller.js.map