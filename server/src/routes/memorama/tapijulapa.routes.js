import { Router } from "express";
import {getTapijulapa} from "../../controllers/memorama/tapijulapa.controllers.js";

const router = Router();

router.get("/tapijulapa", getTapijulapa);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
