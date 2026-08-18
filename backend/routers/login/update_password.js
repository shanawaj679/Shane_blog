import express from "express"
import update_password from "../../controller/login/update_password.js"
const router = express.Router()

router.post("/",update_password)
export default router