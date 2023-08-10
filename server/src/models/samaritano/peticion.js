import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database.js';
import { estadocivil } from '../../models/diccChoco/estadocivil.js';
import { discapacidad } from '../../models/diccChoco/discapacidad.js';
import { solicitud } from '../../models/diccChoco/solicitud.js';

export const peticion = sequelize.define('peticion', {
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
    numero: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});


//Relación con estadocivil
estadocivil.hasMany(peticion,{
    foreignKey: 'id_estadocivil',
    sourceKey: 'id'
});

Palabras.belongsTo(estadocivil,{
    foreignKey: 'id_estadocivil',
    targetId: 'id'
});


//Relación con discapacidad
discapacidad.hasMany(peticion, {
    foreignKey: 'id_discapacidad',
    sourceKey: 'id'
});

Palabras.belongsTo(discapacidad, {
    foreignKey: 'id_discapacidad',
    targetId: 'id'
});

//Relación con solicitud
solicitud.hasMany(peticion, {
    foreignKey: 'id_solicitud',
    sourceKey: 'id'
});

Palabras.belongsTo(solicitud, {
    foreignKey: 'id_solicitud',
    targetId: 'id'
});

