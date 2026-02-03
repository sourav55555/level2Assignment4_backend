import { prisma } from "../../lib/prisma";
const userList = async () => {
    try {
        const res = await prisma.user.findMany({
            where: {
                role: { in: ["USER", "PROVIDER"] }
            }
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const updateUser = async (payload, id) => {
    try {
        const res = await prisma.user.update({
            where: {
                id
            },
            data: {
                ...payload
            }
        });
   
        return res;
    }
    catch (e) {
   
        return e;
    }
};
const updateUserStatus = async (payload, id) => {
    try {
        const res = await prisma.user.update({
            where: {
                id
            },
            data: {
                ...payload
            }
        });
    
        return res;
    }
    catch (e) {

        return e;
    }
};
const deleteUser = async (id) => {
    try {
        const res = await prisma.user.delete({
            where: {
                id
            }
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
const getMyProfile = async (id) => {
    try {
        const res = await prisma.user.findUnique({
            where: {
                id
            }
        });
        return res;
    }
    catch (e) {
        return e;
    }
};
export const userService = {
    userList,
    updateUser,
    updateUserStatus,
    deleteUser,
    getMyProfile
};
//# sourceMappingURL=user.service.js.map