import { Router } from "express";
import {getCentla} from "../../controllers/memorama/centla.controllers.js";

const router = Router();

router.get("/centla", getCentla);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
