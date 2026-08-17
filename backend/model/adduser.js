import db from "../config/db.js"

const add_user = async(name,user_email,hashed_password)=>{
    await db.query("insert into users(name,email,password) values (?, ?, ?)",[name,user_email,hashed_password])
}
export default add_user