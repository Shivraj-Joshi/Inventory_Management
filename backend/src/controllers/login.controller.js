import userLogin from '../services/login.service.js'

const login = async (req, res) => {

    try {
        const { email, password } = req.body
        const result = await userLogin(email, password)

        res.status(200).json(result)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }



}

export default login