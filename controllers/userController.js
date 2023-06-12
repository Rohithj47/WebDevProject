import { body, validationResult } from 'express-validator'
import bcrypt from 'bcrypt';


import User from '../models/User.js';

export const getUser = [
    (req, res) => {
        const currentUser = req.session["currentUser"]
        if(!currentUser) {
            return res.status(401).json({ error: "No User"} )
        }
        User.findById(currentUser._id)
            .then((user) => {
                const { password, ...other } = user._doc
                return res.status(200).json(other)
            })
            .catch((err) => {
                return res.status(401).json({ error: err })
            })
    }
]