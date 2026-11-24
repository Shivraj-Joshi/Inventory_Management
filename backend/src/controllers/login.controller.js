import userLogin from '../services/login.service.js'

const login = async (req, res) => {

    try {
        const { email, password } = req.body   // destructuring email and password from request body
        const result = await userLogin(email, password)  // passing the email and password as parameters to the userLogin function/service

        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({ message: error.status ? error.message : 'Something went wrong' })
    }



}

export default login