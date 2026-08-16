import "../css/about.css";
import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const [openPolicy, setOpenPolicy] = useState(null);

  const handleregabout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleregcontact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleregedit = () => {
    document.getElementById("edit")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleregprivacy = () => {
    document.getElementById("privacy")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleregterms = () => {
    document.getElementById("terms")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleregcookie = () => {
    document.getElementById("cookie")?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut"
      }
    }
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -35
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 35
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.35,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.25
        }
      }
    }
  };

  const privacyItems = [
    {
      id: "privacy-use",
      title: "HOW WE USE YOUR INFORMATION",
      content:
        "We use the information we collect to operate and maintain Bellwether, provide account-related features, improve our services, understand how readers interact with the publication, communicate with users when necessary, and protect the security and integrity of the platform."
    },
    {
      id: "privacy-account",
      title: "ACCOUNT INFORMATION",
      content:
        "When you create an account, we may collect information such as your name, email address, login credentials, and other information you choose to provide. This information allows us to create and manage your account and provide features associated with it."
    },
    {
      id: "privacy-cookie",
      title: "COOKIES AND SIMILAR TECHNOLOGIES",
      content:
        "Bellwether may use cookies and similar technologies to maintain account sessions, remember preferences, understand how the website is used, and improve the reading experience. Some technologies may be necessary for core functionality, while others may support optional features or analytics."
    },
    {
      id: "privacy-thirdparty",
      title: "THIRD-PARTY SERVICES",
      content:
        "Bellwether may use trusted third-party services for functions such as hosting, authentication, analytics, email delivery, security, and other technical operations. These providers may process information only as necessary to provide their services and are subject to their own applicable policies."
    },
    {
      id: "privacy-data",
      title: "DATA RETENTION",
      content:
        "We retain personal information only for as long as reasonably necessary for the purposes described in this policy. Retention periods may depend on the nature of the information, how it is used, account activity, legal requirements, and the need to resolve disputes or enforce our agreements."
    },
    {
      id: "privacy-rights",
      title: "YOUR RIGHTS AND CHOICES",
      content:
        "Depending on your location and applicable law, you may have rights to access, correct, update, or request deletion of your personal information. You may also have choices regarding communications, cookies, and certain uses of your information. You can contact us to make a request."
    },
    {
      id: "privacy-security",
      title: "SECURITY",
      content:
        "We use reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure. However, no online service or method of transmission can be guaranteed to be completely secure."
    },
    {
      id: "privacy-changes",
      title: "CHANGES TO THIS POLICY",
      content:
        "We may update this Privacy Policy when our services, practices, or legal requirements change. When changes are made, we will update the Last Updated date on this page. We encourage you to review this policy periodically to stay informed about how Bellwether handles information."
    }
  ];

  const termsItems = [
    {
      id: "terms-accept",
      title: "ACCEPTING THESE TERMS",
      content:
        "By accessing or using Bellwether, you acknowledge that you have read, understood, and agree to these Terms of Service. If you do not agree with these terms, please do not use the website or its services."
    },
    {
      id: "terms-using",
      title: "USING BELLWETHER",
      content:
        "Bellwether is intended to provide readers with access to stories, ideas, culture, technology, and other editorial content. You agree to use Bellwether lawfully and in a way that does not interfere with the experience, security, or access of other users."
    },
    {
      id: "terms-account",
      title: "USER ACCOUNTS",
      content:
        "Some Bellwether features may require an account. You are responsible for providing accurate information, keeping your login credentials secure, and maintaining the confidentiality of your account. You are also responsible for activity carried out through your account."
    },
    {
      id: "terms-content",
      title: "USER CONTENT",
      content:
        "If Bellwether allows users to submit comments or other content, you remain responsible for the content you provide. By submitting content, you represent that you have the necessary rights to do so and that the content does not violate applicable laws or the rights of others."
    },
    {
      id: "terms-property",
      title: "INTELLECTUAL PROPERTY",
      content:
        "The Bellwether name, branding, design, website, editorial content, graphics, and other original materials are owned by Bellwether or its respective licensors unless otherwise stated. You may access and read Bellwether content for personal, non-commercial purposes, but you may not reproduce, distribute, modify, or republish it without appropriate permission."
    },
    {
      id: "terms-prohibited",
      title: "PROHIBITED ACTIVITIES",
      content:
        "You may not use Bellwether for unlawful purposes or attempt to disrupt, damage, or gain unauthorized access to the platform. You may not introduce malicious code, abuse other users, impersonate others, interfere with platform security, or use automated methods in ways that negatively affect Bellwether or its users."
    },
    {
      id: "terms-links",
      title: "THIRD-PARTY LINKS",
      content:
        "Bellwether may occasionally provide links to websites, services, or resources operated by third parties. These links are provided for convenience or additional information. Bellwether does not control and is not responsible for the content, availability, policies, or practices of third-party services."
    },
    {
      id: "terms-disclaimer",
      title: "DISCLAIMERS",
      content:
        "Bellwether provides its content and services on an “as available” basis. While we aim to provide accurate, useful, and reliable editorial content, we do not guarantee that all information will always be complete, current, error-free, or suitable for every individual purpose."
    },
    {
      id: "terms-liability",
      title: "LIMITATION OF LIABILITY",
      content:
        "To the extent permitted by applicable law, Bellwether and its contributors will not be responsible for indirect, incidental, consequential, or other losses arising from your use of, or inability to use, the website or its content. Nothing in these terms is intended to exclude liability that cannot legally be excluded."
    },
    {
      id: "terms-changes",
      title: "CHANGES TO THESE TERMS",
      content:
        "We may update these Terms of Service from time to time as Bellwether evolves or legal requirements change. When we make changes, we will update the Last Updated date on this page. Your continued use of Bellwether after an update means you accept the revised terms."
    }
  ];

  const cookieItems = [
    {
      id: "cookie-what",
      title: "WHAT ARE COOKIES?",
      content:
        "Cookies are small text files stored on your device when you visit a website. They allow websites to recognize your browser, remember certain information, and provide a more consistent experience when you return."
    },
    {
      id: "cookie-use",
      title: "HOW WE USE COOKIES",
      content:
        "Bellwether may use cookies to keep you signed in, maintain account sessions, remember preferences, improve website functionality, understand how readers interact with the publication, and help maintain the security of the platform."
    },
    {
      id: "cookie-types",
      title: "TYPES OF COOKIES",
      content:
        "Bellwether may use different types of cookies depending on their purpose. These may include essential cookies required for core functionality, preference cookies that remember settings, and analytics cookies that help us understand how the website is being used."
    },
    {
      id: "cookie-thirdparty",
      title: "THIRD-PARTY COOKIES",
      content:
        "Some third-party services used by Bellwether may place their own cookies or use similar technologies. These services may include analytics, security, hosting, or other technical providers. Their use of cookies is governed by their respective privacy and cookie policies."
    },
    {
      id: "cookie-manage",
      title: "MANAGING YOUR COOKIE PREFERENCES",
      content:
        "You can manage or remove cookies through your browser settings. Depending on the features available on Bellwether, you may also be able to control certain optional cookies through our cookie preference settings. Disabling some cookies may affect the functionality of certain features."
    },
    {
      id: "cookie-changes",
      title: "CHANGES TO THIS POLICY",
      content:
        "We may update this Cookie Policy when our technology, services, or practices change. Any updates will be reflected on this page along with a revised Last Updated date. We encourage you to review this policy periodically."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenPolicy(openPolicy === id ? null : id);
  };

  const renderAccordion = (items) => (
    <motion.div
      className="accordion-list"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((item) => (
        <motion.div
          className="accordion-wrapper"
          variants={itemVariants}
          key={item.id}
        >
          <motion.div
            className="accordion-item"
            onClick={() => toggleAccordion(item.id)}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div>{item.title}</div>

            <motion.div
              animate={{
                rotate: openPolicy === item.id ? 45 : 0
              }}
              transition={{ duration: 0.25 }}
            >
              +
            </motion.div>
          </motion.div>

          <motion.div
            className="policy-content-wrapper"
            variants={accordionVariants}
            initial="closed"
            animate={openPolicy === item.id ? "open" : "closed"}
            style={{ overflow: "hidden" }}
          >
            <div className="policy-content">
              <p>{item.content}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="about-page">

      <motion.div
        className="about-navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="about-nav-inner">
          <motion.div className="nav-item active" onClick={handleregabout} whileHover={{ y: -2 }}>
            ABOUT
          </motion.div>

          <motion.div className="nav-item" onClick={handleregcontact} whileHover={{ y: -2 }}>
            CONTACT
          </motion.div>

          <motion.div className="nav-item" onClick={handleregedit} whileHover={{ y: -2 }}>
            EDITORIAL POLICY
          </motion.div>

          <motion.div className="nav-item" onClick={handleregprivacy} whileHover={{ y: -2 }}>
            PRIVACY
          </motion.div>

          <motion.div className="nav-item" onClick={handleregterms} whileHover={{ y: -2 }}>
            TERMS
          </motion.div>

          <motion.div className="nav-item" onClick={handleregcookie} whileHover={{ y: -2 }}>
            COOKIES
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="section-label" id="about" variants={itemVariants}>
          ABOUT
        </motion.div>

        <motion.div className="hero-title" variants={itemVariants}>
          BELLWETHER
        </motion.div>

        <motion.div className="hero-est" variants={itemVariants}>
          EST. 2026
        </motion.div>
      </motion.div>

      <motion.section
        className="about-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="section-number" variants={leftVariants}>
          01
        </motion.div>

        <div className="section-content">
          <motion.div className="section-heading" variants={itemVariants}>
            ABOUT BELLWETHER
          </motion.div>

          <motion.div className="about-intro" variants={itemVariants}>
            <p>Bellwether is a publication for curious minds.</p>

            <p>
              We explore the ideas, stories, technologies and cultural shifts
              shaping the world around us.
            </p>

            <p>
              Our goal isn't simply to tell readers what happened.
              It's to help them understand why it matters.
            </p>
          </motion.div>

          <motion.div className="subsection" variants={itemVariants}>
            <div className="subsection-title">
              WHAT WE COVER
            </div>

            <motion.div
              className="coverage-grid"
              variants={staggerContainer}
            >
              {[
                {
                  number: "01",
                  title: "STORIES",
                  description:
                    "Reporting, observations and stories about the world around us."
                },
                {
                  number: "02",
                  title: "IDEAS",
                  description:
                    "Questions, arguments and perspectives worth thinking about."
                },
                {
                  number: "03",
                  title: "CULTURE",
                  description:
                    "The people, movements and things shaping how we live."
                },
                {
                  number: "04",
                  title: "TECHNOLOGY",
                  description:
                    "The technologies changing how we work, communicate and understand the world."
                }
              ].map((item) => (
                <motion.div
                  className="coverage-card"
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  key={item.number}
                >
                  <div className="coverage-number">
                    {item.number}
                  </div>

                  <div className="coverage-title">
                    {item.title}
                  </div>

                  <div className="coverage-description">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="section-number" variants={leftVariants}>
          02
        </motion.div>

        <div className="section-content">
          <motion.div className="section-heading" variants={itemVariants}>
            CONTACT
          </motion.div>

          <motion.div className="contact-intro" variants={itemVariants}>
            <div className="contact-title">
              Have something to say?
            </div>

            <div className="contact-description">
              Whether you have a question, an idea, feedback,
              or an editorial inquiry, we'd like to hear from you.
            </div>
          </motion.div>

          <motion.div
            className="contact-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {["GENERAL", "EDITORIAL", "FEEDBACK"].map((type) => (
              <motion.div
                className="contact-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={type}
              >
                <div className="contact-label">
                  {type}
                </div>

                <div
                  className="contact-email"
                  onClick={() =>
                    (window.location.href =
                      "mailto:shanawaznadaf85@gmail.com")
                  }
                >
                  <button className="contact-email-button">
                    shanawaznadaf85@gmail.com
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-section policy-section"
        id="edit"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="section-number" variants={leftVariants}>
          03
        </motion.div>

        <div className="section-content">
          <motion.div className="section-heading" variants={itemVariants}>
            EDITORIAL POLICY
          </motion.div>

          <motion.div className="policy-intro" variants={itemVariants}>
            Bellwether aims to publish work that is thoughtful,
            accurate, transparent and useful to our readers.
          </motion.div>

          <motion.div
            className="policy-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              {
                title: "ACCURACY",
                description:
                  "We make reasonable efforts to ensure that information published by Bellwether is accurate and properly sourced."
              },
              {
                title: "INDEPENDENCE",
                description:
                  "Editorial decisions are made independently and are not influenced by advertising or commercial interests."
              },
              {
                title: "CORRECTIONS",
                description:
                  "When we identify a meaningful error, we aim to correct it clearly and transparently."
              },
              {
                title: "OPINION",
                description:
                  "Opinion and analysis represent the views of their authors and are distinguished from reported material."
              },
              {
                title: "TECHNOLOGY",
                description:
                  "Thoughtful stories about technology, innovation, and the changing relationship between people and the digital world."
              }
            ].map((item) => (
              <motion.div
                className="policy-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                key={item.title}
              >
                <div className="policy-title">
                  {item.title}
                </div>

                <div className="policy-description">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        id="privacy"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="section-number" variants={leftVariants}>
          04
        </motion.div>

        <div className="section-content">
          <motion.div className="section-heading" variants={itemVariants}>
            PRIVACY POLICY
          </motion.div>

          <motion.div className="policy-updated" variants={itemVariants}>
            LAST UPDATED: AUGUST 2026
          </motion.div>

          <motion.div className="large-policy-intro" variants={itemVariants}>
            Your privacy matters to us.
          </motion.div>

          {renderAccordion(privacyItems)}
        </div>
      </motion.section>

      <motion.section
        className="about-section"
        id="terms"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="section-number" variants={leftVariants}>
          05
        </motion.div>

        <div className="section-content">
          <motion.div className="section-heading" variants={itemVariants}>
            TERMS OF SERVICE
          </motion.div>

          <motion.div className="policy-updated" variants={itemVariants}>
            LAST UPDATED: AUGUST 2026
          </motion.div>

          {renderAccordion(termsItems)}
        </div>
      </motion.section>

      <motion.section
        className="about-section cookie-section"
        id="cookie"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="section-number" variants={leftVariants}>
          06
        </motion.div>

        <div className="section-content">
          <motion.div className="section-heading" variants={itemVariants}>
            COOKIE POLICY
          </motion.div>

          <motion.div className="policy-updated" variants={itemVariants}>
            LAST UPDATED: AUGUST 2026
          </motion.div>

          {renderAccordion(cookieItems)}
        </div>
      </motion.section>

      <motion.div
        className="about-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-brand">
          BELLWETHER
        </div>

        <div className="footer-tagline">
          A PUBLICATION FOR CURIOUS MINDS
        </div>

        <div className="footer-copy">
          © 2026 Bellwether. All rights reserved-SHANAWAJ NADAF.
        </div>
      </motion.div>

    </div>
  );
}

export default About;