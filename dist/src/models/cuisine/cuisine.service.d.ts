import { Cuisine } from "../../../prisma/generated/prisma/client";
export declare const cuisineService: {
    cuisineList: () => Promise<unknown>;
    createCuisine: (payload: Cuisine) => Promise<unknown>;
    deleteCuisine: (id: string) => Promise<unknown>;
    updateCuisine: (id: string, payload: Cuisine) => Promise<unknown>;
};
//# sourceMappingURL=cuisine.service.d.ts.map