import { Router } from "express";
import {getComodines} from "../../controllers/memorama/comodines.controllers.js";

const router = Router();

router.get("/comodines", getComodines);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
