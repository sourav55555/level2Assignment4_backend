import { Request, Response } from "express";
import { reviewService } from "./review.service";


// const createreview = async (req: Request, res: Response) => {
//     try {
//         const payload = req.body;
//         const userId = req.user?.id;
//         console.log(payload,userId, "payload")
//         const result = await reviewService.createreview(payload, userId!);
//         console.log(result, "result")
//         res.status(201).json(result)
//     } catch (e) {
//         res.status(400).json({
//             error: "review creation failed",
//             message: e
//         })
//     }
// }
const getAllreview = async (req: Request, res: Response) => { 
    try {
        const result = await reviewService.reviewList();
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "review creation failed",
            message: e
        })
    }
}

const createReview = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const customerId = req.user?.id;
    
        console.log(customerId, "iddd")

        const result = await reviewService.createReview(payload, customerId!);
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

export const reviewController = {
    getAllreview,
    createReview
}