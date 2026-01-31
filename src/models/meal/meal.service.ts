import { prisma } from "../../lib/prisma"

const mealList = async () => {
    try {
        const res = await prisma.meal.findMany();
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


export const mealService = {
    mealList,
    getMeal
}