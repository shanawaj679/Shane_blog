import db from "../config/db.js";

const checkotp = async (otp, id) => {
    const [user] = await db.query(
        "SELECT otp FROM user_otp WHERE user_id = ?",
        [id]
    );

    if (user.length === 0) {
        return false;
    }
    return Number(user[0].otp) === Number(otp);
};

export default checkotp;