import "../css/admin_dashboard.css"
import {motion} from "framer-motion"
import { useState,useEffect } from "react"
import axios from "axios"

function Admin_dashboard(){
    const [message,setmessage]=useState("")
    const [admin,setadmin]=useState("")
   const get_admin = async()=>{
    try{
const response = await axios.get("http://localhost:3000/api/admin/me",{
    withCredentials:true
})
const data = response.data;
setmessage(data.message)
setadmin(data.admin)
    }
    catch(err){
        console.log(err)
        return setmessage(err.response?.data?.message||"something went wrong")
    }
   }
   
      useEffect(()=>{
get_admin()
      },[])
    
    return<>
    <div>
 <motion.div>
<motion.div>
    BELLWETHER
</motion.div>
    </motion.div>
    </div>
    <div>{admin.name}</div>
     <div>{admin.email}</div>
      <div>{admin.role}</div>
   

    
    </>
}
export default Admin_dashboard