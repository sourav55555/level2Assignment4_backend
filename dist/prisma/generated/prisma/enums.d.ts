export declare const UserRole: {
    readonly USER: "USER";
    readonly PROVIDER: "PROVIDER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const Status: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const DietPreference: {
    readonly VEGETARIAN: "VEGETARIAN";
    readonly VEGAN: "VEGAN";
    readonly NON_VEGETARIAN: "NON_VEGETARIAN";
    readonly GLUTEN_FREE: "GLUTEN_FREE";
    readonly HALAL: "HALAL";
    readonly KETO: "KETO";
};
export type DietPreference = (typeof DietPreference)[keyof typeof DietPreference];
export declare const MealStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly UNAVAILABLE: "UNAVAILABLE";
};
export type MealStatus = (typeof MealStatus)[keyof typeof MealStatus];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly PREPARING: "PREPARING";
    readonly OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
//# sourceMappingURL=enums.d.ts.map