import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';
import bycrpt from 'bcrypt'
import e from 'express';



const userLogin = async (email, password) => {
    const user = await prisma.user.findUnique(
        { where: { email } }
    )

    console.log(`email: ${email}`)
    console.log(`password: ${password}`)

    if (!user) {
        throw new Error('Invalid Credentials')
    }


    const isMatch = await bycrpt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Invalid Credentials , try agian!!')

    }


    const token = jwt.sign(
        {
            id: user.id,
            role: user.role
        }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    }
    )

    return { token, name: user.name, email: user.email, role: user.role }

}


export default userLogin;