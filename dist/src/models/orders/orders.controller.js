import { orderService } from "./orders.service";

const allOrders = async (req, res) => {
    try {
        const result = await orderService.orderList();
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "order creation failed",
            message: e
        });
    }
};
const userOrders = async (req, res) => {
    try {
        const id = req.user?.id;
   
        const result = await orderService.userOrders(id);

        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "order creation failed",
            message: e
        });
    }
};
const providerOrders = async (req, res) => {
    try {
        const id = req.user?.id;

        const result = await orderService.providerOrders(id);
       
        res.status(200).json({
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "order creation failed",
            message: e
        });
    }
};
const createOrder = async (req, res) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;
    
        const result = await orderService.createOrder(payload, userId);

        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        });
    }
};
const createOrderItem = async (req, res) => {
    try {
        const payload = req.body;
        const userId = req.user?.id;

        const result = await orderService.createOrderItem(payload, userId);
 
        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        });
    }
};
const orderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await orderService.orderStatus(id);
        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Meal creation failed",
            message: e
        });
    }
};
const changeOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const providerId = req.user?.id;
        const payload = req.body;
        const result = await orderService.changeStatus(payload.status, id, providerId);
        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Order status change failed",
            message: e
        });
    }
};
const getOrderItem = async (req, res) => {
    try {
        const userId = req.user?.id;
        const result = await orderService.getOrderItem(userId);
        res.status(201).json({
            success: true,
            data: result
        });
    }
    catch (e) {
        res.status(400).json({
            error: "Order status change failed",
            message: e
        });
    }
};
export const orderController = {
    createOrder,
    orderStatus,
    changeOrderStatus,
    allOrders,
    userOrders,
    createOrderItem,
    getOrderItem,
    providerOrders
};
//# sourceMappingURL=orders.controller.js.map