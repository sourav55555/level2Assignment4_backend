import { prisma } from "@/lib/prisma.js";


const reviewList = async () => {
    try {
        const res = await prisma.review.findMany();
        return res
    } catch (e) {
        return e;
    }

}
const createReview = async (payload: any, customerId: string) => {

    try {
        
        const res = await prisma.review.create({
            data: {
                ...payload,
                customerId: customerId,
            }
        })
  
        return res
    } catch (e) {

        return e
    }

}

export const reviewService = {
    reviewList,
    createReview
}