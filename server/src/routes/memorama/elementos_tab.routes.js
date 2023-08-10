import { Router } from "express";
import {getElementos_tab} from "../../controllers/memorama/elementos_tab.controllers.js";

const router = Router();

router.get("/elementos_tab", getElementos_tab);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
