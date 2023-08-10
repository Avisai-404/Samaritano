import { Router } from "express";
import {getCaricaturas_tab} from "../../controllers/memorama/caricaturas_tab.controllers.js";

const router = Router(); 

router.get('/caricaturas/', (req, res) => {
    res.send()
})

router.get("/caricaturas_tab", getCaricaturas_tab);
/*router.post("/caricaturas_tab", createCaricaturas_tab);
router.put("/caricaturas_tab/:id");
router.delete("/caricaturas_tab/:id");
router.get("/caricaturas_tab/:id");*/



export default router;
