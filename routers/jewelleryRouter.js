import express from "express";
import { createJewellery } from "../controllers/jewelleryControllers.js";

const jewelleryRouter = express.Router();

jewelleryRouter.post("/", createJewellery)

export default jewelleryRouter;