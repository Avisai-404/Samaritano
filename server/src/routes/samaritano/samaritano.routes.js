import { Router } from "express";
import { getPeticiones, createPeticion, getDiscapacidad, getEstadoCivil, getSolicitud, updatePeticion, deletePeticion, getPeticion, getAllPeticiones } from "../../controllers/samatitano/samaritano.controller.js";

const router = Router();

router.get('/peticiones', getPeticiones);
router.get('/discapacidad', getDiscapacidad);
router.get('/estadocivil', getEstadoCivil);
router.get('/solicitud', getSolicitud);
router.post('/peticiones', createPeticion);
router.put('/peticiones/:id', updatePeticion);
router.delete('/peticiones/:id', deletePeticion);
router.get('/peticion/:id', getPeticion);
router.get('/peticionesall', getAllPeticiones)


export default router;
