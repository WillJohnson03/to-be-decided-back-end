import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', reviewsCtrl.index)

/*---------- Protected Routes ----------*/


export {
  router
}