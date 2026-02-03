import { Request, Response } from "express";
import { providerService } from "./providers.service.js";

const createMeal = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;

        const result = await providerService.createMeal(payload, userId!);
   
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
   
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Failed to fetch meals",
            message: e
        })
    }
}
const dashboardData = async (req: Request, res: Response) => { 
     try {
  
        const userId = req.user?.id;

        const result = await providerService.dashboardData(userId!);

        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Failed to fetch dashboard data",
            message: e
        })
    }
}
const getPrividerProfile = async (req: Request, res: Response) => { 
     try {
  
        const {id} = req.params;

        const result = await providerService.getPrividerProfile(id as string);
 
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Failed to fetch provider profile",
            message: e
        })
    }
}

export const providerController = {
    createMeal,
    getMeals,
    dashboardData,
    getPrividerProfile

}