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
            error: "user creation failed",
            message: e
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const id = req.user?.id;
    
        console.log(id, "iddd")

        const result = await userService.updateUser(payload, id!);
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

const useStatusUpdate = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
    
        console.log(id, "iddd")

        const result = await userService.updateUserStatus({status}, id as string);
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

const deleteUser = async (req: Request, res: Response) => { 
    try {
        const {id} = req.params;
        const result = await userService.deleteUser(id as string);
        res.status(200).json({
            data: result
        })
    
    } catch (e) {
        res.status(400).json({
            error: "cuisine delete failed",
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