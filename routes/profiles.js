import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show)
router.put('/:id', checkAuth, profilesCtrl.update)

router.post('/addVideoGame', checkAuth, profilesCtrl.addVideoGame)
router.post('/addBoardGame', checkAuth, profilesCtrl.addBoardGame)
router.post('/addMovie', checkAuth, profilesCtrl.addMovie)

export { router }
