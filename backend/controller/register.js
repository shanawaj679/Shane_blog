import bcrypt from "bcryptjs"
import sendTestEmail from "../services/verificationemail.js"
import adduser from "../model/adduser.js"
import find_user from "../model/finduser.js"
const register = async (req,res)=>{
    try{
       const {name,email,password,cpassword,check}=req.body
       if(!check){
         return res.status(400).json({message:"please accept terms of service and acknowledgement"})
       }
       if(!name||!email||!password||!cpassword){
        return res.status(400).json({message:"all feilds are required"})
       }
       const user_email = email.trim().toLowerCase();
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!regex.test(user_email)){
            return res.status(404).json({message:"email is invalid"})
        }
        if(password.length<8){
            return res.status(400).json({message:"Password must be at least 8 characters long"})
        }
        if(password!==cpassword){
            return res.status(404).json({message:"password do not match"})
        }
        if(await find_user(user_email)){
        return res.status(409).json({message:"user already exists please login"})
      }
      const hashed_password = await bcrypt.hash(password,10);
     const user =await adduser(name,user_email,hashed_password)

     
        await sendTestEmail(user_email);
     return res.status(201).json({
    message: "Registration successful"
});
      
    }
    catch(err){
        return res.status(500).json({message:"internal server error"})
    }
}
export default register