import "../css/admin_dashboard.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

function Admin_dashboard() {

    const fadeup = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        viewport: { once: false, amount: 0.2 },
    };

    const [message, setmessage] = useState("");
    const [admin, setadmin] = useState("");

    const get_admin = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/admin/me",
                {
                    withCredentials: true
                }
            );

            const data = response.data;

            setmessage(data.message);
            setadmin(data.admin);
        }
        catch (err) {
            console.log(err);

            setmessage(
                err.response?.data?.message ||
                "Something went wrong"
            );
        }
    };

    useEffect(() => {
        get_admin();
    }, []);

    return (
        <div className="admin_dashboard_container">

            {/* ================= HEADER ================= */}

            <motion.div
                {...fadeup}
                className="admin_dashboard_header"
            >
                <h1>Admin Dashboard</h1>

                <p>
                    Welcome back, {admin?.name || "Admin"}
                </p>
            </motion.div>


            {/* ================= STAT CARDS ================= */}

            <div className="admin_dashboard_stats">

                {/* ARTICLES */}

                <motion.div
                    {...fadeup}
                    className="admin_stat_card"
                >
                    <div className="admin_stat_card_top">
                        <span className="admin_stat_label">
                            Articles Posted
                        </span>

                        <span className="admin_stat_icon">
                            ✦
                        </span>
                    </div>

                    <h2>24</h2>

                    <p>
                        Total articles published
                    </p>
                </motion.div>


                {/* CLICKS */}

                <motion.div
                    {...fadeup}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="admin_stat_card"
                >
                    <div className="admin_stat_card_top">
                        <span className="admin_stat_label">
                            Total Clicks
                        </span>

                        <span className="admin_stat_icon">
                            ↗
                        </span>
                    </div>

                    <h2>1,842</h2>

                    <p>
                        Total article views
                    </p>
                </motion.div>


                {/* POPULAR ARTICLE */}

                <motion.div
                    {...fadeup}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="admin_stat_card"
                >
                    <div className="admin_stat_card_top">
                        <span className="admin_stat_label">
                            Most Popular
                        </span>

                        <span className="admin_stat_icon">
                            ★
                        </span>
                    </div>

                    <h2>427</h2>

                    <p>
                        Clicks on your top article
                    </p>
                </motion.div>

            </div>


            {/* ================= MESSAGE ================= */}

            {message && (
                <motion.p
                    {...fadeup}
                    className="admin_dashboard_message"
                >
                    {message}
                </motion.p>
            )}

        </div>
    );
}

export default Admin_dashboard;