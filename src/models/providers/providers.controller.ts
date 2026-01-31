import { Request, Response } from "express";
import { providerService } from "./providers.service";

const createMeal = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;
        console.log(payload,userId, "payload")
        const result = await providerService.createMeal(payload, userId!);
        console.log(result, "result")
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        })
    }
}
const getMeals = async (req: Request, res: Response) => { 
     try {
  
        const userId = req.user?.id;

        const result = await providerService.getMealsData(userId!);
        console.log(result, "result")
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        })
    }
}

export const providerController = {
    createMeal,
    getMeals,

}