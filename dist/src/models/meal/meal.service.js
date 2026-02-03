import { prisma } from "../../lib/prisma";
const mealList = async (filters) => {
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
    });
};
const getMeal = async (mealId) => {
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
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const deleteMeal = async (mealId, userId) => {
    try {
        const res = await prisma.meal.delete({
            where: {
                id: mealId,
                providerId: userId
            },
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const updateMeal = async (payload, mealId, userId) => {
    try {
        const res = await prisma.meal.update({
            where: {
                id: mealId,
                providerId: userId
            },
            data: payload
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
export const mealService = {
    mealList,
    getMeal,
    deleteMeal,
    updateMeal
};
//# sourceMappingURL=meal.service.js.map