import { OrderStatus } from "@prisma/client";
export declare function createOrder(payload: {
    providerId: string;
    address: string;
    totalAmount: number;
    orderItemIds: string[];
}, userId: string): Promise<({
    orderItems: {
        id: string;
        createdAt: Date;
        userId: string;
        price: number;
        orderId: string | null;
        mealId: string;
        quantity: number;
    }[];
} & {
    status: import("@prisma/client").$Enums.OrderStatus;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    address: string;
    customerId: string;
    totalAmount: number;
    paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
}) | null>;
export declare const orderService: {
    orderList: () => Promise<unknown>;
    createOrder: typeof createOrder;
    orderStatus: (id: string) => Promise<unknown>;
    changeStatus: (status: OrderStatus, orderId: string, providerId: string) => Promise<unknown>;
    userOrders: (id: string) => Promise<unknown>;
    createOrderItem: (payload: any, userId: string) => Promise<unknown>;
    getOrderItem: (userId: string) => Promise<unknown>;
    providerOrders: (id: string) => Promise<unknown>;
};
//# sourceMappingURL=orders.service.d.ts.map