import { Request, Response } from "express";
import { adminService } from "./admin.service";


// const createadmin = async (req: Request, res: Response) => {
//     try {
//         const payload = req.body;
//         const adminId = req.admin?.id;
//         console.log(payload,adminId, "payload")
//         const result = await adminService.createadmin(payload, adminId!);
//         console.log(result, "result")
//         res.status(201).json(result)
//     } catch (e) {
//         res.status(400).json({
//             error: "admin creation failed",
//             message: e
//         })
//     }
// }
const getDashboard = async (req: Request, res: Response) => { 
    try {
        const result = await adminService.getDashboard();
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "Failed to fetch admin dashboard",
            message: e
        })
    }
}




export const adminController = {
    getDashboard
}