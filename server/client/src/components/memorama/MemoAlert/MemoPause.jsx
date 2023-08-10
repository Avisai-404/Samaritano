import { Link } from 'react-router-dom';
function MemoPause({pauseAlert, volumeSound,setVolumeSound, volumeMusic ,setVolumeMusic,handleResetGameClick, continuarJuego}) {

    return (
        <div className={`fixed z-30 inset-0 flex items-center justify-center transition-all duration-300 ${pauseAlert ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>
            <div className='w-full h-full p-4 max-h-full flex justify-center items-center overflow-auto'>
                <div className="bg-white border-solid border-2 border-purple-800  flex flex-col items-center p-7 rounded-xl text-center font-fontGeneral font-bold text-gray-950">
                    <p className="text-5xl">Pausa</p>
                    <div className="text-2xl w-full flex flex-col gap-3 mt-5">
                        <div className="w-full flex items-center justify-between">
                        <span>Sonido</span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={() => volumeSound ? setVolumeSound(false) : setVolumeSound(true)}>{volumeSound ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}</button>
                        </div>
                        <div className="w-full flex items-center justify-between">
                        <span>Música</span>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={() => volumeMusic ? setVolumeMusic(false) : setVolumeMusic(true)}>{volumeMusic ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}</button>
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-center gap-4 mt-6 text-2xl">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={() => handleResetGameClick()}><i className="fa-solid fa-rotate-left"></i></button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl" onClick={continuarJuego}><i className="fa-solid fa-play"></i></button>
                        <Link to="/memorama"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-2xl"><i className="fa-solid fa-house"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MemoPause;