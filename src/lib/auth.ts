import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './prisma'

// import prisma from '@/lib/prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    },
    trustedOrigins: [
        "http://localhost:4000",     
        "http://192.168.31.91:4000",   
        process.env.APP_URL || "http://localhost:3000",  

    ],
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "USER",
                required: true
            },
            phone: {
                type: "string",
                required: false
            },
            status: {
                type: "string",
                defaultValue: "ACTIVE",
                required: true
            }
        }
    }
})
