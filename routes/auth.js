import { Router } from 'express'
import bcrypt from 'bcrypt'
import { register, login } from '../controllers/authController.js'

const router = Router()
router.post('/register', register)
router.post('/login', login)

export default router


