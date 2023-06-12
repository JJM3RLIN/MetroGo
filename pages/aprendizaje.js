import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image'
const Aprendizaje = () => {
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

  return (
    <Layout titulo="Aprendizaje">
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
      

    </Layout>
  );
};

export default Aprendizaje;
