import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
import cors from "cors"
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())

import register from "./routers/register/register.js"
import login from "./routers/login/login.js"
import send_otp from "./routers/login/send_otp.js"
import update_password from "./routers/login/update_password.js"


app.use("/api/register",register);
app.use("/api/login",login)
app.use("/api/sendotp",send_otp)
app.use("/api/updatepassword",update_password)


app.listen(3000,()=>{
    console.log("backend is running on port 3000")
})