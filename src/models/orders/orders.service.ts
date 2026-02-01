import { OrderStatus } from "../../../prisma/generated/prisma/enums";
import { prisma } from "../../lib/prisma"

interface CreateOrderPayload {
  providerId: string;
  totalAmount: number;
  address: string;
  items: {
    mealId: string;
    quantity: number;
    price: number;
  }[];
}

const orderList = async () => {
    try {
        const res = await prisma.order.findMany();
        return res
    } catch (e) {
        return e;
    }

}

// const createOrder = async (payload: any, userId: string) => {

//     try {
        
//         const res = await prisma.order.create({
//             data: {
//                 ...payload,
//                 customerId: userId,
//                 orderList:{
//                     create: payload.otherItems
//                 }
//             }
//         })
//         console.log(res, "response")
//         return res
//     } catch (e) {
//         console.log(e)
//         return e
//     }

// }

const createOrder = async (payload: CreateOrderPayload, userId: string) => {
  try {
    const res = await prisma.order.create({
      data: {
        customerId: userId,
        providerId: payload.providerId,
        totalAmount: payload.totalAmount,
        address: payload.address,
        status: "PENDING", // optional, has default
        paymentStatus: "PENDING", // optional, has default
        orderItems: {
          create: payload.items.map(item => ({
            mealId: item.mealId,
            quantity: item.quantity,
            price: item.price,
          }))
        }
      },
      include: {
        orderItems: true, // Include created items in response
      }
    });
    
    console.log(res, "response");
    return res;
  } catch (e) {
    console.error("Order creation failed:", e);
    throw e; // Don't return error, throw it so caller can handle
  }
};

const orderStatus = async (id: string)=>{
      try {
        const res = await prisma.order.findUnique({
            where:{
                id
            },
            select:{
                status: true
            }
        });
        return res
    } catch (e) {
        return e;
    }
}
const changeStatus = async (status: OrderStatus,orderId: string, providerId: string)=>{
      try {
        const res = await prisma.order.update({
            where:{
                id: orderId,
                providerId: providerId
            },
            data:{
                status
            }
        });
        return res
    } catch (e) {
        return e;
    }
}

export const orderService = {
    orderList,
    createOrder,
    orderStatus,
    changeStatus
}