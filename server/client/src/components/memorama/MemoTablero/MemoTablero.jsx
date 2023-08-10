import { useState, useEffect } from 'react';
import MemoTarjetas from '../MemoTarjetas/MemoTarjetas';
//import './StyleMemoTablero.css';

//Se reciben la props
function MemoTablero({ contenidoBarajeado, animacion, handleMemoClick, start, selectedNumCards, idRuta }) {

     // Estado para almacenar el tamaño de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Función para actualizar el tamaño de la ventana en el estado
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Agrega un event listener para actualizar el tamaño de la ventana cuando cambia
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    /*---Estilos css personalizados---*/
    //Para las columnas grip
    let styleMemoTablero = {};
    switch (selectedNumCards) {
        case 3:
            styleMemoTablero = {
                width: '720px',
                gridTemplateColumns: `repeat(${3}, 1fr)`,
                gap:'8px'
            }
            if (windowWidth <= 640) {
                styleMemoTablero.gridTemplateColumns = 'repeat(2, 1fr)';
              }
            break;

        case 6:
            styleMemoTablero = {
                width: '720px',
                gridTemplateColumns: `repeat(${4}, 1fr)`,
                gap:'8px'
            }
            if (windowWidth <= 768) {
                styleMemoTablero.width = '640px',
                styleMemoTablero.gridTemplateColumns = 'repeat(3, 1fr)';
              }
            break;

        case 10:
            styleMemoTablero = {
                width: '720px',
                gridTemplateColumns: `repeat(${5}, 1fr)`,
                gap:'8px'
            }
            if (windowWidth <= 768) {
                styleMemoTablero.width = '640px',
                styleMemoTablero.gridTemplateColumns = 'repeat(4, 1fr)';
              }
            break;

        case 15:
            styleMemoTablero = {
                width: '700px',
                gridTemplateColumns: `repeat(${6}, 1fr)`,
                gap:'8px'
            }
            if (windowWidth <= 768) {
                styleMemoTablero.width = '640px',
                styleMemoTablero.gridTemplateColumns = 'repeat(5, 1fr)';
              }

              if (windowWidth <= 450) {
                styleMemoTablero.gap = '6px';
              }
            break;

        case 28:
            styleMemoTablero = {
                width: '1300px',
                gridTemplateColumns: `repeat(${14}, 1fr)`,
                gap:'8px'
            }
            if (windowWidth <= 1024) {
                styleMemoTablero.width = '640px',
                styleMemoTablero.gridTemplateColumns = 'repeat(7, 1fr)',
                styleMemoTablero.gap = '6px';
              }
            
              if (windowWidth <= 820) {
                styleMemoTablero.width = '700px',
                styleMemoTablero.gridTemplateColumns = 'repeat(7, 1fr)',
                styleMemoTablero.gap = '6px';
              }

              if (windowWidth <= 450) {
                styleMemoTablero.gap = '4px';
              }

            break;

        case 36:
            styleMemoTablero = {
                width: '1150px',
                gridTemplateColumns: `repeat(${12}, 1fr)`,
                gap:'8px'
            }
            
            if (windowWidth <= 1024) {
                styleMemoTablero.width = '750px',
                styleMemoTablero.gridTemplateColumns = 'repeat(8, 1fr)',
                styleMemoTablero.gap = '6px';
              }

              if (windowWidth <= 820) {
                styleMemoTablero.width = '700px',
                styleMemoTablero.gridTemplateColumns = 'repeat(8, 1fr)',
                styleMemoTablero.gap = '6px';
              }
              if (windowWidth <= 450) {
                styleMemoTablero.gap = '4px';
              }

             
            break;

        default:
            break;
    }

    return (

        <div className='w-full flex items-center justify-center'>
            <div className='grid w-full' style={styleMemoTablero}>
                {
                    //sea mapea el arreglo con el contenido de la tarjetas, para crear cada tarjeta
                    contenidoBarajeado.map((item, i) => {
                        //Se pasa la props correspondientes
                        return <MemoTarjetas key={`${i}_${item}`} memoTarjeta={item} animacion={animacion} handleMemoClick={handleMemoClick} start={start} idRuta={idRuta}/>
                    })
                }
            </div>
        </div>
    );
}

export default MemoTablero
