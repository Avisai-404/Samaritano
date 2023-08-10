import {DataTypes} from 'sequelize';
import {sequelize} from '../../database/database.js';
//import { Palabras } from './Palabras.js';

export const estadocivil = sequelize.define('estadocivil', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estadocivil:{
        type: DataTypes.STRING
    }
},{ timestamps: false });

const usersData = [
    { estadocivil: 'Soltero (a)'},
    { estadocivil: 'Casado (a)'},
    { estadocivil: 'Divorciado (a)'},
    { estadocivil: 'Unión Libre'},
    { estadocivil: 'Viudo (a)'}
  ];
  
  sequelize.sync()
    .then(() => {
      const promises = usersData.map(userData => {
        return estadocivil.findOrCreate({
          where: { estadocivil: userData.estadocivil },
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