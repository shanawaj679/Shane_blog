import "../css/register.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [whatisbellwether, setwhatisbellwether] = useState(false);
  const [creatingaccount, setcreatingaccount] = useState(false);
  const [infocollect, setinfocollect] = useState(false);
  const [whyaccount, setwhyaccount] = useState(false);
  const [deleteaccount, setdeleteaccount] = useState(false);
  const [changepref, setchangepref] = useState(false);
  const [unsubscribemail, setunsubscribemail] = useState(false);
  const [message,setmessage]=useState("")
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [cpassword,setcpassword]=useState("")
  const [check,setcheck]=useState("")


  const reg_user = async()=>{
    try{
  const response = await axios.post("http://localhost:3000/api/register",{
        name,
        email,
        password,
        cpassword,
        check
    },{
        withCredentials:true
    })
    const data = response.data
    setmessage(data.message);
    }
    catch(err){
        console.log(err)
    }
  }

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const fadeRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: 25
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handlereg = () => {
    document.getElementById("reg")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const faqData = [
    {
      question: "What is Bellwether?",
      answer: (
        <>
          <p>
            Bellwether is a publication for curious minds, bringing together
            thoughtful stories, ideas, culture, and technology.
          </p>
          <p>
            We aim to help readers understand the world through engaging,
            meaningful writing.
          </p>
        </>
      ),
      state: whatisbellwether,
      setState: setwhatisbellwether
    },
    {
      question: "Is creating an account free?",
      answer: (
        <>
          <p>Yes. Creating a Bellwether account is completely free.</p>
          <p>
            Your account simply gives you a more personal reading experience
            and helps you keep track of the stories and topics that matter to
            you.
          </p>
        </>
      ),
      state: creatingaccount,
      setState: setcreatingaccount
    },
    {
      question: "What information do you collect?",
      answer: (
        <p>
          We collect only the information needed to provide and improve your
          Bellwether experience, such as your name, email address, reading
          preferences, and account activity. We do not ask for information
          that we don't need.
        </p>
      ),
      state: infocollect,
      setState: setinfocollect
    },
    {
      question: "Why do I need an account?",
      answer: (
        <>
          <p>An account gives you a personal place on Bellwether.</p>
          <p>
            You can save stories, keep track of what you've read, participate
            in conversations, receive relevant updates, and manage your
            reading preferences.
          </p>
        </>
      ),
      state: whyaccount,
      setState: setwhyaccount
    },
    {
      question: "Can I delete my account?",
      answer: (
        <>
          <p>
            Yes. You can request to delete your Bellwether account and
            associated personal information.
          </p>
          <p>
            Once the deletion process is completed, your account will no
            longer be available.
          </p>
        </>
      ),
      state: deleteaccount,
      setState: setdeleteaccount
    },
    {
      question: "Can I change my preferences?",
      answer: (
        <>
          <p>
            Yes. You can update your reading and communication preferences at
            any time from your account settings.
          </p>
          <p>
            This lets you control the types of updates and content you
            receive.
          </p>
        </>
      ),
      state: changepref,
      setState: setchangepref
    },
    {
      question: "How do I unsubscribe from emails?",
      answer: (
        <>
          <p>
            You can unsubscribe from Bellwether emails using the Unsubscribe
            option included at the bottom of our emails.
          </p>
          <p>
            You can also manage your communication preferences from your
            account settings.
          </p>
        </>
      ),
      state: unsubscribemail,
      setState: setunsubscribemail
    }
  ];

  return (
    <>
      <div className="reg_container">
        <div className="reg_page">

          <motion.div
            className="reg_header"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            BELLWETHER
          </motion.div>

          <motion.div
            className="reg_identity"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div
              className="reg_tagline"
              variants={staggerItem}
            >
              A PUBLICATION FOR CURIOUS MINDS
            </motion.div>

            <motion.div
              className="reg_categories"
              variants={staggerItem}
            >
              <span>·</span> STORIES
              <span>·</span> IDEAS
              <span>·</span> CULTURE
              <span>·</span> TECHNOLOGY
            </motion.div>

            <motion.div
              className="reg_description"
              variants={staggerItem}
            >
              Discover perspectives, stories and ideas
              <br />
              worth spending time with.
            </motion.div>

            <motion.div
              className="reg_est"
              variants={staggerItem}
            >
              EST. <strong>2026</strong>
            </motion.div>

            <motion.div
              className="reg_cta"
              variants={staggerItem}
            >
              <motion.button
                onClick={handlereg}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                CREATE YOUR ACCOUNT
              </motion.button>
            </motion.div>
          </motion.div>

          <section className="reg_about">
            <motion.div
              className="reg_about_intro"
              {...fadeLeft}
            >
              <p className="reg_about_lead">
                The internet never runs out of things to read.
              </p>

              <p>
                BELLWETHER exists to help you find the things
                worth stopping for.
              </p>

              <p>
                We explore the people, ideas, culture and technology
                shaping the world around us.
              </p>
            </motion.div>

            <motion.div
              className="reg_sections"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.article
                className="reg_section"
                variants={staggerItem}
                whileHover={{ x: 8 }}
              >
                <span className="reg_section_number">01</span>

                <div onClick={() => navigate("/Stories")}>
                  <h3>STORIES</h3>
                  <p>
                    Human experiences, journeys and perspectives.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="reg_section"
                variants={staggerItem}
                whileHover={{ x: 8 }}
              >
                <span className="reg_section_number">02</span>

                <div onClick={() => navigate("/Ideas")}>
                  <h3>IDEAS</h3>
                  <p>
                    Questions, arguments and ways of seeing
                    things differently.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="reg_section"
                variants={staggerItem}
                whileHover={{ x: 8 }}
              >
                <span className="reg_section_number">03</span>

                <div onClick={() => navigate("/Culture")}>
                  <h3>CULTURE</h3>
                  <p>
                    People, movements and moments shaping
                    how we live.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="reg_section"
                variants={staggerItem}
                whileHover={{ x: 8 }}
              >
                <span className="reg_section_number">04</span>

                <div onClick={() => navigate("/Tech")}>
                  <h3>TECHNOLOGY</h3>
                  <p>
                    The ideas and systems changing what
                    comes next.
                  </p>
                </div>
              </motion.article>
            </motion.div>
          </section>

          <motion.div
            className="editorial-heading"
            {...fadeUp}
          >
            <span>EDITORIAL HIGHLIGHTS</span>
          </motion.div>

          <motion.section
            className="reg_articles"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              {
                number: "01",
                category: "LATEST",
                title: (
                  <>
                    THE INTERNET IS GETTING BETTER
                    <br />
                    AT PREDICTING WHAT WE WANT
                  </>
                ),
                meta: "TECH"
              },
              {
                number: "02",
                category: "IDEAS",
                title: (
                  <>
                    WHAT IF CONVENIENCE IS
                    <br />
                    MAKING US LESS CAPABLE?
                  </>
                ),
                meta: "IDEAS"
              },
              {
                number: "03",
                category: "CULTURE",
                title: (
                  <>
                    THE ART OF
                    <br />
                    BEING OFFLINE
                  </>
                ),
                meta: "CULTURE"
              },
              {
                number: "04",
                category: "STORIES",
                title: (
                  <>
                    THE STUDENT WHO BUILT
                    <br />
                    A BUSINESS FROM A DORM ROOM
                  </>
                ),
                meta: "STORIES"
              }
            ].map((article) => (
              <motion.article
                className="reg_article"
                variants={staggerItem}
                whileHover={{ y: -6 }}
                key={article.number}
              >
                <div className="reg_article_top">
                  <span className="reg_article_number">
                    {article.number}
                  </span>

                  <span className="reg_article_category">
                    {article.category}
                  </span>
                </div>

                <h3>{article.title}</h3>

                <p className="reg_article_meta">
                  {article.meta} <span>·</span> 6 MIN READ
                </p>

                <motion.div
                  className="reg_article_arrow"
                  whileHover={{ x: 5, y: -5 }}
                >
                  ↗
                </motion.div>
              </motion.article>
            ))}
          </motion.section>

          <motion.div
            className="editorial-heading"
            {...fadeUp}
          >
            <span>MAKE BELLWETHER YOURS</span>
          </motion.div>

          <motion.div
            className="account-benefits"
            {...fadeUp}
          >
            <p className="account-intro">
              Creating an account gives you a place to make Bellwether part of
              your reading routine.
            </p>

            <motion.div
              className="benefits-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Save stories you want to revisit",
                "Keep track of what you've read",
                "Participate in conversations",
                "Receive updates when new stories arrive",
                "Manage your personal reading preferences"
              ].map((benefit, index) => (
                <motion.div
                  className="benefit-item"
                  variants={staggerItem}
                  key={index}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="editorial-heading"
            {...fadeUp}
          >
            <span>BEFORE YOU JOIN</span>
          </motion.div>

          <motion.div
            className="account-info"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.section
              className="info-section"
              variants={staggerItem}
            >
              <div className="info-label">ACCOUNT</div>

              <p>
                Your account allows Bellwether to provide personalized
                features such as saved stories and reading preferences.
              </p>
            </motion.section>

            <motion.section
              className="info-section"
              variants={staggerItem}
            >
              <div className="info-label">PRIVACY</div>

              <p>
                We collect the information necessary to create and
                maintain your account.
              </p>

              <button className="policy-btn">
                Read our Privacy Policy →
              </button>
            </motion.section>

            <motion.section
              className="info-section"
              variants={staggerItem}
            >
              <div className="info-label">TERMS</div>

              <p>
                By creating an account, you agree to Bellwether's
                Terms of Service.
              </p>

              <button className="policy-btn">
                Read our Terms →
              </button>
            </motion.section>

            <motion.section
              className="info-section"
              variants={staggerItem}
            >
              <div className="info-label">COMMUNICATIONS</div>

              <p>
                If you choose to receive updates, you may receive
                emails about new stories and Bellwether announcements.
              </p>

              <p>
                You can change your preferences at any time.
              </p>
            </motion.section>

            <motion.label
              className="agreement"
              variants={staggerItem}
            >
              <input type="checkbox" value={check} onClick={(e)=>setcheck("checked")}/>

              <span>
                I have read and agree to the Terms of Service and
                acknowledge the Privacy Policy.
              </span>
            </motion.label>
          </motion.div>

          <motion.div
            className="register-container"
            id="reg"
            {...fadeUp}
          >
            <motion.div
              className="register-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="register-header">
                <span className="register-label">
                  JOIN BELLWETHER
                </span>

                <h2>Create your Bellwether account.</h2>

                <p>
                  Create an account and make Bellwether part of your
                  reading routine.
                </p>
              </div>

              <motion.div
                className="register-form"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  className="form-group"
                  variants={staggerItem}
                >
                  <label>Name</label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                  />
                
                </motion.div>
             

                <motion.div
                  className="form-group"
                  variants={staggerItem}
                >
                  <label>Email</label>

                  <input
                    type="email"
                    placeholder="john@email.com"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                  />
                  
                </motion.div>
              

                <motion.div
                  className="form-group"
                  variants={staggerItem}
                >
                  <label>Password</label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                  />
                  
                </motion.div>
               

                <motion.div
                  className="form-group"
                  variants={staggerItem}
                >
                  <label>Confirm password</label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={cpassword}
                    onChange={(e)=>setcpassword(e.target.value)}
                  />
                 
                </motion.div>
               

                <motion.button
                  className="register-btn"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={reg_user}
                >
                  Create Account →
                </motion.button>

                <motion.div
                  className="signin-prompt"
                  variants={staggerItem}
                >
                  <span>Already have an account?</span>

                  <button className="signin-link" onClick={()=>navigate("/login")}>
                    SIGN IN →
                  </button>
                </motion.div>
              </motion.div>
  <div>{message}</div>
            </motion.div>
          </motion.div>

          <motion.div
            className="faq-section"
            {...fadeUp}
          >
            <div className="faq-header">
              <h2>Frequently asked questions.</h2>
            </div>

            <motion.div
              className="faq-list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                >
                  <motion.button
                    className="faq-item"
                    onClick={() => faq.setState(!faq.state)}
                    whileHover={{ x: 4 }}
                  >
                    <span>{faq.question}</span>

                    <motion.span
                      className="faq-arrow"
                      animate={{
                        rotate: faq.state ? 45 : 0
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      +
                    </motion.span>
                  </motion.button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: faq.state ? "auto" : 0,
                      opacity: faq.state ? 1 : 0
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut"
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        className="site-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-main">

          <motion.div
            className="footer-brand"
            {...fadeLeft}
          >
            <div className="footer-logo">
              BELLWETHER
            </div>

            <div className="footer-tagline">
              A PUBLICATION FOR CURIOUS MINDS
            </div>

            <div className="footer-topics">
              <span>·</span> STORIES
              <span>·</span> IDEAS
              <span>·</span> CULTURE
              <span>·</span> TECHNOLOGY
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            {...fadeUp}
          >
            <div
              className="footer-title"
              onClick={() => navigate("/")}
            >
              EXPLORE
            </div>

            <div
              className="footer-link"
              onClick={() => navigate("/Latest")}
            >
              Latest
            </div>

            <div
              className="footer-link"
              onClick={() => navigate("/Stories")}
            >
              Stories
            </div>

            <div
              className="footer-link"
              onClick={() => navigate("/Ideas")}
            >
              Ideas
            </div>

            <div
              className="footer-link"
              onClick={() => navigate("/Culture")}
            >
              Culture
            </div>

            <div
              className="footer-link"
              onClick={() => navigate("/Tech")}
            >
              Technology
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            {...fadeUp}
          >
            <div className="footer-title">
              ABOUT
            </div>

            <div
              className="footer-link"
              onClick={() => navigate("/About")}
            >
              About Bellwether
            </div>

            <div className="footer-link">
              Contact
            </div>

            <div className="footer-link">
              Editorial Policy
            </div>

            <div className="footer-link">
              Privacy Policy
            </div>

            <div className="footer-link">
              Terms of Service
            </div>

            <div className="footer-link">
              Cookie Policy
            </div>
          </motion.div>

          <motion.div
            className="footer-column"
            {...fadeRight}
          >
            <div className="footer-title">
              CONNECT
            </div>

            <motion.div
              className="footer-link footer-social"
              onClick={() =>
                window.open("https://github.com/dashboard")
              }
              whileHover={{ x: 5 }}
            >
              <FaGithub />
              <span>GitHub</span>
            </motion.div>

            <motion.div
              className="footer-link footer-social"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shanawaj-nadaf/"
                )
              }
              whileHover={{ x: 5 }}
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </motion.div>

            <motion.div
              className="footer-link footer-social"
              onClick={() =>
                (window.location.href =
                  "mailto:shanawaznadaf85@gmail.com")
              }
              whileHover={{ x: 5 }}
            >
              <FaEnvelope />
              <span>Email</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          {...fadeUp}
        >
          <div>
            EST. 2026
          </div>

          <div>
            © 2026 BELLWETHER — SHANAWAJ NADAF
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
}

export default Register;