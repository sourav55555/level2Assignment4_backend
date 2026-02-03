import { Request, Response } from "express";
export declare const orderController: {
    createOrder: (req: Request, res: Response) => Promise<void>;
    orderStatus: (req: Request, res: Response) => Promise<void>;
    changeOrderStatus: (req: Request, res: Response) => Promise<void>;
    allOrders: (req: Request, res: Response) => Promise<void>;
    userOrders: (req: Request, res: Response) => Promise<void>;
    createOrderItem: (req: Request, res: Response) => Promise<void>;
    getOrderItem: (req: Request, res: Response) => Promise<void>;
    providerOrders: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=orders.controller.d.ts.map