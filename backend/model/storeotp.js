import db from "../config/db.js";

const store_otp = async (user_id, otp) => {
        await db.query( "DELETE FROM user_otp WHERE user_id = ?",[user_id] );

        
    const [result] = await db.query(
        "INSERT INTO user_otp (user_id, otp) VALUES (?, ?)",
        [user_id, otp]
    );

    return result;
};

export default store_otp;