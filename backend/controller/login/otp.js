import send_otp from "../../services/otpservices.js";
import store_otp from "../../model/storeotp.js";
import find_user from "../../model/finduser.js";

const otp = async(req,res)=>{
    try{
             const OTP = Math.floor(100000+Math.random()*900000)
             const {email} = req.body
             const user_email = email.trim().toLowerCase();
             const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
             if(!regex.test(user_email)){
                return res.status(400).json({message:"please enter valid email"})
             }
             const user =await find_user(user_email);
             if(!user){
                return res.status(403).json({message:"user not found! please register"})
             }
              send_otp(user_email,OTP)
              store_otp(user.id,OTP)
              return res.status(201).json({message:"otp sent successfully"})
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
}
export default otp