import { Router } from "express";
import * as userController from "./user.controller.js";
const router=Router()

router.post('/addUser',userController.addUser)
router.get('/getAllUser',userController.getAllUser)
router.get('/getUser',userController.getUser)
router.get('/searchUser',userController.searchUser)
router.get('/UserIn',userController.userIn)
router.put('/updateUser',userController.updateUser)
router.delete('/deleteUser',userController.deleteUser)


export default router