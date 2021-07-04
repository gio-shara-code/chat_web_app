import {Application} from "express"
import {json, urlencoded} from "body-parser"
import cors from "cors"
import authRoutes from "../routes/auth_routes"

const expressLoader = async (app: Application) => {
  app.use(json())
  app.use(urlencoded({extended: false}))
  app.use(cors())

  app.use("/auth", authRoutes)

  return app
}

export {expressLoader}
