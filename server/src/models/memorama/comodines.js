import {DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.js'

export const comodines = sequelize.define('memo_comodines', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_imagen: {
        type: DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
}, {   
    tableName: 'memo_comodines',
    timestamps: false }); 