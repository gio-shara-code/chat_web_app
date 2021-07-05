import {Router} from "express"
import * as userControllers from "../controllers/user_controllers"
import {verifyToken} from "../middlewares/verify_token"

const router = Router()

router.get("/user", verifyToken, userControllers.getUser, userControllers.getUserByEmail)
router.get("/users", verifyToken, userControllers.getUsersByName)

export default router
