import { DietPreference } from "@prisma/client";
type MealFilter = {
    cuisineIds?: string[];
    dietPreferences?: DietPreference[];
    minPrice?: number;
    maxPrice?: number;
};
export declare const mealService: {
    mealList: (filters?: MealFilter) => Promise<({
        provider: {
            id: string;
            name: string;
        };
        cuisine: {
            id: string;
            name: string;
        };
    } & {
        status: import("@prisma/client").$Enums.MealStatus;
        id: string;
        name: string;
        providerId: string;
        ingredient: string;
        price: number;
        dietPreference: import("@prisma/client").$Enums.DietPreference;
        description: string | null;
        tags: string | null;
        imageUrl: string;
        cuisineId: string;
    })[]>;
    getMeal: (mealId: string) => Promise<unknown>;
    deleteMeal: (mealId: string, userId: string) => Promise<unknown>;
    updateMeal: (payload: Partial<any>, mealId: string, userId: string) => Promise<unknown>;
};
export {};
//# sourceMappingURL=meal.service.d.ts.map