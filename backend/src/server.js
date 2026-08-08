import express from 'express'
import authRouter from './routes/auth.routes.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json());


app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Inventory Management project is running')
})

app.listen(PORT, () => {
    console.log(`Your app is running on port: ${PORT}`)
})