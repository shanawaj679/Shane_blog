import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";


function Login() {
const navigate = useNavigate();
    const [message ,setmessage]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [showAdminChoice, setShowAdminChoice] = useState(false);
   

const log_user = async (req,res)=>{
   try{
     const response = await axios.post("http://localhost:3000/api/login",{
        email,
        password
    },{
        withCredentials:true
    })
    const data = response.data

 setmessage(data.message)   
    if(response.status){
if(data.user.role==="user"){
    navigate("/Latest")
}
if(data.user.role==="admin"){
    setShowAdminChoice(!showAdminChoice)
}
    }
   }
   catch(err){
    console.log(err)
     setmessage(

        err.response?.data?.message || "Something went wrong"

    );
   }
}


    return (
        <div className="login-page">

            <motion.div
                className="login-brand"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                BELLWETHER
            </motion.div>

            <motion.main
                className="login-container"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >

                <div className="login-intro">
                    <span className="login-kicker">WELCOME BACK</span>

                    <h1>
                        Welcome back
                        <br />
                        to Bellwether.
                    </h1>

                    <p>
                        Sign in to continue your reading routine
                        and pick up where you left off.
                    </p>
                </div>

                <motion.div
                    className="login-card"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >

                    <div className="form-group">
                        <label htmlFor="email">EMAIL</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="john@gmail.com"
                            value={email}
                            onChange={(e)=>setemail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <div className="password-heading">
                            <label htmlFor="password">PASSWORD</label>

                            <button
                                type="button"
                                className="forgot-password"
                                onClick={() => navigate("/Forgotpassword")}
                            >
                                Forgot password?
                            </button>
                        </div>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                        />
                    </div>

                    <motion.button
                        className="login-button"
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={log_user}
                    >
                        SIGN IN
                    </motion.button>

                    <div className="login-divider">
                        <span>OR</span>
                    </div>

                    <div className="register-prompt">
                        <span>Don't have an account?</span>

                        <button
                            type="button"
                            onClick={() => navigate("/register")}
                        >
                            Create one
                        </button>
                       
                       
                    </div>
                     <div className="message">{message}</div>

                </motion.div>

            
{showAdminChoice && (
    <motion.div
        className="admin-choice-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
    >
        <motion.div
            className="admin-choice"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
        >
            <div className="admin-icon">
                <span>✦</span>
            </div>

            <h2>Welcome back, Admin</h2>

            <p className="admin-subtitle">
                You're successfully logged in. Where would you like to go?
            </p>

            <div className="admin-options">

                <motion.button
                    className="admin-option latest-option"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/Latest")}
                >
                    <div className="option-icon">⌂</div>

                    <div className="option-content">
                        <strong>Continue to Bellwether</strong>
                        <span>Explore the latest stories</span>
                    </div>

                    <span className="arrow">→</span>
                </motion.button>

                <motion.button
                    className="admin-option dashboard-option"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/admin")}
                >
                    <div className="option-icon">⚙</div>

                    <div className="option-content">
                        <strong>Admin Dashboard</strong>
                        <span>Manage your publication</span>
                    </div>

                    <span className="arrow">→</span>
                </motion.button>

            </div>

            <button
                className="admin-cancel"
                onClick={() => setShowAdminChoice(false)}
            >
                Stay here
            </button>
        </motion.div>
    </motion.div>
)}




            </motion.main>

            <motion.footer
                className="login-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <span>STORIES</span>
                <i>·</i>
                <span>IDEAS</span>
                <i>·</i>
                <span>CULTURE</span>
                <i>·</i>
                <span>TECHNOLOGY</span>
            </motion.footer>

        </div>
    );
}

export default Login;