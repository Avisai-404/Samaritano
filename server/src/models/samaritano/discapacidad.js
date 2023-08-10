import {DataTypes} from 'sequelize';
import {sequelize} from '../../database/database.js';
//import { Palabras } from './Palabras.js';

export const discapacidad = sequelize.define('discapacidad', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    discapacidad:{
        type: DataTypes.STRING
    }
    
},
{ timestamps: false });


// Array con los datos a insertar
const usersData = [
  { discapacidad: 'Sí'},
  { discapacidad: 'No'}
];

sequelize.sync()
  .then(() => {
    const promises = usersData.map(userData => {
      return discapacidad.findOrCreate({
        where: { discapacidad: userData.discapacidad },
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