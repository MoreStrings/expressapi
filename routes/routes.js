import {Router} from "express"
import authRoute from "./auth.js"

const router = Router()

router.get("/test", (req, res) => {
    res.end("Response from router inside router")
})

router.use("/auth",authRoute)

export default router