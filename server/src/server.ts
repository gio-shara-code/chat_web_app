import {Socket, Server} from "socket.io"
import * as http from "http"
import express from "express"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket: Socket) => {
  console.log(socket.handshake.auth)
  socket.on("messaging", (msg) => {
    console.log(msg)
  })
})

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`Listening the port ${port}`))
