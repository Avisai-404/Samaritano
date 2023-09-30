
import { discapacidad } from "../../models/samaritano/discapacidad.js";
import { estadocivil } from "../../models/samaritano/estadocivil.js";
import { peticiones } from "../../models/samaritano/peticiones.js";
import { solicitud } from "../../models/samaritano/solicitud.js";
import {sequelize} from '../../database/database.js';

export const getPeticiones = async (req, res) => {
   
    try {
        const arrPeticiones = await peticiones.findAll({
            where:{
                autorizado: true,
            },
            attributes: ['id','peticion',
            'nombre',
            'apellidos',
            'edad',
            'peticion',
            'direccion',
            'numero_de_contacto'
            ],
            include: [
                {
                  model: estadocivil,
                  required: true, 
                  
                   // Utilizar INNER JOIN
                },
                {
                    model: discapacidad,
                    required: true, 
                    
                     // Utilizar INNER JOIN
                  },
                  {
                    model: solicitud,
                    required: true, 
                  },
                ],
              order: [
                // Expresión SQL personalizada para ordenar las palabras
                sequelize.literal(`CASE
                  WHEN SUBSTRING(peticion, 1, 1) IN ('¡', '¿', '"') THEN SUBSTRING(peticion, 2)
                  ELSE peticion
                END`),
              ],
        });
        res.json(arrPeticiones);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const getPeticion = async (req, res) => {
    
    try {
        const {id} = req.params;
        const Peticiones = await peticiones.findOne({
            where:{
                id: id,
            },
            attributes: ['id','peticion',
            'nombre',
            'apellidos',
            'edad',
            'peticion',
            'direccion',
            'numero_de_contacto'
            ],
            include: [
                {
                  model: estadocivil,
                  required: true, 
                  
                   // Utilizar INNER JOIN
                },
                {
                    model: discapacidad,
                    required: true, 
                    
                     // Utilizar INNER JOIN
                  },
                  {
                    model: solicitud,
                    required: true, 
                  },
                ],
           
        });
        res.json(Peticiones);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getDiscapacidad = async (req, res) => {
    
    try {
        const arrDicapacidad = await discapacidad.findAll();
        res.json(arrDicapacidad);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getEstadoCivil = async (req, res) => {
    
  try {
      const arrEstadoCivil = await estadocivil.findAll();
      res.json(arrEstadoCivil);
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
}

export const getSolicitud = async (req, res) => {
    
    try {
        const arrSolicitud = await solicitud.findAll();
        res.json(arrSolicitud);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
  }

  //Insertar datos a la DB
export const createPeticion = async (req, res) => {
   
   try {
    const { nombre,
        apellidos,
        edad,
        autorizado,
        id_estadocivil,
        id_discapacidad,
        id_solicitud,
        peticion,
        direccion,
        numero_de_contacto
        } = req.body;

    const newPeticion = await peticiones.create({
        nombre,
        apellidos,
        edad,
        autorizado,
        id_estadocivil,
        id_discapacidad,
        id_solicitud,
        peticion,
        direccion,
        numero_de_contacto
    });
    const response = [newPeticion];
    res.json(response);
   } catch (error) {
    return res.status(500).json({message: error.message});
    }
}

export const updatePeticion = async (req, res) => {
   
    try {
    const {id} = req.params;
    const { nombre,
         apellidos,
         edad,
         autorizado,
         id_estadocivil,
         id_discapacidad,
         id_solicitud,
         peticion,
         direccion,
         numero_de_contacto
         } = req.body;
 
     const updatePeticion = await peticiones.update({
         nombre: nombre,
         apellidos: apellidos,
         edad: edad,
         autorizado: autorizado,
         id_estadocivil: id_estadocivil,
         id_discapacidad: id_discapacidad,
         id_solicitud: id_solicitud,
         peticion: peticion,
         direccion: direccion,
         numero_de_contacto: numero_de_contacto
     },{
        where: {
          id: id
        }
      });
      const response = [updatePeticion];
      res.json(response);
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
}

export const deletePeticion = async (req, res) =>{
    try {
        //Se obtiene el parametro id de la palabra a eliminar
        const {id} = req.params;
    
    //Primero se elimnan los registros de las tablas relacionadas que tengan el id
    await peticiones.destroy({
        where:{
            id: id,
        } 
    });
    res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getAllPeticiones = async (req, res) => {
    
    try {
        const arrPeticiones = await peticiones.findAll({ 
            attributes: ['id','peticion',
            'nombre',
            'apellidos',
            'edad',
            'peticion',
            'direccion',
            'numero_de_contacto',
            'autorizado'
            ],
            include: [
                {
                  model: estadocivil,
                  required: true, 
                  
                   // Utilizar INNER JOIN
                },
                {
                    model: discapacidad,
                    required: true, 
                    
                     // Utilizar INNER JOIN
                  },
                  {
                    model: solicitud,
                    required: true, 
                  },
                ],
                order: [['id', 'DESC']],
            });
            res.json(arrPeticiones);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }