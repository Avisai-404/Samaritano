import { Router } from "express";
import { createPeticion, getDiscapacidad, getEstadoCivil, getSolicitud, updatePeticion, deletePeticion, getPeticion, getAllPeticion } from "../../controllers/samatitano/samaritano.controller.js";

const router = Router();

router.get('/discapacidad', getDiscapacidad);
router.get('/estadocivil', getEstadoCivil);
router.get('/solicitud', getSolicitud);
router.post('/peticiones', createPeticion);
router.put('/peticiones/:id', updatePeticion);
router.delete('/peticiones/:id', deletePeticion);
router.get('/peticiones/:id', getPeticion);
router.get('/peticionesall', getAllPeticion)


export default router;
