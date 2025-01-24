import {Router} from "express"

const router = Router()

router.post("/login", (req, res) =>{
    res.end("hello from login")
})

export default router