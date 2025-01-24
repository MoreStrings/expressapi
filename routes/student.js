import {Router} from "express"

const router = Router()

router.post("/", (req, res) =>{
    res.end("hello mr student")
})

router.delete("/:id", (req, res) =>{
    const id = req.params.id
    console.log("id: ", id)
    res.end("deleted student of id: "+id)
})

export default router