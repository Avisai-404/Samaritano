import { Link } from 'react-router-dom';
function MemoWin({ gano, totalP, puntos, totalTiempo, totalMovimiento, handleResetGameClick, modoJuego, totalP_2p, jugadorGanadaor }) {

    return (
        <div className={`fixed z-30 inset-0 flex items-center justify-center transition-all duration-300 ${gano ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
            <div className='w-full h-full p-4 max-h-full flex justify-center items-center overflow-auto'>
                <div className="bg-white  border-solid border-2 border-purple-800  flex flex-col items-center p-5 sm:p-7 rounded-xl text-center font-fontGeneral font-bold text-gray-950">
                    {modoJuego == 1 ? <div className='w-full flex flex-col items-center'>
                        <p className="text-5xl">¡NO PUEJ!</p>
                        <p className="text-3xl">¡ENCONTRAJTE TODOJ<br />LOJ PAREJ!</p>
                        <div className="text-2xl w-full flex justify-between px-5 mt-5">
                            <span>Puntos</span>
                            <span>{puntos}</span>
                        </div>
                        <div className="text-2xl w-full flex justify-between px-5">
                            <span>Movimientos</span>
                            <span>{totalMovimiento}</span>
                        </div>
                        <div className="text-2xl w-full flex justify-between px-5">
                            <span>Tiempo</span>
                            <span>{totalTiempo}</span>
                        </div>
                        <div className="max-w-max px-3 py-1 flex flex-col mt-3 rounded-lg shadow-xl">
                            <span className="text-2xl">Total:</span>
                            <span className="text-5xl">{totalP}</span>
                        </div>
                    </div> : modoJuego == 2 ? <div className='w-full flex flex-col items-center'>
                        <p className="text-5xl">¡NO PUEJ!</p>
                        <p className="text-3xl">{jugadorGanadaor == "Empate" ? "¡Hubo un Empate!" : `¡${jugadorGanadaor} Ganó!`}</p>
                        
                        <div className={`w-full flex ${jugadorGanadaor == "Rojo" ? 'flex-col' : 'flex-col-reverse'} items-center gap-2 mt-3 text-white`}>
                        <div className="bg-red-600 max-w-max px-10 py-1 flex flex-col rounded-lg">
                            <span className="text-2xl">Total:</span>
                            <span className={`${jugadorGanadaor == "Rojo" || jugadorGanadaor == "Empate" ? 'text-5xl' : 'text-3xl'}`}>{totalP}</span>
                        </div>
                        <div className="bg-blue-600 max-w-max px-10 py-1 flex flex-col rounded-lg">
                            <span className="text-2xl">Total:</span>
                            <span className={`${jugadorGanadaor == "Azul" || jugadorGanadaor == "Empate" ? 'text-5xl' : 'text-3xl'}`}>{totalP_2p}</span>
                        </div>
                        </div>
                    </div> : null}
                    <div className="w-full flex justify-center gap-4 mt-6 text-2xl">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={() => handleResetGameClick()}><i className="fa-solid fa-rotate-left"></i></button>
                        <Link to="/memorama"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl"><i className="fa-solid fa-house"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MemoWin;