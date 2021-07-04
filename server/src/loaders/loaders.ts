import {Application} from "express"
import {expressLoader} from "./express_loader"
import {mongooseLoader} from "./mongoose_loader"
import {socketioLoader} from "./socketio_loader"
import {Server as HtppServer} from "http"

const initLoaders = async (expressApp: Application, server: HtppServer): Promise<Application> => {
  await mongooseLoader()
  expressLoader(expressApp)
  socketioLoader(server)
  return expressApp
}

export {initLoaders}
