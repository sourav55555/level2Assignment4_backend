import { Request, Response } from "express";
import { userService } from "./user.service";


// const createuser = async (req: Request, res: Response) => {
//     try {
//         const payload = req.body;
//         const userId = req.user?.id;
//         console.log(payload,userId, "payload")
//         const result = await userService.createuser(payload, userId!);
//         console.log(result, "result")
//         res.status(201).json(result)
//     } catch (e) {
//         res.status(400).json({
//             error: "user creation failed",
//             message: e
//         })
//     }
// }
const getAlluser = async (req: Request, res: Response) => { 
    try {
        const result = await userService.userList();
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "Failed to fetch users",
            message: e
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const id = req.user?.id;
    


        const result = await userService.updateUser(payload, id!);

        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "User update failed",
            message: e
        })
    }
}

const useStatusUpdate = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {status} = req.body;

        const result = await userService.updateUserStatus({status}, id as string);

        res.status(201).json({
            success: true,
            data: result
        })
    } catch (e) {
        res.status(400).json({
            error: "User status update failed",
            message: e
        })
    }
}

const deleteUser = async (req: Request, res: Response) => { 
    try {
        const {id} = req.params;
        const result = await userService.deleteUser(id as string);
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "User deletion failed",
            message: e
        })
    }
}

const getMyProfile = async (req: Request, res: Response) => { 
    try {
        const userId = req.user?.id;
        const result = await userService.getMyProfile(userId!);
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "Failed to get profile",
            message: e
        })
    }
}



export const userController = {
    getAlluser,
    updateUser,
    useStatusUpdate,
    deleteUser,
    getMyProfile
}