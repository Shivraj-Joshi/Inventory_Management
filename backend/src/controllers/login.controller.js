import userLogin from '../services/login.service.js'

const login = async (req, res) => {

    try {
        const { email, password } = req.body   // destructuring email and password from request body
        const result = await userLogin(email, password)  // passing the email and password as parameters to the userLogin function/service

        res.status(200).json(result)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }



}

export default login