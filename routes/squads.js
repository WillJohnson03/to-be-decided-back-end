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
router.put('/:id', checkAuth, squadsCtrl.update)
router.put('/:id/addUser/:mID', checkAuth, squadsCtrl.addUser)
router.delete('/:id', checkAuth, squadsCtrl.delete)

export {
  router
}