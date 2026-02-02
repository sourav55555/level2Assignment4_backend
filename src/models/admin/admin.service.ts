import { prisma } from "../../lib/prisma"

const getDashboard = async () => {
    try {
        const res = await prisma.user.findMany({
            where:{
                role: {in: ["ADMIN", "PROVIDER"]}
            }
        });
        return res
    } catch (e) {
        return e;
    }

}



export const adminService = {
    getDashboard
}