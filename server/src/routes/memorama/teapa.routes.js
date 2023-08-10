import { Router } from "express";
import { getTeapa } from "../../controllers/memorama/teapa.controllers.js";

const router = Router();

router.get("/teapa", getTeapa);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;