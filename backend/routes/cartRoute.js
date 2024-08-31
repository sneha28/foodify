import express from "express"
import { addToCart, removerFromCart, getCart } from "../controllers/CartController.js"
import authMiddleware from "../middleware/authenticate.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove", authMiddleware, removerFromCart)
cartRouter.post("/get", authMiddleware, getCart)

export default cartRouter;