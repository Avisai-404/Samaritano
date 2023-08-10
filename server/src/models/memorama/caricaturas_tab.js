// En tu archivo models.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database.js';
// En tu archivo donde desees agregar información a la base de datos

export const caricaturas_tab = sequelize.define('memo_caricaturas_tab', {
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
  tableName: 'memo_caricaturas_tab',
  timestamps: false
});

/*
async function agregarInformacion() {
    try {
      const datosParaAgregar = [   
        { nombre_imagen: 'BETO.jpg', titulo: 'Beto' },
        { nombre_imagen: 'CANELO.jpg', titulo: 'Canelo' },
        { nombre_imagen: 'LETICIA.jpg', titulo: 'Leticia' },
        { nombre_imagen: 'MISHITON.jpg', titulo: 'Mishiton' },
        { nombre_imagen: 'MIYAYA.jpg', titulo: 'Miyaya' },
        { nombre_imagen: 'PIMPI.jpg', titulo: 'Pimpi' },
        { nombre_imagen: 'PITA.jpg', titulo: 'Pita' },
        { nombre_imagen: 'RINCHO.jpg', titulo: 'Rincho' },
        { nombre_imagen: 'TOÑIN.jpg', titulo: 'Toñin' },
        { nombre_imagen: 'TRINO.jpg', titulo: 'Trino' },
        { nombre_imagen: 'VALE.jpg', titulo: 'Vale' },
        { nombre_imagen: 'VILO.jpg', titulo: 'Vilo' },
        { nombre_imagen: 'YEYA.jpg', titulo: 'Yeya' },
        { nombre_imagen: 'YEYEY.jpg', titulo: 'Yeyey' },
        { nombre_imagen: 'YORCO.jpg', titulo: 'Yorco' },
        // Agrega tantos objetos como información desees agregar
      ];
  
      for (const datos of datosParaAgregar) {
        // Crea una nueva instancia con los datos que deseas agregar
        const nuevaCaricatura = await caricaturas_tab.create(datos);
  
        // La instancia 'nuevaCaricatura' se ha guardado en la base de datos
        console.log('Información agregada con éxito:', nuevaCaricatura);
      }
    } catch (error) {
      console.error('Error al agregar información:', error);
    }
  }
  
  // Llama a la función para agregar la información
  agregarInformacion();
  */