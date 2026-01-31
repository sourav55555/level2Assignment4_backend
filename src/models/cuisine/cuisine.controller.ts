import { Request, Response } from "express";
import { cuisineService } from "./cuisine.service";


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
const getAllCuisine = async (req: Request, res: Response) => { 
    try {
        const result = await cuisineService.cuisineList();
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "cuisine creation failed",
            message: e
        })
    }
}

export const cuisineController = {
    getAllCuisine
}