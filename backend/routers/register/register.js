import express from "express"
import db from "../../config/db.js"
import register from "../../controller/register.js"

const router = express.Router()
router.post("/",register)
export default router