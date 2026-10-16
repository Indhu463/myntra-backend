import express from "express";
import {
  getAllProducts,
  getProduct,
} from "../controllers/productController.js";
import { validateProdQuery } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.route("/").get(validateProdQuery, getAllProducts);
router.route("/:id").get(getProduct);

export default router;
