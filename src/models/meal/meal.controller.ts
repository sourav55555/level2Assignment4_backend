import { Request, Response } from "express";
import { mealService } from "./meal.service";
import { DietPreference } from "../../../prisma/generated/prisma/enums";



const getAllMeal = async (req: Request, res: Response) => {
  try {
    const { cuisineIds, dietPreferences, minPrice, maxPrice } = req.query

    const filters = {
      ...(cuisineIds && {
        cuisineIds: String(cuisineIds).split(","),
      }),

      ...(dietPreferences && {
        dietPreferences: String(dietPreferences)
          .split(",") as DietPreference[],
      }),

      ...(minPrice && { minPrice: Number(minPrice) }),
      ...(maxPrice && { maxPrice: Number(maxPrice) }),
      }
      console.log(filters, "filters")

    const result = await mealService.mealList(filters)

    res.status(200).json({ success: true, data: result })
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Failed to fetch meals",
      error: e instanceof Error ? e.message : e,
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
const deleteMeal = async (req: Request, res: Response) => { 
     try {

         const mealId = req.params.id as string;
         const userId = req.user?.id
        const result = await mealService.deleteMeal(mealId, userId!);
        console.log(result, "result")
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal Deletion failed",
            message: e
        })
    }
}
const updateMeal = async (req: Request, res: Response) => { 
     try {

         const mealId = req.params.id as string;
         const userId = req.user?.id;
         const payload = req.body
        const result = await mealService.updateMeal(payload,mealId, userId!);
        console.log(result, "result")
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal Update failed",
            message: e
        })
    }
}


export const mealController = {
    getAllMeal,
    getMeal,
    deleteMeal,
    updateMeal
}