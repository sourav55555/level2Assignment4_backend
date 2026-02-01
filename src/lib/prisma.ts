import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "../../prisma/generated/prisma/client";



// const connectionString = `${process.env.DATABASE_URL}`
const connectionString = "postgresql://neondb_owner:npg_kq1oT9YyvDUn@ep-divine-bonus-ah7jtuw3-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }