import { prisma } from "../../lib/prisma"

const mealList = async () => {
    try {
        const res = await prisma.meal.findMany({
             include: {
                cuisine: true,
                provider: {
                    select: {
                        name: true,
                        id: true
                    }
                }
            }
        });
        return res
    } catch (e) {
        return e;
    }

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
        console.log(e, "error update meal")
        return e
    }
}


export const mealService = {
    mealList,
    getMeal,
    deleteMeal,
    updateMeal
}