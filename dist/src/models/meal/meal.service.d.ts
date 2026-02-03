import { DietPreference } from "../../../prisma/generated/prisma/enums";
type MealFilter = {
    cuisineIds?: string[];
    dietPreferences?: DietPreference[];
    minPrice?: number;
    maxPrice?: number;
};
export declare const mealService: {
    mealList: (filters?: MealFilter) => Promise<({
        cuisine: {
            id: string;
            name: string;
        };
        provider: {
            id: string;
            name: string;
        };
    } & {
        status: import("../../../prisma/generated/prisma/enums").MealStatus;
        id: string;
        name: string;
        ingredient: string;
        price: number;
        dietPreference: DietPreference;
        description: string | null;
        tags: string | null;
        imageUrl: string;
        providerId: string;
        cuisineId: string;
    })[]>;
    getMeal: (mealId: string) => Promise<unknown>;
    deleteMeal: (mealId: string, userId: string) => Promise<unknown>;
    updateMeal: (payload: Partial<any>, mealId: string, userId: string) => Promise<unknown>;
};
export {};
//# sourceMappingURL=meal.service.d.ts.map