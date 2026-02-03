import { prisma } from "@/lib/prisma.js"
import { DietPreference } from "@prisma/client"

type MealFilter = {
  cuisineIds?: string[]        // 👈 plural
  dietPreferences?: DietPreference[]
  minPrice?: number
  maxPrice?: number
}



const mealList = async (filters?: MealFilter) => {
  return prisma.meal.findMany({
    where: {
      status: "AVAILABLE",

      ...(filters?.cuisineIds?.length && {
        cuisineId: {
          in: filters.cuisineIds,
        },
      }),

      ...(filters?.dietPreferences?.length && {
        dietPreference: {
          in: filters.dietPreferences,
        },
      }),

      ...(filters?.minPrice || filters?.maxPrice
        ? {
            price: {
              ...(filters.minPrice && { gte: filters.minPrice }),
              ...(filters.maxPrice && { lte: filters.maxPrice }),
            },
          }
        : {}),
    },

    include: {
      cuisine: true,
      provider: {
        select: { id: true, name: true },
      },
    },
  })
}


const getMeal = async (mealId: string) => {
    try {
        const res = await prisma.meal.findUnique({
            where: {
                id: mealId
            },
            include: {
                cuisine: true,
                provider: {
                    select: {
                        name: true,
                        id: true
                    }
                }
            }
        })
        return res;
    } catch (e) {
        return e
    }
}
const deleteMeal = async (mealId: string, userId: string) => {
    try {
        const res = await prisma.meal.delete({
            where: {
                id: mealId,
                providerId: userId
            },
          
        })
        return res;
    } catch (e) {
        return e
    }
}
const updateMeal = async ( payload: Partial<any>,mealId: string, userId: string) => {
    try {
        const res = await prisma.meal.update({
            where: {
                id: mealId,
                providerId: userId
            },
       
            data: payload
          
        })
        return res;
    } catch (e) {
  
        return e
    }
}


export const mealService = {
    mealList,
    getMeal,
    deleteMeal,
    updateMeal
}