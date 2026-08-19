import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser";
const app = express()
import cors from "cors"
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())
app.use(cookieParser())

import register from "./routers/register/register.js"
import login from "./routers/login/login.js"
import send_otp from "./routers/login/send_otp.js"
import update_password from "./routers/login/update_password.js"
import getadmindata from "./routers/admin/getadmindata.js"


app.use("/api/register",register);
app.use("/api/login",login)
app.use("/api/sendotp",send_otp)
app.use("/api/updatepassword",update_password)
app.use("/api/admin/me",getadmindata)


app.listen(3000,()=>{
    console.log("backend is running on port 3000")
})