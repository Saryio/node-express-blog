import express from "express"
import { bomdia } from "../services/TesteService"
const router = express.Router()

router.get('/', (req, res) => {
    res.send("bom dia ronaldo")
})

router.get('/bomdia', bomdia)

router.get('/bomdia/:uid', bomdia)

module.exports = router