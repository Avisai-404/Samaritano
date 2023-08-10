import {DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.js'

export const chontal_espanol = sequelize.define('memo_chontal_espanol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_imagen: {
        type: DataTypes.STRING
    },
    titulo_chontal: {
        type: DataTypes.STRING
    },
    titulo_espanol: {
        type: DataTypes.STRING
    },
}, { 
    tableName: 'memo_chontal_espanol',
    timestamps: false }); 