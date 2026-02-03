import { auth as betterAuth } from '../lib/auth';
const authenticate = (...roles) => {
    return async (req, res, next) => {

        try {
            const session = await betterAuth.api.getSession({
                headers: req.headers
            });
 
            if (!session) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized access"
                });
            }
            req.user = {
                id: session.user.id,
                name: session.user.name,
                email: session.user.email,
                role: session.user.role,
                emailVerified: session.user.emailVerified
            };
            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden, you don't have permission"
                });
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
export default authenticate;
//# sourceMappingURL=authMiddleware.js.map