import db from "../config/db.js";
import find_user from "../model/finduser.js";
import confirmpassword from "../model/confirmpassword.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


const login = async(req,res)=>{
    try{
            const {email,password}=req.body
            if(!email||!password){
                return res.status(400).json({message:"please fill all the details"})
            }
            const user_email = email.trim().toLowerCase()
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!regex.test(user_email)){
                return res.status(400).json({message:"please enter valid email"})
            }
            if(await find_user(user_email)){
                const result = await confirmpassword(user_email,password)
                if(result.verified){
                    const user = result.user
                   const jwtoken = jwt.sign(
    {
        id: user.id,
        role: user.role
    },
    process.env.jwt_key,
    {
        expiresIn: "1d"
    }
);

res.cookie("token", jwtoken, {

    httpOnly: true,
 maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",

});
                    return res.status(200).json({message:"login successful"})
                }

                else{
                    return res.status(403).json({message:"wrong password"})
                }
                  
            }
            else{
                return res.status(404).json({message:"user not found please register"})
            }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
}
export default login