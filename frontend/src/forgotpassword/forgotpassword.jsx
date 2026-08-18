import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "../css/forgotpassword.css";

function Forgotpassword() {
    const navigate = useNavigate();

    const [message, setmessage] = useState("");
    const [verified, setverified] = useState(false);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [postotp, setpostotp] = useState("");

    const req_otp = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/sendotp",
                {
                    email
                },
                {
                    withCredentials: true
                }
            );

            const data = response.data;

            if (response.status >= 200 && response.status < 300) {
                setverified(true);
            }

            setmessage(data.message);
        } catch (err) {
            console.log(err);

            setmessage(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        }
    };

    const change_password = async () => {
        try {
            const response = await axios.patch(
                "http://localhost:3000/api/updatepassword",
                {
                    postotp,
                    email,
                    password,
                    cpassword
                },
                {
                    withCredentials: true
                }
            );

            const data = response.data;

            setmessage(data.message);

            if (response.status >= 200 && response.status < 300) {
                navigate("/Login");
            }

        } catch (err) {
            console.log(err);

            setmessage(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        }
    };

    return (
        <div className="forgot-page">

            <motion.div
                className="forgot-card"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
            >

                <motion.div
                    className="forgot-header"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                >
                    <div className="forgot-logo">
                        BELLWETHER
                    </div>

                    <h1>Forgot your password?</h1>

                    <p>
                        No worries. We'll help you get back into your account.
                    </p>
                </motion.div>


                <motion.div
                    className="forgot-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >

                    <div className="input-group">
                        <label>Email address</label>

                        <input
                            type="email"
                            placeholder="john@gmail.com"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>


                    <motion.button
                        className="otp-button"
                        onClick={req_otp}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Request OTP
                    </motion.button>


                    <AnimatePresence>
                        {message && (
                            <motion.div
                                className="forgot-message"
                                initial={{
                                    opacity: 0,
                                    y: -8
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -8
                                }}
                            >
                                {message}
                            </motion.div>
                        )}
                    </AnimatePresence>


                    <AnimatePresence>
                        {verified && (
                            <motion.div
                                className="password-section"
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    y: 20
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut"
                                }}
                            >

                                <div className="input-group">
                                    <label>Verification code</label>

                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={postotp}
                                        onChange={(e) =>
                                            setpostotp(e.target.value)
                                        }
                                    />
                                </div>


                                <div className="input-group">
                                    <label>New password</label>

                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        value={password}
                                        onChange={(e) =>
                                            setpassword(e.target.value)
                                        }
                                    />
                                </div>


                                <div className="input-group">
                                    <label>Confirm password</label>

                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        value={cpassword}
                                        onChange={(e) =>
                                            setcpassword(e.target.value)
                                        }
                                    />
                                </div>


                                <motion.button
                                    className="change-button"
                                    onClick={change_password}
                                    whileHover={{
                                        scale: 1.02
                                    }}
                                    whileTap={{
                                        scale: 0.97
                                    }}
                                >
                                    Change Password
                                </motion.button>

                            </motion.div>
                        )}
                    </AnimatePresence>


                    <motion.div
                        className="back-login"
                        whileHover={{ x: -3 }}
                    >
                        <button onClick={() => navigate("/Login")}>
                            ← Back to Login
                        </button>
                    </motion.div>

                </motion.div>

            </motion.div>

        </div>
    );
}

export default Forgotpassword;