import { Router } from 'express'
import * as brewController from "../controllers/brew-controller.js"
import passport from 'passport'

const router = Router()

router.get('/stats/:bid', passport.authenticate('local'), brewController.stats)

router.put('/like', passport.authenticate('local'), brewController.like)

router.put('/dislike', passport.authenticate('local'), brewController.dislike)

router.put('/visit', passport.authenticate('local'), brewController.visit)

router.put('/own', passport.authenticate('local'), brewController.own)

router.put('/review', passport.authenticate('local'), brewController.createReview)

router.get('/review/:bid', brewController.getReview)

router.delete('/review', passport.authenticate('local'), brewController.deleteReview)


export default router


