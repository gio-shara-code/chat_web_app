import {Application} from "express"
import {json, urlencoded} from "body-parser"
import cors from "cors"
import authRoutes from "../routes/auth_routes"
import userRoutes from "../routes/user_routes"
import morgan from "morgan"

const expressLoader = async (app: Application) => {
  app.use(json())
  app.use(urlencoded({extended: false}))
  app.use(cors())
  app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

  app.use("/auth", authRoutes)
  app.use(userRoutes)

  return app
}

export {expressLoader}
