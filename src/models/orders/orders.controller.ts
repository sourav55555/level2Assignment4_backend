import { Request, Response } from "express";
import { orderService } from "./orders.service";


// const createorder = async (req: Request, res: Response) => {
//     try {
//         const payload = req.body;
//         const userId = req.user?.id;
//         console.log(payload,userId, "payload")
//         const result = await orderService.createorder(payload, userId!);
//         console.log(result, "result")
//         res.status(201).json(result)
//     } catch (e) {
//         res.status(400).json({
//             error: "order creation failed",
//             message: e
//         })
//     }
// }
const allOrders = async (req: Request, res: Response) => { 
    try {
        const result = await orderService.orderList();
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "order creation failed",
            message: e
        })
    }
}
const userOrders = async (req: Request, res: Response) => { 
    try {
        const id = req.user?.id;
        console.log(id)
        const result = await orderService.userOrders(id as string);
        console.log(result, "res")
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "order creation failed",
            message: e
        })
    }
}
const providerOrders = async (req: Request, res: Response) => { 
    try {
        const id = req.user?.id;
        console.log(id)
        const result = await orderService.providerOrders(id as string);
        console.log(result, "res")
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "order creation failed",
            message: e
        })
    }
}
const createOrder = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;
        console.log(payload,userId, "payload")
        const result = await orderService.createOrder(payload, userId!);
        console.log(result, "result")
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        })
    }
}
const createOrderItem = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;
        console.log(payload,userId, "payload")
        const result = await orderService.createOrderItem(payload, userId!);
        console.log(result, "result")
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        })
    }
}
const orderStatus = async (req: Request, res: Response) => {
       try {

        const {id} = req.params;
        const result = await orderService.orderStatus(id as string);

        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        })
    }
}
const changeOrderStatus = async (req: Request, res: Response) => {
       try {

        const { id } = req.params;
        const providerId = req.user?.id;
        const payload = req.body;

        const result = await orderService.changeStatus(payload.status, id as string, providerId!);

        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Order status change failed",
            message: e
        })
    }
}
const getOrderItem = async (req: Request, res: Response) => {
       try {

        const userId = req.user?.id;
        const result = await orderService.getOrderItem(userId as string);

        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "Order status change failed",
            message: e
        })
    }
}

export const orderController = {
    createOrder,
    orderStatus,
    changeOrderStatus,
    allOrders,
    userOrders,
    createOrderItem,
    getOrderItem,
    providerOrders
    
}