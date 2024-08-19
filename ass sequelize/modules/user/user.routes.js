import { Router } from "express";
import * as userController from "./user.controller.js";
const router=Router()

router.post('/addUser',userController.addUser)
router.get('/getAllUser',userController.getAllUser)
router.get('/getUser',userController.getUser)


export default router