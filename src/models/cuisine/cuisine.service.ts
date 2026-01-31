import { prisma } from "../../lib/prisma"

const cuisineList = async () => {
    try {
        const res = await prisma.cuisine.findMany();
        return res
    } catch (e) {
        return e;
    }

}

export const cuisineService = {
    cuisineList
}