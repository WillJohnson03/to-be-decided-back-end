import { Router } from "express";
import * as videoGamesCtrl from '../controllers/video-games.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', videoGamesCtrl.index)

/*---------- Protected Routes ----------*/


export {
  router
}