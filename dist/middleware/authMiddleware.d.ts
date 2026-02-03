import { NextFunction, Request, Response } from "express";
import { UserRole } from "@prisma/client";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string;
            };
        }
    }
}
declare const authenticate: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default authenticate;
//# sourceMappingURL=authMiddleware.d.ts.map