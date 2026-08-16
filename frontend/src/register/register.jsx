import "../css/register.css";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

function Register() {
    const navigate = useNavigate()
  const fadeUp = {
    initial: { opacity: 0,y:5},
    whileInView: {opacity: 1,y: 0},
    transition: {duration: 0.7, ease: "easeOut" },
    viewport: { once: true,amount: 0.3}
  };
  const handlereg=()=>{
    document.getElementById("reg")?.scrollIntoView({
         behavior: "smooth",
    })
  }
  const [whatisbellwether, setwhatisbellwether]=useState(false)
  const [creatingaccount,setcreatingaccount]=useState(false)
  const [infocollect,setinfocollect]=useState(false)
  const [whyaccount,setwhyaccount]=useState(false)
  const [deleteaccount,setdeleteaccount]=useState(false)
  const [changepref,setchangepref]=useState(false)
  const [unsubscribemail,setunsubscribemail]=useState(false)


  return <>
    <div className="reg_container">

      <div className="reg_page">
        <motion.div className="reg_header"  initial={{ opacity: 0, y: -20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.7 }} > BELLWETHER</motion.div>
        <motion.div  className="reg_identity"  {...fadeUp}  >
          <div className="reg_tagline">  A PUBLICATION FOR CURIOUS MINDS   </div>
          <div className="reg_categories">
            <span>·</span> STORIES
            <span>·</span> IDEAS
            <span>·</span> CULTURE
            <span>·</span> TECHNOLOGY
          </div>
          <div className="reg_description">
            Discover perspectives, stories and ideas
            <br />
            worth spending time with.
          </div>
          <div className="reg_est">
            EST. <strong>2026</strong>
          </div>

          <div className="reg_cta">
            <button onClick={handlereg}>
              CREATE YOUR ACCOUNT
            </button>
          </div>
        </motion.div>
        <section className="reg_about">
          <motion.div
            className="reg_about_intro"
            {...fadeUp}
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
          <div className="reg_sections">
            <motion.article
              className="reg_section"
              {...fadeUp}
            >
              <span className="reg_section_number">
                01
              </span>

              <div onClick={()=>navigate("/Storeis")}>
                <h3>STORIES</h3>
                <p>
                  Human experiences, journeys and perspectives.
                </p>
              </div>
            </motion.article>
            <motion.article
              className="reg_section"
              {...fadeUp}
            >
              <span className="reg_section_number">
                02
              </span>

              <div onClick={()=>navigate("/Ideas")}>
                <h3>IDEAS</h3>
                <p>
                  Questions, arguments and ways of seeing
                  things differently.
                </p>
              </div>
            </motion.article>
            <motion.article
              className="reg_section"
              {...fadeUp}
            >
              <span className="reg_section_number">
                03
              </span>

              <div onClick={()=>navigate("/Culture")}>
                <h3>CULTURE</h3>
                <p>
                  People, movements and moments shaping
                  how we live.
                </p>
              </div>
            </motion.article>
            <motion.article
              className="reg_section"
              {...fadeUp}
            >
              <span className="reg_section_number">
                04
              </span>

              <div onClick={()=>navigate("/Tech")}>
                <h3>TECHNOLOGY</h3>
                <p>
                  The ideas and systems changing what
                  comes next.
                </p>
              </div>
            </motion.article>
          </div>
        </section>

<div className="editorial-heading">
  <span>EDITORIAL HIGHLIGHTS</span>
</div>
<section className="reg_articles">
  <article className="reg_article">
    <div className="reg_article_top">
      <span className="reg_article_number">01</span>
      <span className="reg_article_category">LATEST</span>
    </div>

    <h3>
      THE INTERNET IS GETTING BETTER
      <br />
      AT PREDICTING WHAT WE WANT
    </h3>

    <p className="reg_article_meta">
      TECH <span>·</span> 6 MIN READ
    </p>

    <div className="reg_article_arrow">↗</div>
  </article>


  <article className="reg_article">
    <div className="reg_article_top">
      <span className="reg_article_number">02</span>
      <span className="reg_article_category">IDEAS</span>
    </div>

    <h3>
      WHAT IF CONVENIENCE IS
      <br />
      MAKING US LESS CAPABLE?
    </h3>

    <p className="reg_article_meta">
      IDEAS <span>·</span> 8 MIN READ
    </p>

    <div className="reg_article_arrow">↗</div>
  </article>


  <article className="reg_article">
    <div className="reg_article_top">
      <span className="reg_article_number">03</span>
      <span className="reg_article_category">CULTURE</span>
    </div>

    <h3>
      THE ART OF
      <br />
      BEING OFFLINE
    </h3>

    <p className="reg_article_meta">
      CULTURE <span>·</span> 5 MIN READ
    </p>

    <div className="reg_article_arrow">↗</div>
  </article>


  <article className="reg_article">
    <div className="reg_article_top">
      <span className="reg_article_number">04</span>
      <span className="reg_article_category">STORIES</span>
    </div>

    <h3>
      THE STUDENT WHO BUILT
      <br />
      A BUSINESS FROM A DORM ROOM
    </h3>

    <p className="reg_article_meta">
      STORIES <span>·</span> 7 MIN READ
    </p>

    <div className="reg_article_arrow">↗</div>
  </article>
</section>


<div className="editorial-heading">
  <span>MAKE BELLWETHER YOURS</span>
</div>
<div className="account-benefits">
  <p className="account-intro">
    Creating an account gives you a place to make Bellwether part of your
    reading routine.
  </p>

  <div className="benefits-list">
    <div className="benefit-item">
      <span>01</span>
      <p>Save stories you want to revisit</p>
    </div>

    <div className="benefit-item">
      <span>02</span>
      <p>Keep track of what you've read</p>
    </div>

    <div className="benefit-item">
      <span>03</span>
      <p>Participate in conversations</p>
    </div>

    <div className="benefit-item">
      <span>04</span>
      <p>Receive updates when new stories arrive</p>
    </div>

    <div className="benefit-item">
      <span>05</span>
      <p>Manage your personal reading preferences</p>
    </div>
  </div>
</div>


<div className="editorial-heading">
  <span>BEFORE YOU JOIN</span>
</div>
<div className="account-info">

  <section className="info-section">
    <div className="info-label">ACCOUNT</div>

    <p>
      Your account allows Bellwether to provide personalized
      features such as saved stories and reading preferences.
    </p>
  </section>


  <section className="info-section">
    <div className="info-label">PRIVACY</div>

    <p>
      We collect the information necessary to create and
      maintain your account.
    </p>

    <button className="policy-btn">
      Read our Privacy Policy →
    </button>
  </section>


  <section className="info-section">
    <div className="info-label">TERMS</div>

    <p>
      By creating an account, you agree to Bellwether's
      Terms of Service.
    </p>

    <button className="policy-btn">
      Read our Terms →
    </button>
  </section>


  <section className="info-section">
    <div className="info-label">COMMUNICATIONS</div>

    <p>
      If you choose to receive updates, you may receive
      emails about new stories and Bellwether announcements.
    </p>

    <p>
      You can change your preferences at any time.
    </p>
  </section>


  <label className="agreement">
    <input type="checkbox" />

    <span>
      I have read and agree to the Terms of Service and
      acknowledge the Privacy Policy.
    </span>
  </label>

</div>

<div className="register-container" id="reg">
  <div className="register-card">
    <div className="register-header">
      <span className="register-label">JOIN BELLWETHER</span>

      <h2>Create your Bellwether account.</h2>

      <p>
        Create an account and make Bellwether part of your reading routine.
      </p>
    </div>

    <div className="register-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="John Doe"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="john@email.com"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <div className="form-group">
        <label>Confirm password</label>
        <input
          type="password"
          placeholder="Confirm your password"
        />
      </div>

      <button className="register-btn">
        Create Account →
      </button>

      <div className="signin-prompt">
  <span>Already have an account?</span>

  <button className="signin-link">
    SIGN IN →
  </button>
</div>
    </div>
  </div>
</div>


<div className="faq-section">

  <div className="faq-header">
    <h2>Frequently asked questions.</h2>
  </div>

  <div className="faq-list">

<button
  className="faq-item"
  onClick={() => setwhatisbellwether(!whatisbellwether)}
>
  <span>What is Bellwether?</span>
  <span className="faq-arrow">
    {whatisbellwether ? "-" : "+"}
  </span>
</button>
{whatisbellwether && (
  <div className="faq-answer">
  <p>
    Bellwether is a publication for curious minds, bringing together

    thoughtful stories, ideas, culture, and technology.
  </p>
  <p>
    We aim to help readers understand the world through engaging,
    meaningful writing.
  </p>
</div>
)}

    <button className="faq-item" onClick={()=>setcreatingaccount(!creatingaccount)}>
      <span>Is creating an account free?</span>
      <span className="faq-arrow">+</span>
    </button>
    {creatingaccount && (
        <div className="faq-answer">
            <p>
                Yes. Creating a Bellwether account is completely free.
            </p>
            <p>
             Your account simply gives you a more personal reading experience and helps you keep track of the stories and topics that matter to you.
            </p>
        </div>
    )}

    <button className="faq-item" onClick={()=>setinfocollect(!infocollect)}>
      <span>What information do you collect?</span>
      <span className="faq-arrow">+</span>
    </button>
    {infocollect && (
          <div className="faq-answer"> 
          <p>
            We collect only the information needed to provide and improve your Bellwether experience, such as your name, email address, reading preferences, and account activity. We do not ask for information that we don’t need.
          </p>
          </div>
    )}

    <button className="faq-item" onClick={()=>setwhyaccount(!whyaccount)}>
      <span>Why do I need an account?</span>
      <span className="faq-arrow">+</span>
    </button>
    {whyaccount && (
        <div className="faq-answer"> 
        <p>An account gives you a personal place on Bellwether. </p>
        <p>
            You can save stories, keep track of what you’ve read, participate in conversations, receive relevant updates, and manage your reading preferences.
        </p>
        </div>
    )}

    <button className="faq-item" onClick={()=>setdeleteaccount(!deleteaccount)}>
      <span>Can I delete my account?</span>
      <span className="faq-arrow">+</span>
    </button>
    {deleteaccount && (
         <div className="faq-answer"> 
         <p>Yes. You can request to delete your Bellwether account and associated personal information. </p>
         <p>
            Once the deletion process is completed, your account will no longer be available.
         </p>
         </div>
    )}

    <button className="faq-item" onClick={()=>setchangepref(!changepref)}>
      <span>Can I change my preferences?</span>
      <span className="faq-arrow">+</span>
    </button>
    {changepref && (
           <div className="faq-answer"> 
           <p>Yes. You can update your reading and communication preferences at any time from your account settings. </p>
           <p>This lets you control the types of updates and content you receive.</p>
           </div>
    )}

    <button className="faq-item" onClick={()=>setunsubscribemail(!unsubscribemail)}>
      <span>How do I unsubscribe from emails?</span>
      <span className="faq-arrow">+</span>
    </button>
    {unsubscribemail && (
         <div className="faq-answer"> 
         <p>You can unsubscribe from Bellwether emails using the Unsubscribe option included at the bottom of our emails. </p>
         <p>You can also manage your communication preferences from your account settings.</p>
         </div>
    )}

  </div>
</div>


      </div>
    </div>
<footer className="site-footer">

  <div className="footer-main">


    <div className="footer-brand">

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

    </div>


    <div className="footer-column">

      <div className="footer-title" onClick={() => navigate("/")}>
        EXPLORE
      </div>

      <div className="footer-link" onClick={() => navigate("/Latest")}>
        Latest
      </div>

      <div className="footer-link" onClick={() => navigate("/Stories")}>
        Stories
      </div>

      <div className="footer-link" onClick={() => navigate("/Ideas")}>
        Ideas
      </div>

      <div className="footer-link" onClick={() => navigate("/Culture")}>
        Culture
      </div>

      <div className="footer-link" onClick={() => navigate("/Tech")}>
        Technology
      </div>

    </div>


    <div className="footer-column">

      <div className="footer-title">
        ABOUT
      </div>

      <div className="footer-link">
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

    </div>


    <div className="footer-column">

      <div className="footer-title">
        CONNECT
      </div>

      <div className="footer-link footer-social" onClick={()=>window.open("https://github.com/dashboard")}>
        <FaGithub />
        <span>GitHub</span>
      </div>

      <div className="footer-link footer-social" onClick={()=>window.open("https://www.linkedin.com/in/shanawaj-nadaf/")}>
         <FaLinkedin />
        <span>LinkedIn</span>
      </div>

      <div className="footer-link footer-social" onClick={()=>window.location.href="mailto:shanawaznadaf85@gmail.com"}>
         <FaEnvelope />
        <span>Email</span>
      </div>

    </div>

  </div>

  <div className="footer-bottom">

    <div>
      EST. 2026
    </div>

    <div>
      © 2026 BELLWETHER — SHANAWAJ NADAF
    </div>

  </div>

</footer>
  </>
}

export default Register;