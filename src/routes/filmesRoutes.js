const express = require("express")
const router = express.Router()

const controller = require("../controller/filmesController")

router.get("/all", controller.getAll)
router.post("/create", controller.createFilme)
router.patch("/update/:id", controller.updateFilmById)

module.exports = router