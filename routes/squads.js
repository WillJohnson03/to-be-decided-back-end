import { Router } from 'express'
import * as squadsCtlr from '../controllers/squads.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', squadsCtlr.index)

/*---------- Protected Routes ----------*/

export {
  router
}