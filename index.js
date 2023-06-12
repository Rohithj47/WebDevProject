import express, { json } from 'express'
import { connect } from 'mongoose'
import morgan from 'morgan'
import helmet, { crossOriginResourcePolicy } from "helmet"
import { config } from 'dotenv'

// import userRoute from './routes/users'
import authRoute from './routes/auth'
import postRoute from './routes/post'
// import multer, { diskStorage } from "multer"
import { join } from 'path'
import cors from 'cors'

// Add a Http Server 
import { createServer } from 'http'

config()

const app = express()
const PORT = process.env.PORT || 3000
const server = createServer(app);

connect(
    process.env.MONGOURI, () => {
        console.log('connected to DB')
    }
)

//Enable CORS 
app.use(cors());


app.use(json())
app.use(helmet())
app.use(crossOriginResourcePolicy({ policy: "cross-origin" }));



app.use('/api/auth', authRoute)




server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})