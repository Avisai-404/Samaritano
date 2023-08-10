import {DataTypes} from 'sequelize';
import {sequelize} from '../../database/database.js';
//import { Palabras } from './Palabras.js';

export const solicitud = sequelize.define('solicitud', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    solicitud:{
        type: DataTypes.STRING
    }
},{ timestamps: false });

const usersData = [
    { solicitud: 'Medicamentos'},
    { solicitud: 'Andadera'},
    { solicitud: 'Collarín'},
    { solicitud: 'Despensa'},
    { solicitud: 'Muebles'},
    { solicitud: 'Silla de Ruedas'},
    { solicitud: 'Bastón'},
    { solicitud: 'Traslado'},
    { solicitud: 'Ropa'},
    { solicitud: 'Reparación de Casa'},
    { solicitud: 'Muletas'},
    { solicitud: 'Pañales'},
    { solicitud: 'Lentes'}, 
    { solicitud: 'Ayuda Económica'}
  ];
  
  sequelize.sync()
    .then(() => {
      const promises = usersData.map(userData => {
        return solicitud.findOrCreate({
          where: { solicitud: userData.solicitud },
          defaults: userData
        });
      });
  
      return Promise.all(promises);
    })
    .then(() => {
      console.log('Datos insertados exitosamente!');
      // Aquí puedes realizar otras operaciones con las tablas
    })
    .catch(err => {
      console.error('Error al crear las tablas y insertar los datos:', err);
    });