import express from "express";
import cors from "cors";
import passport from "passport";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { config } from 'dotenv'
import { connect } from 'mongoose'
import session from "express-session";



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

//Setup cookie options
import "./authenticate.js"

import userRouter from "./routes/userRoutes";
import breweryRouter from "./routes/breweryRoutes";

const app = express();

app.use(
  cors({
    origin: process.env.WHITELISTED_DOMAIN,
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

app.get("/", function (req, res) {
  res.send({ status: "success" });
});

//Start the server in port 8081

server.listen(process.env.PORT, () => {
  console.log(`listening on process.env.PORT ${process.env.PORT}`)
})