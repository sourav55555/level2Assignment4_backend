import { NextFunction, Request, Response } from "express"
import {auth as betterAuth} from '../lib/auth'
import { UserRole } from "../lib/constants"


declare global{
    namespace Express{
        interface Request{
            user?: {
                id: string,
                name: string,
                email: string,
                emailVerified: boolean,
                role: string
            }
        }
    }
}


const authenticate = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {

 
        try {
                const session = await betterAuth.api.getSession({
                headers: req.headers as any
            })
 

            if (!session) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized access"
                })
            }
         

            req.user = {
                id: session.user.id,
                name: session.user.name,
                email: session.user.email,
                role: session.user.role as string,
                emailVerified: session.user.emailVerified
            }
            if (roles.length && !roles.includes(req.user.role as unknown as UserRole)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden, you don't have permission"
                })
            }
            next()
        } catch (err) {
            next(err)
        }
    }
}

export default authenticate;