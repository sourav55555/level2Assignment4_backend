

import { prisma } from "@/lib/prisma.js"
import { OrderStatus, UserRole } from "@prisma/client"


const getDashboard = async () => {
    try {
        const res = await prisma.$transaction(async (tx) => {
            const [totalUsers,providers, customers, totalMeals, totalOrders, totalRevenue, totalReviews, pending,
                confirmed,
                preparing,
                outForDelivery,
                delivered,
                cancelled
            ] = await Promise.all([
                tx.user.count(),
                tx.user.count({
                    where: {
                        role: UserRole.PROVIDER
                    }
                }),
                tx.user.count({
                    where: {
                        role: UserRole.USER
                    }
                }),
                tx.meal.count(),
                tx.order.count(),
                tx.order.aggregate({
                    _sum: {
                        totalAmount: true
                    }
                }),
                tx.review.count(),
                tx.order.count({
                    where: {
                        status: OrderStatus.PENDING
                    }
                }),
                tx.order.count({
                    where: {
                        status: OrderStatus.CONFIRMED
                    }
                }),
                tx.order.count({
                    where: {
                        status: OrderStatus.PREPARING
                    }
                }),
                tx.order.count({
                    where: {
                        status: OrderStatus.OUT_FOR_DELIVERY
                    }
                }),
                tx.order.count({
                    where: {
                        status: OrderStatus.DELIVERED
                    }
                }),
                tx.order.count({
                    where: {
                        status: OrderStatus.CANCELLED
                    }
                })
            ])
            return {
                totalUsers, providers, customers, totalMeals, totalOrders, totalRevenue, totalReviews, orderData: {
                pending,
                confirmed,
                preparing,
                outForDelivery,
                delivered,
                cancelled
            }}
        },{
            timeout: 10000, // 10 seconds
        })
 
        return res
    } catch (e) {
        return e;
    }

}



export const adminService = {
    getDashboard
}