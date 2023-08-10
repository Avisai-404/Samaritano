
function MemoHUD({ movimientos, puntos, obtenerFormatoTiempo, pausarJuego }) {

    return (
        <div className="w-full flex justify-between text-xl mb-2 font-fontGeneral font-semibold text-gray-950">
            <div className="flex gap-3">
                <div className="w-20 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                    <span><i className="fa-solid fa-hand-pointer text-blue-500"></i></span>
                    <span>{movimientos}</span>
                </div>
                <div className="w-20 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                    <span><i className="fa-solid fa-star text-blue-500"></i></span>
                    <span>{puntos}</span>
                </div>
                <div className="w-24 flex justify-center px-4 py-1 bg-gray-300 rounded-lg items-center gap-2">
                    <span><i className="fa-regular fa-clock text-blue-500"></i></span>
                    <span>{obtenerFormatoTiempo}</span>
                </div>
            </div>
            <button className="px-3 rounded-full text-white bg-blue-500" onClick={pausarJuego}><i className="fa-solid fa-pause"></i></button>

        </div>
    );

}

export default MemoHUD;