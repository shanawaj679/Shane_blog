import db from "../config/db.js";

const update_password = async(password,id)=>{
   const [result]= await db.query("update users set password = ? where id = ?",[password,id])
    return result;
}
export default update_password