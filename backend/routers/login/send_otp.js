import express from "express"
import rateLimit from "express-rate-limit";
import otp from "../../controller/login/otp.js"
const router = express.Router()
const otp_limit = rateLimit({
    windowMs:5*60*1000,
    max:3,
    message:{message:"Too many OTP requests. Please try again after 5 minutes."}
})
router.post("/",otp_limit,otp)

export default router