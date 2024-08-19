import { Router } from "express";
import * as productController from "./product.controller.js";
const router=Router()

router.get('/',productController.addProduct)



export default router