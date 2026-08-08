import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'


const prisma = new PrismaClient();

const main = async () => {

    //hashing the admin password 

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)

    // creating Admin into the database

    const admin = await prisma.user.upsert(
        {
            where: { email: process.env.ADMIN_EMAIL },
            update: {},
            create: {
                name: "Inventory Admin",
                role: "ADMIN",
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword
            }

        }

    )


}


main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })