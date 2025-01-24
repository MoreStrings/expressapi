import {Router} from "express"
import authRoute from "./auth.js"
import studentRoute from "./student.js"


const router = Router()

router.get("/test", (req, res) => {
    res.end("Response from router inside router")
})

router.use("/auth",authRoute)
router.use("/student", studentRoute)

export default router