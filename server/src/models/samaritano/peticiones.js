import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database.js';
import { estadocivil } from './estadocivil.js';
import { discapacidad } from './discapacidad.js';
import { solicitud } from './solicitud.js';

export const peticiones = sequelize.define('peticiones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.TEXT
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    peticion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    direccion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    numero_de_contacto: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});


//Relación con estadocivil
estadocivil.hasMany(peticiones,{
    foreignKey: 'id_estadocivil',
    sourceKey: 'id'
});

peticiones.belongsTo(estadocivil,{
    foreignKey: 'id_estadocivil',
    targetId: 'id'
});


//Relación con discapacidad
discapacidad.hasMany(peticiones, {
    foreignKey: 'id_discapacidad',
    sourceKey: 'id'
});

peticiones.belongsTo(discapacidad, {
    foreignKey: 'id_discapacidad',
    targetId: 'id'
});

//Relación con solicitud
solicitud.hasMany(peticiones, {
    foreignKey: 'id_solicitud',
    sourceKey: 'id'
});

peticiones.belongsTo(solicitud, {
    foreignKey: 'id_solicitud',
    targetId: 'id'
});

