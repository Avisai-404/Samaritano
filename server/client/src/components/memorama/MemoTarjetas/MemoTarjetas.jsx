import './StyleMemoTarjeta.css';
import { useState, useEffect } from 'react';
import globalURL from '../../globalURL';
//import logo from 'imgBackPreview/petate.jpg';

//Se reciben las props
function MemoTarjetas({ memoTarjeta, animacion, handleMemoClick, start, idRuta }) {

    let rutaImg = '';

    switch (idRuta) {
        case 'frutas_tab':
            rutaImg = (`${globalURL}memorama/frutas/${memoTarjeta.contenido.nombre_imagen}`);
            break;
        
        case 'caricaturas_tab':
            rutaImg = (`${globalURL}memorama/caricaturas/${memoTarjeta.contenido.nombre_imagen}`);
            break;

        /*    

        case 'elementos_tab':
            rutaImg = (`${globalURL}memorama/elementos/${memoTarjeta.contenido.nombre_imagen}`);
            break;

        case 'chontal_espanol':
            rutaImg = (`${globalURL}memorama/chontal_espanol/${memoTarjeta.contenido.nombre_imagen}`);
            break;
            
        case 'centla':
            rutaImg = (`${globalURL}memorama/centla/${memoTarjeta.contenido.nombre_imagen}`);
            break;
            
        case 'tapijulapa':
            rutaImg = (`${globalURL}memorama/tapijulapa/${memoTarjeta.contenido.nombre_imagen}`);
            break;  
        
        case 'centla':
            rutaImg = (`${globalURL}memorama/centla/${memoTarjeta.contenido.nombre_imagen}`);
            break;     
    */
        default:
            break;
    }

    return (
        //Codicional para poder hacer click en la tarjeta
        <div className="memo-tarjeta" onClick={() => (!memoTarjeta.tarjetaGirada && !animacion) && handleMemoClick(memoTarjeta)}>
            {/*si la propieda tarjetaGirada es true, se le aplica la clase para girarla con css*/}
            <div className={`memo-tarjeta-inner ${start ? 'start' : null} ${memoTarjeta.tarjetaGirada && 'memo-tarjeta-Girada'}`}>
                <div className="memo-tarjeta-front" style={{ backgroundImage: `url(${globalURL}/memorama/assets/imgFrontPreview/petate.jpg`}}>
                
                </div>
                <div className="memo-tarjeta-back" style={{ backgroundImage: `url(${rutaImg})`}}>
                    
                </div>
            </div>
        </div>
    );

}

export default MemoTarjetas