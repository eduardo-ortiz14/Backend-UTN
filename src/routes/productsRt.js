import { Router } from "express";
import {
  getAll,
  addNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsCt.js";

export const router = Router();

router.get("/", getAll);
router.post("/", addNewProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
