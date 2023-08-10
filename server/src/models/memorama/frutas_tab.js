import {DataTypes} from 'sequelize'
import { sequelize } from '../../database/database.js'

export const frutas_tab = sequelize.define('memo_frutas_tab', {
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
    tableName: 'memo_frutas_tab',
    timestamps: false }); 


/*
 async function agregarInformacion() {
    try {
      const datosParaAgregar = [   
        { nombre_imagen: 'aguacate.jpg', titulo: 'Aguacate' },
        { nombre_imagen: 'anona.jpg', titulo: 'Anona' },
        { nombre_imagen: 'cacao.jpg', titulo: 'Cacao' },
        { nombre_imagen: 'carambola.jpg', titulo: 'Carambola' },
        { nombre_imagen: 'coco.jpg', titulo: 'Coco' },
        { nombre_imagen: 'guanabana.jpg', titulo: 'Guanábana' },
        { nombre_imagen: 'guineo.jpg', titulo: 'Guineo' },
        { nombre_imagen: 'limon.jpg', titulo: 'Limón' },
        { nombre_imagen: 'mandarina.jpg', titulo: 'Mandarina' },
        { nombre_imagen: 'mango.jpg', titulo: 'Mango' },
        { nombre_imagen: 'melon.jpg', titulo: 'Melón' },
        { nombre_imagen: 'naranja.jpg', titulo: 'Naranja' },
        { nombre_imagen: 'papaya.jpg', titulo: 'Papaya' },
        { nombre_imagen: 'piña.jpg', titulo: 'Piña' },
        { nombre_imagen: 'platano.jpg', titulo: 'Plátano' },
        { nombre_imagen: 'sandia.jpg', titulo: 'Sandía' },
        { nombre_imagen: 'tamarindo.jpg', titulo: 'Tamarindo' },
        // Agrega tantos objetos como información desees agregar
      ];
  
      for (const datos of datosParaAgregar) {
        // Crea una nueva instancia con los datos que deseas agregar
        const nuevafruta = await frutas_tab.create(datos);
  
        // La instancia 'nuevaCaricatura' se ha guardado en la base de datos
        console.log('Información agregada con éxito:', nuevafruta);
      }
    } catch (error) {
      console.error('Error al agregar información:', error);
    }
  }
  
  // Llama a la función para agregar la información
  agregarInformacion();

  */