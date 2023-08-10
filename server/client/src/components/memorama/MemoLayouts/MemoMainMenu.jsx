import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import globalURL from '../../globalURL';

function MemoMainMenu() {
 

  return (
    //Se pasan la props a tablero
    <main className='w-full min-h-screen flex items-center justify-between md:justify-around lg:justify-between flex-col p-2 font-fontGeneral'>
      <div>
        <p className='font-bold text-5xl text-center'>MEMORAMA</p>
        <p className='text-center font-semibold text-gray-800 mb-2'>Versión: Beta</p>
        <img src={`${globalURL}/memorama/assets/logoMainMenu.png`} alt="" className='w-96' />
      </div>
      <div className='flex flex-col gap-3 text-2xl font-semibold'>
        <Link to="/memorama/unjugador"><button className='bg-blue-500 text-white w-60 py-3 rounded-2xl flex justify-center'>1 JUGADOR</button></Link>
        <Link to="/memorama/dosjugadores"><button className='bg-blue-500 text-white w-60 py-3 rounded-2xl flex justify-center'>2 JUGADORES</button></Link>
        <Link to="/"><button className='bg-red-500 text-white w-60 py-3 rounded-2xl flex justify-center'>SALIR DEL JUEGO</button></Link>
      </div>
      <div className='font-semibold text-gray-800'>
        <a href='https://mercadofacil.mx/' target='_blank'>MercadoFácil.mx</a>
      </div>
    </main>

  );
}

export default MemoMainMenu;