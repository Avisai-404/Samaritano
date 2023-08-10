
function MemoHUB_2P({puntos, puntos_2p,turnoPlayer1, turnoPlayer2,obtenerFormatoTiempo, pausarJuego }) {

    return (
        <div className="w-full flex justify-between text-xl mb-2 font-fontGeneral font-semibold text-gray-950">
            <div className="flex gap-3">
                <div className={`${turnoPlayer1 ? 'bg-red-600' :  'bg-red-300' } w-36 flex px-3 py-1 text-white rounded-lg items-center gap-2`}>
                    <p>Rojo:</p>
                    <span>{puntos}</span>
                </div>
                <div className={`${turnoPlayer2 ? 'bg-blue-600' :  'bg-blue-300' } w-36 flex px-3 py-1 text-white rounded-lg items-center gap-2`}>
                    <p>Azul:</p>
                    <span>{puntos_2p}</span>
                </div>
                
            </div>
            <button className="px-3 rounded-full text-white bg-blue-500" onClick={pausarJuego}><i className="fa-solid fa-pause"></i></button>

        </div>
    );

}

export default MemoHUB_2P;