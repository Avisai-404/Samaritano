import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NavBar from '../navbars/navbar';
import globalURL from '../../globalURL';

const FormField = ({ label, name, placeholder, errors, type = 'text' }) => (
    <div className='text-left mb-5'>
        <label className='font-bold text-gray-800' htmlFor={name}>{label}</label>
        <Field
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            className="px-2 py-1.5 bg-white border shadow-sm border-slate-500 placeholder-slate-500 focus:outline-none focus:border-samColor focus:ring-samColor block w-full sm:w-64 rounded-md sm:text-base focus:ring-1"
        />
        <ErrorMessage name={name} component={() => (
            <div className='error text-red-600 font-medium'>{errors[name]}</div>
        )} />
    </div>
);


const Formulario = () => {
    const [dataDiscapacidad, setDataDiscapacidad] = useState([]);
    const [dataEstadoCivil, setDataEstadoCivil] = useState([]);
    const [dataSolicitud, setDataSolicitud] = useState([]);
    const [dataPeticion, setDataPeticion] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!dataDiscapacidad.length) {
            fetch(`${globalURL}discapacidad`)
                .then(res => res.json())
                .then((res) => { setDataDiscapacidad(res) })
        }
    }, [dataDiscapacidad])
    useEffect(() => {
        if (!dataSolicitud.length) {
            fetch(`${globalURL}solicitud`)
                .then(res => res.json())
                .then((res) => { setDataSolicitud(res) })
        }
    }, [dataSolicitud])
    useEffect(() => {
        if (!dataEstadoCivil.length) {
            fetch(`${globalURL}estadocivil`)
                .then(res => res.json())
                .then((res) => { setDataEstadoCivil(res) })
        }
    }, [dataEstadoCivil])

    const handleSubmit = (values, { resetForm }) => {
        try {



            // Agregar las cadenas de texto al objeto values
            values.nombre = values.nombre ? values.nombre : 'No Aplica';
            values.apellidos = values.apellidos ? values.apellidos : 'No Aplica';
            values.edad = values.edad ? values.edad : 'No Aplica';
            values.peticion = values.peticion ? values.peticion : 'Anónimo';
            values.direccion = values.direccion ? values.direccion : 'Anónimo';
            values.numero_de_contacto = values.numero_de_contacto ? values.numero_de_contacto : 'Anónimo';
        

            // Enviar los datos a la ruta del servidor
            fetch(`${globalURL}peticiones`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // Hacer algo con la respuesta del servidor
                   // console.log(data);
                    setDataPeticion([]);
                    resetForm();

                })
                .catch((error) => {
                    // Manejar el error
                    console.error(error);
                });

            setIsOpen(true);
        } catch (error) {
            console.log("mensaje", error)
        }


    };


    const closeModal = () => {
        setIsOpen(false);
        //onClose();
    };

    return (
        <div className='w-full min-h-screen text-center'>
            <NavBar mfLogo={"MercadoFácil.mx"} mfLink={"https://mercadofacil.mx/"} cola={"Volver"} colaLink={"/samaritano"}
                    verDiccLink={'/samaritano'} masInfo={"Saber más"} masInfoLink={"https://mercadofacil.mx/samaritano/"} />

            <div className='w-full px-4 mb-2 md:px-6 flex flex-col items-center'>

                <>
                    <Formik
                        //almacena los valores de cada campo
                        initialValues={{
                            nombre: '',
                            apellidos: '',
                            edad: '',
                            peticion: '',
                            direccion: '',
                            numero_de_contacto: '',
                            id_solicitud: 1,
                            id_estadocivil: 1,
                            id_discapacidad: 1,
                            
                        }}
                        //validar que los valores escritos dentro del campo, correspondan a lo solicitado en cada tabla
                        validate={(valores) => {
                            let errores = {};

                            //valores de nombre
                            if (!valores.nombre) {
                                errores.nombre = 'Campo obligatorio*'
                            }

                            if (!valores.apellidos) {
                                errores.apellidos = 'Campo obligatorio*'
                            }
                            //valores de edad
                            if (!valores.edad) {
                                errores.edad = 'Campo obligatorio*'
                            }
                            if (!valores.peticion) {
                                errores.peticion = 'Campo obligatorio*'
                            }
                             if (!valores.direccion) {
                                errores.dirrecion = 'Campo obligatorio*'
                            }
                             if (!valores.numero_de_contacto) {
                                errores.numero_de_contacto = 'Campo obligatorio*'
                            }

                            return errores;
                        }}
                        //para enviar formulario
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors }) => (
                            <Form className='max-w-max p-5 mt-3 bg-white rounded-2xl border-2 border-solid border-samColor shadow-mfBoxShadow'>
                                <h2 className='mb-6 font-semibold text-samColor text-3xl'>Formulario de Petición</h2>
                                <div className='w-full flex flex-col items-center'>

                                    <div className='w-auto flex flex-col md:flex-row gap-1 md:gap-5'>
                                        <FormField
                                            label="Nombre:"
                                            name="nombre"
                                            placeholder="Ingrese el nombre"
                                            errors={errors}
                                        />
                                        <FormField
                                            label="Apellidos:"
                                            name="apellidos"
                                            placeholder="Ingrese el apellido"
                                            errors={errors}
                                        />
                                    </div>
                                        <FormField
                                            label="Edad:"
                                            name="edad"
                                            placeholder="Ingrese su edad"
                                            errors={errors}
                                        />

                                    <div className='w-auto flex flex-col md:flex-row gap-1 md:gap-5 mb-4'>

                                   <div className='flex flex-col items-center'>
                                        <label htmlFor="selectedOption" className='font-bold text-gray-800'>Estado civil</label>
                                        <Field as="select" name="id_estadocivil" id="id_estadocivil"
                                            className="block w-64 rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:outline-none focus:border-samColor focus:ring-samColor sm:max-w-xs sm:leading-6">
                                            
                                            {dataEstadoCivil.map((e) => (
                                                <option key={e.id} value={e.id}>
                                                    {e.estadocivil}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>

                                    <div className='flex flex-col items-center'>
                                        <label htmlFor="selectedOption" className='font-bold text-gray-800'>¿Tiene alguna discapacidad?</label>
                                        <Field as="select" name="id_discapacidad" id="id_discapacidad"
                                            className="block w-64 rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:outline-none focus:border-samColor focus:ring-samColor sm:max-w-xs sm:leading-6">
                                            
                                            {dataDiscapacidad.map((e) => (
                                                <option key={e.id} value={e.id}>
                                                    {e.discapacidad}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>


                                    </div>

                                    <div className='w-auto flex flex-col md:flex-row gap-1 md:gap-5 mb-4'>

                                    <div className='flex flex-col items-center'>
                                        <label htmlFor="selectedOption" className='font-bold text-gray-800'>Solicitud de</label>
                                        <Field as="select" name="id_solicitud" id="id_solicitud"
                                            className="block w-64 rounded-md border-0 px-2 py-2 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:outline-none focus:border-samColor focus:ring-samColor sm:max-w-xs sm:leading-6">
                                            
                                            {dataSolicitud.map((e) => (
                                                <option key={e.id} value={e.id}>
                                                    {e.solicitud}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>

                                    </div>

                                    <div className='w-auto flex flex-col md:flex-row gap-1 md:gap-5'>
                                    <FormField
                                        label="Petición:"
                                        name="peticion"
                                        placeholder="Describa el tipo de ayuda que necesita"
                                        errors={errors}
                                    />
                                    </div>


                                
                                    <div className='w-auto flex flex-col md:flex-row gap-1  md:gap-5'>
                                            <FormField
                                                label="Dirección:"
                                                name="direccion"
                                                placeholder="Ingrese su dirección exacta y centro integrador"
                                                errors={errors}
                                            />        
                                    </div>                        

                                        <div className='w-auto flex flex-col md:flex-row gap-1  md:gap-5'>
                                            <FormField
                                                label="Número de contacto:"
                                                name="numero_de_contacto"
                                                placeholder="Ingrese su número de contacto"
                                                type= "number"
                                                errors={errors}
                                            />
                                    </div>




                                </div>

                                <button type='submit' className='w-auto rounded-md mt-6 bg-samColor px-5 py-1.5 text-white shadow-md font-medium'><i className="fa-solid fa-paper-plane"></i> Enviar</button>
                                <div
                                    className={`fixed bg-modal inset-0 flex items-center justify-center transition-all duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <div className="bg-white mx-4 sm:w-96 p-5 rounded-xl shadow-mfBoxShadow border">
                                        <p className="text-2xl text-gray-800 font-bold mb-3">¡Gracias!</p>
                                        <p className='text-8xl mb-2 text-green-600'><i className="fa-regular fa-circle-check"></i></p>
                                        <p className="text-lg text-gray-700 font-medium mb-4">Su aportación ha sido enviada para su revisión y posterior anexión al peticion.</p>
                                        <button type="button" className='w-auto h-min rounded-md bg-samColor px-3 py-1.5 text-white shadow-md font-medium' onClick={closeModal}>Aceptar</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </>

            </div>
        </div>
    );
}

export default Formulario;