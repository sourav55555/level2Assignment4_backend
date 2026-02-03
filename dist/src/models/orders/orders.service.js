import { prisma } from "../../lib/prisma";
const orderList = async () => {
    try {
        const res = await prisma.order.findMany();
        return res;
    }
    catch (e) {
        return e;
    }
};
const userOrders = async (id) => {
    try {
        const res = await prisma.order.findMany({
            where: {
                customerId: id
            },
            include: {
                orderItems: {
                    include: {
                        meal: true,
                    },
                },
                provider: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                }
            },
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const providerOrders = async (id) => {
    try {
        const res = await prisma.order.findMany({
            where: {
                providerId: id
            },
            include: {
                orderItems: {
                    include: {
                        meal: true,
                    },
                },
                provider: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                }
            },
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const createOrderItem = async (payload, userId) => {
    try {
        const res = await prisma.orderItem.create({
            data: {
                ...payload,
                userId
            }
        });
      
        return res;
    }
    catch (e) {
 
        return e;
    }
};
const getOrderItem = async (userId) => {
    try {
        const res = await prisma.orderItem.findMany({
            where: {
                userId
            },
            include: {
                meal: {
                    select: {
                        name: true,
                        price: true,
                        id: true,
                        imageUrl: true
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
export async function createOrder(payload, userId) {
    return await prisma.$transaction(async (tx) => {
        // 1️⃣ Fetch cart items by IDs + ownership
        const items = await tx.orderItem.findMany({
            where: {
                id: { in: payload.orderItemIds },
                userId,
                orderId: null,
            },
            include: {
                meal: true,
            },
        });
        if (items.length === 0) {
            throw new Error("Invalid cart items");
        }
        const providerIds = new Set(items.map((i) => i.meal.providerId));
        const providerIdsArray = Array.from(providerIds);
        if (providerIdsArray.length !== 1) {
            throw new Error("Items must belong to the same provider");
        }
        const order = await tx.order.create({
            data: {
                customerId: userId,
                providerId: providerIdsArray[0],
                address: payload.address,
                totalAmount: payload.totalAmount,
            },
        });
        await tx.orderItem.updateMany({
            where: {
                id: { in: payload.orderItemIds },
                userId,
                orderId: null,
            },
            data: {
                orderId: order.id,
            },
        });
        return await tx.order.findUnique({
            where: { id: order.id },
            include: { orderItems: true },
        });
    });
}
const orderStatus = async (id) => {
    try {
        const res = await prisma.order.findUnique({
            where: {
                id
            },
            select: {
                status: true
            }
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const changeStatus = async (status, orderId, providerId) => {
    try {
        const res = await prisma.order.update({
            where: {
                id: orderId,
                providerId: providerId
            },
            data: {
                status
            }
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
export const orderService = {
    orderList,
    createOrder,
    orderStatus,
    changeStatus,
    userOrders,
    createOrderItem,
    getOrderItem,
    providerOrders
};
//# sourceMappingURL=orders.service.js.map