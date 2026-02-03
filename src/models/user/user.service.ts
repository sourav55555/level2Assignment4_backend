import { prisma } from "@/lib/prisma.js";


const userList = async () => {
    try {
        const res = await prisma.user.findMany({
            where:{
                role: {in: ["USER", "PROVIDER"]}
            }
        });
        return res
    } catch (e) {
        return e;
    }

}
const updateUser = async (payload: any, id: string) => {

    try {
        
        const res = await prisma.user.update({
            where:{
                id
            },
            data: {
                ...payload
            }
        })

        return res
    } catch (e) {

        return e
    }

}
const updateUserStatus = async (payload: any, id: string) => {

    try {
        
        const res = await prisma.user.update({
            where:{
                id
            },
            data: {
                ...payload
            }
        })

        return res
    } catch (e) {

        return e
    }

}

const deleteUser = async(id: string) => {
    try {
        const res = await prisma.user.delete({
            where: {
                id
            }
        });
        return res
    } catch (e) {
        return e;
    }


}

const getMyProfile = async(id: string) => {
    try {
        const res = await prisma.user.findUnique({
            where:{
                id
            }
        });
        return res
    } catch (e) {
        return e;
    }
}

export const userService = {
    userList,
    updateUser,
    updateUserStatus, 
    deleteUser,
    getMyProfile
}