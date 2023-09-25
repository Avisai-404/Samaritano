import React from "react";
import { Link } from 'react-router-dom';
import globalURL from "../globalURL";

export default function PagInicio(){
    return(

 <div>

<nav className="bg-white border-gray-200 dark:bg-orange-700">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://mercadofacil.mx/" className="flex items-center">
            <img src="iconMF.png" className="h-10 mr-5" alt="MercadoFacil Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mercado Fácil</span>
        </a>
        
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-600">
    <div className="max-w-screen-xl px-4 py-2 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-6 text-sm">
                <li>
                    <a href="https://mercadofacil.mx/contact-us/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Contacto</a>
                </li>
                <li>
                    <a href="https://mercadofacil.mx/about/" className="text-gray-900 dark:text-white hover:underline">Saber más</a>
                </li>
            </ul>
        </div>
    </div>
</nav>



<div className="flex flex-col md:flex-row p-2 gap-5 justify-center">

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={`${globalURL}/diccChoco/assets/Encabezado.png`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Las palabras del choco</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dichos y refranes del que se compone el pintoresco lenguaje Tabasqueño. Se compilan los  más usuales en la entidad con algún sello característico de la región.</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Locuciones que algunos echaran de menos y quizás merezcan ser mencionadas</p>
        <a href="/diccionario-choco" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Acceder
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="">
        <img className="rounded-t-lg" src={`${globalURL}/memorama/assets/logoMainMenu.png`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Memorama</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Con este divertido Memorama de los Personajes de Las palabras del Choco, pondrás a prueba tu agilidad mental…  ¡¡A ver si como roncas duermes!!</p>
        <a href="/memorama" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Jugar
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="">
        <img className="rounded-t-lg" src={`${globalURL}/samaritano/assets/encabezadoSamaritano.png`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Buen samaritano - Formulario de Petición</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Si necesitas de ayuda, llena el formulario de petición para publicarla.</p>
        <a href="/samaritano/colaborar" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Llenar formulario
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


</div>


        
 </div>


   )
 }