import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function CardsSam({ /*imagen, categoria*/ nombre, apellidos, edad, autorizado, id_estadocivil, id_discapacidad, id_solicitud, peticion, direccion, numero_de_contacto}) {
    let [activeDiv, setActiveDiv] = useState(false)

    return (
        <div className="group w-80 md:w-80 xl:w-96 h-60">
            <div className={`relative h-full w-full transition-all duration-300 [transform-style:preserve-3d] ${activeDiv ? '[transform:rotateY(180deg)]' : ''} shadow-mfBoxShadow 
            rounded-lg flex flex-col justify-center gap-1`}>
                <div className='absolute inset-0 rounded-lg px-5 py-3 border-solid border-2 border-samColor'>

                    <div>
                        <p className="text-3xl font-bold text-samColor">{nombre} {apellidos}</p>
                        <p className="cardPalabras-lugar"><span></span>{peticion}<span></span></p>
                    </div>
                    <div className='my-1'>
                        <p className='font-bold text-samColor'>Domicilio</p>
                        <div className='overflow-auto h-14 w-full'>
                            <p className="">{direccion}</p>
                        </div>
                    </div>
                    <div className='my-1'>
                        <p className='font-bold text-samColor'>Contacto</p>
                        <p className="overflow-auto h-8 w-full">{numero_de_contacto}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}