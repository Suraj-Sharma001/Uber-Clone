import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './db/db.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.listen(port, ()=>{
    dbConnect()
    console.log(`Server is running at ${port}`)
})