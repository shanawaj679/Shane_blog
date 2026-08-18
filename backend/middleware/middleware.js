import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const md = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Invalid token, please login"
            });
        }

        const decoded = jwt.verify(token, process.env.jwt_key);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

export default md;