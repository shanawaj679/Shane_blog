import dotenv from "dotenv";
dotenv.config();

import transporter from "./mailservice.js";

const sendTestEmail = async (user_email) => {
    try {

       const info = await transporter.sendMail({
    from: process.env.email,
    to: user_email,
    subject: "Verify your Bellwether account",
   text: `Welcome to Bellwether.

You’ve just made Bellwether part of your reading routine — a publication built for curious minds and thoughtful perspectives.

Your account is now ready to use. From here, you can explore stories, save pieces worth returning to, keep track of what you've read, and join conversations around the ideas that matter.

Stories. Ideas. Culture. Technology.

There’s plenty to explore.

We’re glad you’re here.

— The Bellwether Team`
});


    } catch (err) {
        console.log("Email error:", err);
    }
};
export default sendTestEmail;
