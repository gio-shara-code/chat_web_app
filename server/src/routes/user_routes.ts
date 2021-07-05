import {Router} from "express"
import * as userControllers from "../controllers/user_controllers"
import {verifyToken} from "../middlewares/verify_token"

const router = Router()

router.get("/user", verifyToken, userControllers.getUser)
router.get("/user", verifyToken, userControllers.getUserByEmail)

export default router
