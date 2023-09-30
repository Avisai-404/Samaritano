//import axios from 'axios';
import { useEffect, useState } from 'react';
import CardsSam from './cardsSamaritano';
import { Link } from 'react-router-dom';
import NavBar from '../navbars/navbar';
import globalURL from '../../globalURL';
//import './cards.css'
export default function CardSamaritano() {

    const [datos, setDatos] = useState([])
    const [currentPage, setCurrent] = useState(1)
    const [newFilter, setFiltro] = useState([])
    const [inicio, setInicio] = useState(false)

    function filtroLetra(e) {
        setCurrent(1)
        //console.log(e.target.value);
        if (e.target.value == 'ALL') {
            setFiltro(datos)

        } else {
            const result = datos.filter(element => {
                //const regex = /^(¡¿")?/i;
                // console.log(element.palabra.startsWith(e.target.value.toUpperCase()) ? element.palabra.startsWith(e.target.value.toUpperCase()) : "No hay")    
                return element.palabra.toUpperCase().startsWith(e.target.value.toUpperCase()) ||
                (element.palabra.startsWith('¡') && element.palabra.toUpperCase().startsWith(e.target.value.toUpperCase(), 1)) ||
                (element.palabra.startsWith('¿') && element.palabra.toUpperCase().startsWith(e.target.value.toUpperCase(), 1)) ||
                (element.palabra.startsWith('"') && element.palabra.toUpperCase().startsWith(e.target.value.toUpperCase(), 1));
                //regets

            })
            if (result.length > 0) { setFiltro(result) } else { setFiltro([]) }

        }

        if (!inicio) {
            setInicio(true)
        }



        //console.log(newFilter)
    }


    function realTimeSearch(e) {
        setCurrent(1)

        const result = datos.filter(element => {
            // console.log(e.target.value)
            //const regex = /^(¡¿")?/i;
            // console.log(element.palabra.startsWith(e.target.value.toUpperCase()) ? element.palabra.startsWith(e.target.value.toUpperCase()) : "No hay")    
            return element.peticion.toLowerCase().includes(e.target.value.toLowerCase())
            //regets

        })
        //console.log(result)
        if (result.length > 0) { setFiltro(result) } else { setFiltro([]) }



        if (!inicio) {
            setInicio(true)
        }

    }



    //console.log(newFilter)
    useEffect(() => {
        if (!datos.length) {
            fetch(`${globalURL}peticiones`)
                .then(res => res.json())
                .then((res) => { setDatos(res) })
        }
    }, [datos])


    let next = currentPage * 6
    let prev = next - 6
    let partirData
    //if(newFilter.length > 0){partirData = newFilter.slice(prev, next)} else {partirData = []/*datos.slice(prev, next)*/}

    if (inicio) {
        if (newFilter.length > 0) {
            partirData = newFilter.slice(prev, next)
        } else {
            partirData = []/*datos.slice(prev, next)*/
        }
    } else {
        partirData = datos.slice(prev, next)
    }

    const allPages = newFilter.length > 0 ? Math.ceil(newFilter.length / 6) : Math.ceil(datos.length / 6)
    const allWords = newFilter.length > 0 ? newFilter.length : datos.length

    return (

        <div className='w-full min-h-screen text-center'>
            <NavBar mfLogo={"MercadoFácil.mx"} mfLink={"https://mercadofacil.mx/"} cola={"Formulario"} colaLink={"/samaritano/colaborar"}
                 masInfo={"Saber más"} masInfoLink={"https://mercadofacil.mx/las-palabras-del-choco/"} 
                inicio={"/"} className="bg-blue-500" />

            <div className="text-center">
            <img
                    src={`${globalURL}/samaritano/assets/samaritanoBanner.png`}
                    alt="Banner"
                    className="w-full h-auto"
            />
            </div>

            <div className='w-full px-4 md:px-6 mt-5'>
                <h2 id='sectionId' className='text-3xl font-bold text-samColor my-3'>Peticiones</h2>
                
                <p className='text-center md:text-lg font-medium text-gray-800'>
                Pero un samaritano, que iba de camino, vino cerca de él, y viéndole, 
                fue movido a misericordia;  y acercándose, <br />
                vendó sus heridas, echándoles aceite y vino; 
                y poniéndole en su cabalgadura, lo llevó al mesón, y cuidó de él.
                    </p>

                <div className='xl:mx-4 mb-6 w-auto  flex flex-col gap-2 mt-7'>
                    <div className='w-full flex flex-col gap-2 md:flex-row md:gap-0 md:justify-between items-center'>

                        <div className="">
                            <input
                                onChange={realTimeSearch}
                                type="text"
                                className="px-3 py-2 bg-white border shadow-sm border-slate-500 placeholder-slate-500 focus:outline-none focus:border-samColor focus:ring-samColor block w-full sm:w-64 rounded-md sm:text-base focus:ring-1" placeholder="Buscar palabra..."
                            ></input>

                        </div>

                    </div>




                    <div className='w-full md:text-lg font-medium flex text-gray-900 mt-1'>
                        {partirData.length > 0 ?
                            <div className='w-full flex flex-col md:flex-row sm:justify-between'>
                                <p className=''>Solicitudes Encontradas: <span className='text-samColor font-semibold'>{allWords}</span></p>


                            </div>
                            :
                            <div className='w-full flex flex-col md:flex-row sm:justify-between'>
                                <p className=''>Solicitudes Encontradas: <span className='text-samColor font-semibold'>0</span></p>

                            </div>
                        }

                    </div>
                </div>



                {partirData.length > 0 ?
                    <div className='grid gap-6 xl:gap-18 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:px-8 lg:px-2 xl:px-9'>
                        {partirData.map(e =>
                            <CardsSam key={e.id} /*imagen={e.Multimedium.url_imagen}*/ nombre={e.nombre} apellidos={e.apellidos} edad={e.edad} id_estadocivil={e.id_estadocivil} id_discapacidad={e.id_discapacidad} id_solicitud={e.id_solicitud} 
                            peticion={e.peticion} direccion={e.direccion} numero_de_contacto={e.numero_de_contacto}  />
                        )}
                    </div> :
                    <div className='w-full h-full grid gap-1 grid-cols-1'>
                        <p className='text-center text-3xl md:text-4xl font-bold text-samColor'>Sin Resultados</p>
                        <p className='text-center md:text-lg font-medium text-gray-800'>Por el momento no se han encontrado palabras que coincidan</p>
                        <p></p>
                    </div>
                }

                <div className='w-full md:text-lg font-medium text-gray-800 mt-4'>
                    {partirData.length > 0 ?
                        <div className='w-full'>

                            <p className=''>Página <span className='text-samColor font-semibold'>{currentPage}</span> de <span className='text-samColor font-semibold'>{allPages}</span></p>
                        </div>
                        :
                        <div className='w-full'>

                            <p className=''>Página <span className='text-samColor font-semibold'>0</span> de <span className='text-samColor font-semibold'>0</span></p>

                        </div>
                    }

                </div>

                <div className='mt-5 mb-4 w-full flex justify-center gap-3'>
                    {currentPage > 1 ?
                        <button className='rounded-md bg-samColor px-3 py-2 text-white shadow-md font-medium' onClick={() => setCurrent(currentPage - 1)}><i className="fa-solid fa-circle-left"></i> Anterior</button> : null}
                    {currentPage < allPages && partirData.length > 0 ?
                        <button className='rounded-md bg-samColor px-3 py-2 text-white shadow-md font-medium' onClick={() => {
                            setCurrent(currentPage + 1)
                            const section = document.getElementById('sectionId');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }

                        }}>Siguiente <i className="fa-solid fa-circle-right"></i></button> : null}
                </div>

                <div className='mt-1 mb-2 w-full flex flex-col justify-center gap-3'>
                    <p className='text-center md:text-lg font-medium text-gray-800'>Si necesitas de ayuda, llena el formulario de petición para publicarla.</p>
                    <Link to="/samaritano/colaborar"><button className='rounded-md bg-samColor px-3 py-2 text-white shadow-md font-medium'>Formulario <i className="fa-solid fa-pen-to-square"></i></button></Link>
                </div>
            </div>
        </div>
    )
}