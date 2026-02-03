import { prisma } from "../../lib/prisma";
const cuisineList = async () => {
    try {
        const res = await prisma.cuisine.findMany();
        return res;
    }
    catch (e) {
        return e;
    }
};
const createCuisine = async (payload) => {
    try {
        const res = await prisma.cuisine.create({
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
const updateCuisine = async (id, payload) => {
    try {
        const res = await prisma.cuisine.update({
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
const deleteCuisine = async (id) => {
    try {
        const res = await prisma.cuisine.delete({
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
export const cuisineService = {
    cuisineList,
    createCuisine,
    deleteCuisine,
    updateCuisine
};
//# sourceMappingURL=cuisine.service.js.map