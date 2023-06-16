import express, { json } from 'express'
import { connect } from 'mongoose'
import session from 'express-session'
import { config } from 'dotenv'
import morgan from 'morgan'

import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
// import multer, { diskStorage } from "multer"
import { join } from 'path'
import cors from 'cors'

// Add a Http Server 
import { createServer } from 'http'

config()

const app = express()
const PORT = process.env.PORT || 4000
const server = createServer(app);


connect(process.env.MONGOURI)
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })

//Enable CORS - TODO: currently allowing all clients 
app.use(cors());
app.use(morgan("short"))
//Use session
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}))
app.use(json())
app.use(cors());



app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)




server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})