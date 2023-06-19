import { useState } from 'react';
import Layout from "../components/Layout"
import Image from 'next/image'

const aprendizaje = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza la lógica para enviar el formulario
    console.log(formData);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };


  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleSelectChange = (event) => {
    const userChoice = event.target.value;
    setSelectedOption(userChoice);

    if (userChoice === 'opcion_correcta') {
      setMessage('¡Opción seleccionada correctamente!');
      setMessageColor('text-green-500');
    } else {
      setMessage('Incorrecto. Por favor, elije la opción correcta.');
      setMessageColor('text-red-500');
    }
  };

  return (
    <Layout titulo="Aprendizaje" tab={5}>
      {step === 1 && (
        <main className="bg-[url('/imgs/planoFondo.jpg')] bg-center bg-cover h-screen">
          <section className=" bg-black bg-opacity-20 backdrop-blur-sm h-screen pt-14  flex flex-col items-center ">
            <h1 className="sombra_texto font-bold text-5xl text-white mt-40 mb-6">Aprendizaje</h1>
            <p className="sombra_texto text-white font-medium text-xl mb-16 flex flex-col">
              Bienvenido a la sección de aprendizaje, aquí podrás aprender a{' '}
              <span>moverte a través de la red del metro de una forma divertida</span>
            </p>
            <button onClick={handleNextStep} className="bg-amber-500 shadow-md text-white font-bold text-xl px-10 py-2 rounded-lg">
              Comenzar
            </button>
          </section>
        </main>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-5 mb-6">
            En la red del metro de la Ciudad de México existen 12 líneas de metro, cada una con un color y número distintivo:
          </p>
          <div className='flex justify-center mb-6'>
              <Image src="/imgs/Ap1.png" 
                  alt='ap1' 
                  width={450}
                  height={400}
               />
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}


{step === 3 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-5 mb-6">
          Cada estación tiene un ícono representativo del lugar en el que se encuentra, ya sea la colonia en la que se ubica, avenidas o lugares turísticos como el palacio de Bellas Artes. 
          </p>
          <div className='flex justify-center mb-6'>
              <Image src="/imgs/a2.png" 
                  alt='ap1' 
                  width={350}
                  height={300}
               />
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}


{step === 4 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'>Ejemplo de viaje #1</span>
          </p>
          <p> Si una persona se encuentra en la estación Gómez Farias y quiere llegar a Pino Suarez, tiene que abordar el tren en dirección Observatorio.</p> 
      
          <div className='flex justify-center mb-6'>
              <Image src="/imgs/a4-1.png" 
                  alt='a3.png' 
                  width={850}
                  height={800}
               />
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}
      

      {step === 5 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'>Pregunta rápida</span>{' '}
          </p>
          <p> Si una persona se encuentra en la estación Tacuba y quiere llegar a San Antonio ¿En que dirección tiene que abordar el tren?</p> 
      
          <div className='flex justify-center mb-6 mt-6'>
              <Image src="/imgs/a5.jpg" 
                  alt='a5.png' 
                  width={850}
                  height={800}
               />
          </div>

          <div className="flex flex-col items-center mb-6">
                <select
                  className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option disabled value="">Seleccione una opción</option>
                  <option value="opcion1">San Joaquin</option>
                  <option value="opcion2">Tacuba</option>
                  <option value="opcion3">El rosario</option>
                  <option value="opcion_correcta">Barranca del muerto</option>
                </select>
                {message && <p className={`text-md text-bold mt-2 ${messageColor}`}>{message}</p>}
          </div>

          <div className="flex justify-center">
             
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button
              className={`mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg ${message=='¡Opción seleccionada correctamente!' ? '' : 'opacity-50 cursor-not-allowed' }`}
               onClick={handleNextStep}
              disabled={!selectedOption}
              >
             Siguiente
           </button>
          </div>
        </div>
        )}


      {step === 6 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'></span>
          </p>
          <p>En cada andén se encuentra un letrero, generalmente a la mitad de la estación,{' '}<span> que indica la dirección de cada tren.</span></p> 
      
          <div className='flex justify-center mb-6 mt-6'>
              <Image src="/imgs/a6-1.png" 
                  alt='a6.png' 
                  width={650}
                  height={450}
               />
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}


      {step === 7 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'>Transbordos</span>
          </p>
          <p className="font-medium flex flex-col">
              Un transbordo es una estación que tiene dos rutas o líneas que tienen diferentes{' '}
              <span>direcciones, en el mapa se representa cuando dos líneas se cruzan. En la</span>{' '}
              <span>iconografía se representa con la imagen de la estación dividida por dos colores.</span>{' '}
            </p>
      
          <div className='flex justify-center gap-8 mb-6 mt-6'>
              <Image src="/imgs/a7-1.png" 
                  alt='a6.png' 
                  width={250}
                  height={250}
               />
               <Image src="/imgs/a7-2.png" 
                  alt='a6.png' 
                  width={250}
                  height={250}
               />
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}


{step === 8 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'>Transbordos</span>
          </p>
          <p className="font-medium flex flex-col">
          En cada estación se encuentran letreros que indican los transbordos, también conocidos como correspondencias.{' '}
              <span> Basta con seguirlos hasta llegar a la estación de la otra línea. </span>{' '}
            </p>
      
          <div className='flex justify-center gap-8 mb-6 mt-6'>
              <Image src="/imgs/a8.png" 
                  alt='a6.png' 
                  width={550}
                  height={450}
               />
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}

{step === 9 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'>Ejemplo de transbordo</span>
          </p>
          <p className="font-medium flex flex-col">
          Si se quiere ir de la estación tlatelolco a insurgentes, la ruta a seguir sería:{' '}
              <span>  </span>{' '}
            </p>
        <div className="flex justify center align-items items-center">
          <div>
            <p>1. Abordar tren de linea 3 en direccion universidad</p>
            <p>2. Transbordar en balderas</p>
            <p>3. Abordar tren de linea 1 en direccion observatorio</p>
          </div>
          <div className='flex justify-center gap-8 mb-6 mt-6'>
              <Image src="/imgs/a9.png" 
                  alt='a6.png' 
                  width={250}
                  height={450}
               />
          </div>
          </div>
          <div className="flex justify-center">
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handleNextStep}>
              Siguiente
            </button>
          </div>
        </div>
        )}

{step === 10 && (
        <div className="flex flex-col items-center">
          <h2 className="mt-36 text-center font-bold text-3xl">Aprendizaje</h2>
          <p className="text-center text-lg mt-8 mb-2 whitespace-pre-wrap break-words">
              <span className='font-bold justify-start'>Pregunta rápida</span>{' '}
          </p>
          <p> Si una persona se encuentra en la estación Canal de San Juan y quiere llegar a Balbuena ¿Qué ruta debe tomar?</p> 
      
          <div className='flex justify-center mb-6 mt-6'>
              <Image src="/imgs/a11.png" 
                  alt='a5.png' 
                  width={350}
                  height={300}
               />
          </div>

          <div className="flex flex-col items-center mb-6">
                <select
                  className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option disabled value="">Selecciona una ruta</option>
                  <option value="opcion1">Abordar tren en direccion Pantitlán, transbordar a linea 5, direccion Politécnico</option>
                  <option value="opcion2">Abordar tren direccion la paz</option>
                  <option value="opcion_correcta">Abordar tren en direccion Pantitlán, transbordar a linea 1, direccion observatorio</option>
                  <option value="opcion_3">Abordar tren dirección pantitlan, transbordar a linea 9, direccion tacubaya</option>
                </select>
                {message && <p className={`text-md text-bold mt-2 ${messageColor}`}>{message}</p>}
          </div>

          <div className="flex justify-center mb-5">
             
            <button className="mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg" onClick={handlePrevStep}>
              Anterior
            </button>
            <button
              className={`mx-2 bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg ${message=='¡Opción seleccionada correctamente!' ? '' : 'opacity-50 cursor-not-allowed' }`}
               onClick={handleNextStep}
              disabled={!selectedOption}
              >
             Siguiente
           </button>
          </div>
        </div>
        )}


{step === 11 && (
        <div className="flex flex-col bg-[url('/imgs/a12.jpg')] bg-center bg-cover h-screen backdrop-blur-sm ">
          <h2 className="mt-36 text-center font-bold text-3xl text-white">Aprendizaje</h2>
          <p className="text-center text-3xl mt-8 mb-2 text-white whitespace-pre-wrap break-words">
              <span className='font-bold justify-start '>¡Felicidades!</span>
          </p>

        
          <p className="font-medium text-xl flex flex-col text-white align-items justify-center items-center">
          Haz finalizado el tutorial básico para utilizar el sistema de transporte colectivo "Metro" {' '}
              <span>Ya tienes los conocimientos necesarios para navegar a través de la red</span>{' '}
            </p>
        
          <div className="flex justify-center">
            
          </div>
        </div>
        )}


    </Layout>
  );
};

export default aprendizaje;