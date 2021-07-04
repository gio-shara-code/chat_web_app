import {Socket, Server} from "socket.io"
import {Server as HttpServer} from "http"

const socketioLoader = (server: HttpServer) => {
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

  return io
}

export {socketioLoader}
