import { prisma } from "../../lib/prisma"

const createMeal = async (payload: any, userId: string) => {

    try {
        
        const res = await prisma.meal.create({
            data: {
                ...payload,
                providerId: userId
            }
        })
        return res
    } catch (e) {
        return e
    }

}

const getMealsData = async (userId: string) => {
    try {
        const res = await prisma.meal.findMany({
            where: {
                providerId: userId
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

export const providerService = {
    createMeal,
    getMealsData,

}