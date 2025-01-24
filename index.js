import express from "express"

const app = express()
const port = 3005

app.use(express.json())

app.get("/",(req, res) => {
    res.end("Hello World from node backend.")
})

app.post("/test", (req, res) => {
    res.end("Post request accepted from test")
})

app.listen(port, (error) => {
    if(error){
        console.log("something went wrong error. Error: ", error)
    }
    console.log("server is listening....")
})