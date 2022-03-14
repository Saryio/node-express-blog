import { Router } from 'express'
import { index, lucas } from '../services/LucasService'

const router = Router()
router.get('/', index)
router.get('/lucas', lucas)

module.exports = router