import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';
import bycrpt from 'bcrypt'



const userLogin = async (email, password) => {
    const user = await prisma.user.findUnique(
        { where: { email } }
    )

    if (!user) {
        throw new Error('Invalid Credentials')
    }

    const isMatch = await bycrpt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Invalid Password , try agian!!')
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