import { Cuisine } from "../../../prisma/generated/prisma/client";
import { prisma } from "../../lib/prisma"

const cuisineList = async () => {
    try {
        const res = await prisma.cuisine.findMany();
        return res
    } catch (e) {
        return e;
    }

}
const createCuisine = async(payload: Cuisine) => {
    try {
        const res = await prisma.cuisine.create({
            data: {
                ...payload
            }
        });
        return res
    } catch (e) {
        return e;
    }

}
const updateCuisine = async(id: string, payload: Cuisine) => {
    try {
        const res = await prisma.cuisine.update({
            where: {
                id
            },
            data: {
                ...payload
            }
        });
        return res
    } catch (e) {
        return e;
    }

}
const deleteCuisine = async(id: string) => {
    try {
        const res = await prisma.cuisine.delete({
            where: {
                id
            }
        });
        return res
    } catch (e) {
        return e;
    }

}

export const cuisineService = {
    cuisineList,
    createCuisine,
    deleteCuisine,
    updateCuisine
}