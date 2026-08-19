import db from "../config/db.js"

const get_admin_data = async(id)=>{
const [user] = await db.query("select name,email,role from users where id = ?",[id])

if(user.length===0){
return false
}
return user[0]
}
export default get_admin_data