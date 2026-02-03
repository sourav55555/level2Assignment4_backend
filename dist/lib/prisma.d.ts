import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from '@prisma/client';
declare const prisma: pkg.PrismaClient<{
    adapter: PrismaPg;
}, never, import("@prisma/client/runtime/client").DefaultArgs>;
export { prisma };
//# sourceMappingURL=prisma.d.ts.map