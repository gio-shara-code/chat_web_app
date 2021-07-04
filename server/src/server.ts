import express from "express"
import config from "./config"
import {initLoaders} from "./loaders/loaders"
import * as http from "http"

const startServer = async () => {
  const app = express()
  const server = http.createServer(app)

  await initLoaders(app, server)

  server.listen(config.port, () => {
    console.log(`The server is running on the port ${config.port}`)
  })
  return app
}

startServer()

export {startServer}
