import {DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.js'

export const teapa = sequelize.define('memo_teapa', {
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
    tableName: 'memo_teapa',
    timestamps: false }); 