import express from "express"
 import rateLimit from "express-rate-limit";
import update_password from "../../controller/login/update_password.js"
const router = express.Router()
const update_password_limit = rateLimit({
    windowMs:5*60*1000,
    limit:3,
    message:{message:"too many attempts please try again after 5 mins"}
})
router.patch("/",update_password_limit,update_password)
export default router