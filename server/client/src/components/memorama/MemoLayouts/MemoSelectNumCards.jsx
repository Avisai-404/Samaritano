import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MemoSelectNumCards({tamanoArreglo, setLayoutSelectNumCards, setSelectedNumCards, renderizarCartasYTablero, setLayoutMemoSelectTema}) {
    const numCards = [];
    if (tamanoArreglo >= 3) {
        numCards.push({ numCards: 3, totalCards: 6 });
    }
    if (tamanoArreglo >= 6) {
        numCards.push({ numCards: 6, totalCards: 12 });
    }
    if (tamanoArreglo >= 10) {
        numCards.push({ numCards: 10, totalCards: 20 });
    }
    if (tamanoArreglo >= 15) {
        numCards.push({ numCards: 15, totalCards: 30 });
    }
    if (tamanoArreglo >= 28) {
        numCards.push({ numCards: 28, totalCards: 56 });
    }
    if (tamanoArreglo >= 36) {
        numCards.push({ numCards: 36, totalCards: 72 });
    }
    /*const numCards = [{ numCards: 3, totalCards: 6 },
    { numCards: 6, totalCards: 12 },
    { numCards: 10, totalCards: 20 },
    { numCards: 15, totalCards: 30 },
    { numCards: 28, totalCards: 56 },
    { numCards: 36, totalCards: 72 }];*/

    return (
        //Se pasan la props a tablero
        <main className='bg-white fixed z-40 inset-0 flex items-center flex-col font-fontGeneral py-2 overflow-auto'>
            <div className='bg-slate-200 w-full -mt-2 py-2 px-6 flex justify-end gap-2'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={()=>{setLayoutMemoSelectTema(true)}}><i className="fa-solid fa-arrow-left"></i></button>
                <Link to="/memorama"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl"><i className="fa-solid fa-house"></i></button></Link>
            </div>
            <div className='w-full h-full max-h-full flex flex-col items-center my-2'>
                <div>
                    <p className='font-semibold text-4xl text-center mb-4'>Elije el Número de Cartas en el Tablero</p>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
                    {numCards.map((e, i) => <div key={`${i}_${e}`} className='bg-blue-500 w-64 h-64 flex justify-center items-center rounded-2xl cursor-pointer p-2'
                    onClick={()=>{
                        setSelectedNumCards(e.numCards);
                        renderizarCartasYTablero(e.numCards);
                        setLayoutSelectNumCards(false);
                    }}>
                        <p className='text-6xl font-bold text-center'>{e.totalCards}</p>
                    </div>)}
                </div>
            </div>
        </main>
    );
}
export default MemoSelectNumCards;