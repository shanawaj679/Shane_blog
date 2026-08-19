import bcrypt from "bcryptjs"
import update_password from "../../model/updateuserpassword.js"
import find_user from "../../model/finduser.js"
import checkotp from "../../model/checkotp.js"

const update_user_password = async (req,res)=>{
    try{
           const {postotp,email,password , cpassword}=req.body;
           const user_email = email.trim().toLowerCase()
           const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
           if(!regex.test(user_email)){
            return res.status(400).json({message:"invalid email"})
           }
           const user = await find_user(user_email)
           if(!user){
            return res.status(400).json({message:"user didn't exists please register"})
           }
           if(password.length<8){
            return res.status(400).json({message:"password length must be greater than 8 char"})
           }
           if(password!==cpassword){
            return res.status(400).json({message:"password do not match"})
           }
    
            const verify_otp =await checkotp(postotp,user.id)
            if(!verify_otp){
                return res.status(401).json({message:"wrong otp or otp is expird"})
            }
              const hashed_password = await bcrypt.hash(password,10)
            await update_password(hashed_password,user.id)
            return res.status(200).json({message:"password changed successfully"})
           
    }
    catch(err){
        console.log(err)
        return res.status(500).json({message:"internal server error"})
    }
}
export default update_user_password