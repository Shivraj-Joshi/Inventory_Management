import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Inventory Management project is now officialy began this is a protfolio worthy prject')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})