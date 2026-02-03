import { prisma } from "@/lib/prisma.js"
import { UserRole } from "@prisma/client"
import { error } from "node:console"




const seedAdmin = async () => {
    try {

        const adminData = {
            name: "Admin user1",
            email: 'admin@gmail.com',
            role: UserRole.ADMIN,
            password: "admin1234"
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        })
        if(existingUser){
            throw new Error("User already exists")
        }


        const signupAdmin = await fetch('http://localhost:3000/api/auth/sign-up/email', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Origin': "http://localhost:4000"
            },
            body: JSON.stringify(adminData)
        })
 

        if (signupAdmin.ok) {
            await prisma.user.update({
                where: {
                    email: adminData.email
                },
                data: {
                    emailVerified: true
                }
            })
        }
        console.log("status update success")

    } catch (err) {
        console.log(err)
    }
}

seedAdmin()