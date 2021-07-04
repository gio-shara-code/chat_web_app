import {Router} from "express"
import {getUser} from "../controllers/user_controllers"
import {verifyToken} from "../middlewares/verify_token"

const router = Router()

router.get("/user", verifyToken, getUser)

export default router
