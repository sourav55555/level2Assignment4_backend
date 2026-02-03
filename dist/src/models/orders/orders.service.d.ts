import { OrderStatus } from "../../../prisma/generated/prisma/enums";
export declare function createOrder(payload: {
    providerId: string;
    address: string;
    totalAmount: number;
    orderItemIds: string[];
}, userId: string): Promise<({
    orderItems: {
        id: string;
        price: number;
        createdAt: Date;
        userId: string;
        orderId: string | null;
        mealId: string;
        quantity: number;
    }[];
} & {
    status: OrderStatus;
    id: string;
    providerId: string;
    createdAt: Date;
    updatedAt: Date;
    address: string;
    customerId: string;
    totalAmount: number;
    paymentStatus: import("../../../prisma/generated/prisma/enums").PaymentStatus;
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