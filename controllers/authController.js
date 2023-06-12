import { body, validationResult } from 'express-validator'
import bcrypt from 'bcrypt';


import User from '../models/User.js';



export const register = [
    body(["username, password, email"], "Username/Password/Email cannot be empty/ less characters")
        .trim()
        .isLength({min:3})
        .escape(),

    (req, res) => {
        const errors = validationResult(req.body)

        if (!errors.isEmpty()) { res.status(401).json({ error: errors.array()})}
        // Lets create the User 

        bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                
                req.body.password = hash
                User.create(req.body)
                    .then((user) => {
                        const { password, ...other } = user._doc
                        req.session["currentUser"] = other
                        return res.status(201).json(other)
                    })
                    .catch(err => res.status(500).json(err) )
            })
            .catch(err => res.status(500).json(err))

    }
]

export const login = [
    body("email", "Pls enter valid email & password")
        .trim()
        .isLength({min:3})
        .escape(),
    body("password", "Pls enter valid email & password")
        .trim()
        .isLength({min:3})
        .escape(),

    (req, res) => {
        const err = validationResult(req.body)
        if(!err.isEmpty()) { return res.status(401).json( {errors : err.array()})}

        User.findOne({ email: req.body.email })
            .then((user) => {
                if (!user) { return res.status(400).json({"message": "Not Found"}) }

                bcrypt.compare(req.body.password, user.password)
                    .then((same) => {
                        if(!same) { return res.status(400).json({ error: "Incorrect Password"}) }

                        const { password, ...other } = user._doc
                        req.session["currentUser"] = other
                        return res.status(200).json(other)
                    })
                    .catch((err) => {
                        return res.status(400).json({ error: "Incorrect Password"})
                    })
            })
            .catch((err) => {
                return res.status(400).json({ error: "User not Found" })
            })

    }
]