import { Router } from "express";
import * as productController from "./product.controller.js";
const router=Router()

router.get('/allProduct',productController.getAllProduct)
router.post('/addProduct',productController.addProduct)
router.delete('/deleteProduct',productController.deleteProduct)


export default router