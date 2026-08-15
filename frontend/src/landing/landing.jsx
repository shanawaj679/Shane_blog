import "../css/landing.css";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

function Landing() {
    const navigate = useNavigate();
    const fadeup={
  initial:{opacity:0,y:10},
  whileInView:{opacity:1,y:0},
  transition:{duration:0.7},
  viewport:{once:false,amount:0.3},
    }

  const gohome= ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  }

  const [search,setsearch] = useState(false);
  return (
    <>
      <motion.div {...fadeup}
      className="landing_header">
        <motion.div {...fadeup} 
        transition={{...fadeup.transition , duration:0.5}} className="background"></motion.div>

        <div className="landing_header_main"></div>
        <div className="landing_header_main landing_grid_heading">
            <motion.div {...fadeup} transition={{...fadeup.transition, duration:0.8}} className="main_header">BELLWETHER</motion.div>
            <div className="header_actions"></div>
            <div className="header_actions">
                 <motion.button {...fadeup} initial={{...fadeup.initial, y:10}} whileInView={{...fadeup.whileInView, x:0}} transition={{...fadeup.transition,duration:0.1}} whileHover={{scale:1.1}}  className="subscribe_btn" onClick={()=>{navigate("/register")}}>subscribe</motion.button>
                <motion.button {...fadeup} initial={{...fadeup.initial, y:10}} whileInView={{...fadeup.whileInView, x:0}} transition={{...fadeup.transition,duration:0.1}} whileHover={{scale:1.1}}  className="login_btn" onClick={()=>{navigate("/login")}}>login</motion.button> 
            </div>

             </div>
        <div className="landing_header_main"></div>

        <div className="landing_grid"></div>
        <div className="landing_grid about_blog"> 
          <motion.div {...fadeup} transition={{...fadeup.transition, duration:0.65}}>A PUBLICATION FOR CURIOUS MINDS</motion.div>
        </div>
        <div className="landing_grid"></div>

       
        <div className="landing_grid"></div>

          <div className="landing_grid identity">
               <span>EST. 2026</span>
              <span>STORIES · IDEAS · CULTURE · TECHNOLOGY</span>
              </div>
        <div className="landing_grid"></div>

      </motion.div>

     <motion.div {...fadeup} transition={{ ...fadeup.transition, duration: 0.9 }} className="navbar">
  <div className="nav_item">
    <button onClick={gohome}>BELLWETHER</button>
  </div>

  <div className="nav_item">
    <button>LATEST</button>
  </div>

  <div className="nav_item">
    <button>STORIES</button>
  </div>

  <div className="nav_item">
    <button>IDEAS</button>
  </div>

  <div className="nav_item">
    <button>CULTURE</button>
  </div>

  <div className="nav_item">
    <button>TECH</button>
  </div>

  <div className="nav_item">
    <button onClick={()=> setsearch(!search)} aria-label="Search">
    <FiSearch /> SEARCH
  </button>
  </div>
  {search && (
  <div className="search_box">
    <input
      type="text"
      placeholder="Search articles..."
      autoFocus
    />
  </div>
)}
</motion.div>

<div className="container"></div>
    </>
  );
}

export default Landing;