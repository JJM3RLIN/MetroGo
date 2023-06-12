import { useEffect, useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"

const informacion = () => {
  useEffect(() => {
    fetch('http://localhost:3001/tweets')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <Layout titulo={"Información"}>
      <main className="bg-[url('/imgs/fondoInfo2.jpg')] h-screen bg-no-repeat bg-cover bg-right">
         <div className="bg-black bg-opacity-20 h-screen backdrop-blur-sm flex flex-col items-center text-white  py-10">

         <h1 className="sombra_texto font-bold text-5xl text-white mt-40 mb-6">Informacion</h1>
          <p className="flex flex-col justify-center text-3xl mb-6 sombra_texto">Aquí podras encontrar el estado de las 12 líneas del metro, así como
            <span className="self-center">avisos de averías, retrasos y afluencia de personas</span>
          </p>
          <h2 className="font-bold text-4xl mb-4 sombra_texto">Avisos</h2>
          <section className="flex flex-col gap-10">
            
            <div className="bg-white p-6 rounded-xl">
              <p className="text-slate-950 text-lg">Debido a lluvia, el avance de los trenes es lento en las Líneas 3, 4, 6, 8, 9, A y B. Toma previsiones.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <p className="text-slate-950 text-lg">AvisoMetro: Se reanuda la circulación de los trenes en la Línea 5. Todas las estaciones se encuentran en servicio.</p>
            </div>
          </section>
         </div>
      </main>
    </Layout>
  )
}

export default informacion