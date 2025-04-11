const express = require("express")
const router = express.Router()

const userController = require('../controller/user')


router.post("/signup",userController.userSignup)
router.post("/login",userController.userLogin)
router.get("/:id",userController.getUser)


module.exports = router