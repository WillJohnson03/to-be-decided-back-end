import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:name', moviesCtrl.getMovie)

/*---------- Protected Routes ----------*/

export {
  router
}