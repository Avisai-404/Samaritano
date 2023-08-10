import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MemoSelectTema({setLayoutMemoSelectTema, obtenerDatos, setIdRuta}) {

    const temaList = [{ url: 'caricaturas_tab', title: 'Caricaturas', img: '#' },/*
    { url: 'chontal_espanol', title: 'Chontal - Español', img: '#' },
    { url: 'elementos_tab', title: 'Elementos Tabasqueños', img: '#' },*/
    { url: 'frutas_tab', title: 'Frutas Tabasqueñas', img: '#' }];

    const temaListPueblosMagicos = [{ url: '/centla', title: 'Centla', img: '#' },
    { url: 'tapijulapa', title: 'Tapijulapa', img: '#' },
    { url: 'teapa', title: 'Teapa', img: '#' }];


   


    return (
        //Se pasan la props a tablero
        <main className='bg-white fixed z-50 inset-0 flex items-center flex-col font-fontGeneral py-2 overflow-auto'>
            <div className='bg-slate-200 w-full -mt-2 py-2 px-6 flex justify-end'>
                <Link to="/memorama"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl"><i className="fa-solid fa-house"></i></button></Link>
            </div>
            <div className='w-full h-full max-h-full flex flex-col items-center my-2'>
                <div>
                    <p className='font-semibold text-4xl text-center mb-4'>Elige un tema</p>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
                    {temaList.map((e, i) => <div key={`${i}_${e}`} className='bg-blue-500 w-64 h-64 flex justify-center items-center rounded-2xl cursor-pointer p-2'
                    onClick={()=>{
                        setIdRuta(e.url);
                        obtenerDatos(e.url);
                        setLayoutMemoSelectTema(false);
                    }}>
                        <p className='text-3xl font-bold text-center'>{e.title}</p>
                    </div>)}
                </div>
                <h3 className='text-3xl font-semibold text-center mt-8 mb-4'>Pueblos Mágicos de Tabasco</h3>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
                    {temaListPueblosMagicos.map((e, i) => <div key={`${i}_${e}`} className='bg-blue-500 w-64 h-64 flex justify-center items-center rounded-2xl cursor-pointer p-2'
                    onClick={()=>{
                        obtenerDatos(e.url);
                        setLayoutMemoSelectTema(false);
                    }}>
                        <p className='text-3xl font-bold text-center'>{e.title}</p>
                    </div>)}
                </div>
            </div>
        </main>
    );
}
export default MemoSelectTema;