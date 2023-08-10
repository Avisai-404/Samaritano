function MemoMessage({ mostrarMensajes, primerTexto, sengundoTexto}) {

    return (
        <div className={`fixed z-30 inset-0 flex items-center justify-center font-fontGeneral text-center font-bold ${mostrarMensajes ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}>


            <div className='w-full h-full p-4 max-h-full flex justify-center items-center overflow-auto'>

                <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-300 ${primerTexto ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                    <p className='bg-purple-800 p-3 rounded-2xl text-yellow-400 text-4xl mfsm:text-5xl sm:text-6xl'>¡VAMOS A VE<br />QUE TAN TIGRE SOS<br />VOS!</p>
                </div>
                <div className={`fixed inset-0 min-w-max flex items-center justify-center transition-all duration-300 ${sengundoTexto ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`} >
                    <p className='bg-purple-800 p-3 rounded-2xl text-yellow-400 text-4xl mfsm:text-5xl sm:text-6xl'>¡PONTE AGUSAO!</p>
                </div>
            </div>

        </div>
    );

}

export default MemoMessage;