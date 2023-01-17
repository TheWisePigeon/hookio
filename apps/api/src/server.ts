import express, { Request, Response } from "express"
import * as http from "http"
import * as socketio from "socket.io"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/socket_me_daddy", (req: Request, res: Response)=>{
    
    return res.status(200).send()
})

const socket_server = http.createServer(app)
const io = new socketio.Server(socket_server, {
    cors:{
        origin:"*"
    }
})

io.on("connection", (socket)=>{
    console.log("params")
    socket.on("some", ()=>{
        console.log("Bruh")
    })

    app.get("/test", (_req: Request, res: Response)=>{
        socket.emit("hello", {test:"sumn"})
        return res.status(200).send()
    })
})


socket_server.listen(3000, ()=>{
    console.log("App running on port 3000")
})