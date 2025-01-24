import express from "express"
import router from "./routes/routes.js"

const app = express()
const port = 3005

app.use(express.json())

app.get("/",(req, res) => {
    res.end("Hello World from node backend.")
})

app.use("/api",router)

app.listen(port, (error) => {
    if(error){
        console.log("something went wrong error. Error: ", error)
    }
    console.log("server is listening....")
})