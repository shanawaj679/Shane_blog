import express from "express"
import db from "../config/db.js"
import rateLimit from "express-rate-limit"
import login from "../controller/login.js"
const router = express.Router()
const login_limit = rateLimit({
    windowMs:5*60*1000,
    max:3,
    message:{message:"too many login request please try again after 5 min."}
})
router.post("/",login_limit,login)
export default router