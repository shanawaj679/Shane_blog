import express from "express"
import db from "../config/db.js"
import login from "../controller/login.js"
const router = express.Router()
router.post("/",login)
export default router