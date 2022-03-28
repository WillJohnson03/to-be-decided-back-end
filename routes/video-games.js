import { Router } from "express";
import * as videoGamesCtrl from '../controllers/video-games.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:name', videoGamesCtrl.getVideoGame)

/*---------- Protected Routes ----------*/


export {
  router
}