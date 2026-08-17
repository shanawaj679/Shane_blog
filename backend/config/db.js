import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: process.env.mysql_password,
    database: "bellwether"
});

db.getConnection()
    .then(connection => {
        console.log("MySQL connected successfully");
        connection.release();
    })
    .catch(err => {
        console.log("MySQL connection error:", err.message);
    });

export default db;