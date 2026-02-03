import { cuisineService } from "./cuisine.service.js";
// const createCuisine = async (req: Request, res: Response) => {
//     try {
//         const payload = req.body;
//         const userId = req.user?.id;
//         console.log(payload,userId, "payload")
//         const result = await cuisineService.createCuisine(payload, userId!);
//         console.log(result, "result")
//         res.status(201).json(result)
//     } catch (e) {
//         res.status(400).json({
//             error: "cuisine creation failed",
//             message: e
//         })
//     }
// }
const getAllCuisine = async (req, res) => {
    try {
        const result = await cuisineService.cuisineList();
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "cuisine list failed",
            message: e
        });
    }
};
const createCuisine = async (req, res) => {
    try {
        const payload = req.body;
        const result = await cuisineService.createCuisine(payload);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "cuisine creation failed",
            message: e
        });
    }
};
const updateCuisine = async (req, res) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const result = await cuisineService.updateCuisine(id, payload);
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "cuisine update failed",
            message: e
        });
    }
};
const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await cuisineService.deleteCuisine(id);
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
export const cuisineController = {
    getAllCuisine,
    createCuisine,
    deleteCuisine,
    updateCuisine
};
//# sourceMappingURL=cuisine.controller.js.map