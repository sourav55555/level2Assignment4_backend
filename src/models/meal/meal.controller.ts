import { Request, Response } from "express";
import { mealService } from "./meal.service";



const getAllMeal = async (req: Request, res: Response) => { 
    try {
        const result = await mealService.mealList();
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "meal creation failed",
            message: e
        })
    }
}

const getMeal = async (req: Request, res: Response) => { 
     try {

        const mealId = req.params.id as string;
        const result = await mealService.getMeal(mealId);
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


export const mealController = {
    getAllMeal,
    getMeal
}