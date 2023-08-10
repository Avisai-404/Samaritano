import {DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.js'

export const centla = sequelize.define('memo_centla', {
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
    tableName: 'memo_centla',
    timestamps: false }); 