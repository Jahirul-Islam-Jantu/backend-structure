import express from 'express';
import * as UserController from "../app/controller/UserController.js";
import {UserMiddleware} from "../app/middleware/userMiddleware.js";
import {UserAuthMiddleware} from "../app/middleware/UserAuthMiddleWare.js";
const router = express.Router();

router.post("/userRegistration", UserController.UserRegistraion)
router.post("/UserLogIn", UserController.UserLogin )
router.get("/getAllUsers", UserMiddleware, UserController.getAllUsers);
router.post("/updateUser", UserAuthMiddleware, UserController.UpdateUser)
router.delete("/deleteUser/:id", UserController.DeleteUser)




export default router;