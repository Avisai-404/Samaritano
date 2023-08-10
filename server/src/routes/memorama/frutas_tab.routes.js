import { Router } from "express";
import {getFrutas_tab} from "../../controllers/memorama/frutas_tab.controllers.js";

const router = Router();

router.get("/frutas_tab", getFrutas_tab);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
