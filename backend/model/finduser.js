import db from "../config/db.js"

const find_user = async (email)=>{
    const [user] = await db.query("select id from users where email = ?",[email])
    return user[0]
}
export default find_user