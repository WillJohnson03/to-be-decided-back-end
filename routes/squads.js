import { Router } from 'express'
import * as squadsCtrl from '../controllers/squads.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', squadsCtrl.index)
router.get('/:id', squadsCtrl.show)

/*---------- Protected Routes ----------*/

router.use(decodeUserFromToken)
router.post('/', checkAuth, squadsCtrl.create)
router.delete('/:id', checkAuth, squadsCtrl.delete)

export {
  router
}