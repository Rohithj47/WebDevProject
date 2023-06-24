import express from "express";
import cors from "cors";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from 'dotenv'
import { connect } from 'mongoose'
import session from "express-session";
import userRouter from "./routes/user.js"
// import brewRouter from './routes/brew'



config()

// Connect DB
connect(process.env.MONGOURI)
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })


//Setup Auth stratergies
import "./stratergy.js"

//TODO: Does this have to be here?
//Setup cookie options
import "./authenticate.js"


const app = express();

app.use(
  cors({
    //TODO: FIX this
    // origin: process.env.WHITELISTED_DOMAIN,
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(passport.initialize());


//Routes
app.use("/users", userRouter)
// app.use("/breweries", brewRouter)

app.get("/", function (req, res) {
  res.send({ status: "Hello" });
});

//Starting the server

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})