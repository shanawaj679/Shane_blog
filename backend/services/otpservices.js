import transporter from "./mailservice.js";



const send_otp = async (user_email,otp)=>{
try{
const info = await transporter.sendMail({
     from: process.env.email,
    to: user_email,
     subject: "Verify your Bellwether account",
 text: `Your Bellwether verification code

OTP: ${otp}

This code is valid for 10 minutes. Please do not share this code with anyone.

If you didn't request this verification code, please ignore this email.

— The Bellwether Team`
})
}
catch(err){
    console.log(err)
}
}
export default send_otp