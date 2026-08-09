import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {

    const authHeader = req.headers.authorization



    try {

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token not found' })
        }

        const token = authHeader.split(' ')[1]  // extracting JWT

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded //sending back the JWT, to the user, after verification 
        next()

    } catch (error) {
        res.status(401).json({ message: 'Invalid Token !!' })
    }


}

export default authenticate