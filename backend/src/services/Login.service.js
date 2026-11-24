import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'



const userLogin = async (email, password) => {
    const user = await prisma.user.findUnique(
        { where: { email } }  //finding the user in the postgresDB via unique email
    )


    if (!user) {
        throw new Error('Invalid Credentials')
    }


    const isMatch = await bcrypt.compare(password, user.password)   // comparing the password from the request body  to the password of the user in the database 

    if (!isMatch) {
        const err = new Error('Invalid Credentials')
        err.status = 401
        throw err
    }

    //signing the request with jwt for further authentication in subsiquent requests of the loggedin user

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