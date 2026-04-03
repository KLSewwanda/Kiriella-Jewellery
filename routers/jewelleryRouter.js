import express from "express";
import { createJewellery, getAllJewellerys } from "../controllers/jewelleryControllers.js";

const jewelleryRouter = express.Router();

jewelleryRouter.post("/", createJewellery)
jewelleryRouter.get("/", getAllJewellerys)

export default jewelleryRouter;