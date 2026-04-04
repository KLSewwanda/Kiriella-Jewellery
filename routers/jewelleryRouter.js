import express from "express";
import { createJewellery, deleteJewellery, getAllJewellery, getJewelleryById, updateJewellery,} from "../controllers/jewelleryControllers.js";

const jewelleryRouter = express.Router();

jewelleryRouter.post("/", createJewellery)
jewelleryRouter.get("/", getAllJewellery)
jewelleryRouter.get("/:productId", getJewelleryById)

jewelleryRouter.delete("/:productId", deleteJewellery)
jewelleryRouter.put("/:productId", updateJewellery)

export default jewelleryRouter;