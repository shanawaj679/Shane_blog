import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
import cors from "cors"
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())

import register from "./routers/register.js"



app.use("/api/register",register);


app.listen(3000,()=>{
    console.log("backend is running on port 3000")
})