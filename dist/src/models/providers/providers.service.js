import { MealStatus, OrderStatus } from "../../../prisma/generated/prisma/enums";
import { prisma } from "../../lib/prisma";
const createMeal = async (payload, userId) => {
    try {
        const res = await prisma.meal.create({
            data: {
                ...payload,
                providerId: userId
            }
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const getMealsData = async (userId) => {
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
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const getPrividerProfile = async (userId) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                meals: {
                    include: {
                        cuisine: true,
                        provider: {
                            select: {
                                name: true,
                                id: true
                            }
                        }
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
const dashboardData = async (userId) => {
    try {
        const res = await prisma.$transaction(async (tx) => {
            const [totalMeals, availableMeals, totalOrders, pendingOrders, totalRevenue] = await Promise.all([
                tx.meal.count({ where: { providerId: userId } }),
                tx.meal.count({ where: { providerId: userId, status: MealStatus.AVAILABLE } }),
                tx.order.count({ where: { providerId: userId } }),
                tx.order.findMany({
                    where: { providerId: userId, status: OrderStatus.PENDING },
                    include: {
                        _count: true,
                    },
                }),
                tx.order.aggregate({
                    where: {
                        providerId: userId, status: OrderStatus.PENDING
                    },
                    _sum: {
                        totalAmount: true
                    }
                })
            ]);
            return { totalMeals, availableMeals, totalOrders, pendingOrders, totalRevenue };
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
export const providerService = {
    createMeal,
    getMealsData,
    dashboardData,
    getPrividerProfile
};
//# sourceMappingURL=providers.service.js.map