import db from "../config/db.js";
import bcrypt from "bcryptjs";


const confirmpassword = async (email,password)=>{
const [user] = await db.query("select id,password,role from users where email = ?",[email])
 if (user.length === 0) {
        return {
            user: null,
            verified: false
        };
    }
const verified = await bcrypt.compare(password,user[0].password)
return {
    user: user[0],
    verified
};
}
export default confirmpassword