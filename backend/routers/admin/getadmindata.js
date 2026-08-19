import express from "express"
import getadmindata from "../../controller/admin/getadmindata.js"
import md from "../../middleware/middleware.js"
import admin_md from "../../middleware/admin_middleware.js"

const router = express.Router()

router.get("/",md,admin_md,getadmindata)
export default router