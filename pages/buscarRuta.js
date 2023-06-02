import Layout from "../components/Layout"
import { useState } from "react";
import Router from "next/router";
const buscarRuta = () => {
  const [ruta, setRuta] = useState({inicio:"", destino: ""})
  const handleSubmit = e =>{
    e.preventDefault();
    //Validar
    if(Object.values(ruta).includes("")) console.log("Todos los campos son obligatorios")
  }
  return (
    <Layout titulo={"Busca una ruta"}>
      <main className="grid grid-cols-2 place-content-center ">
        <div className="bg-[url('/imgs/fondoRutas.png')] bg-no-repeat h-screen bg-cover bg-right"></div>
        <section className="mt-32 text-center">
          <h1 className="font-bold text-4xl mb-10">Rutas</h1>
          <form onSubmit={handleSubmit}>

          <div className="flex flex-col items-center justify-center mb-8">
            <label htmlFor="inicio" className="text-2xl mb-6">¿En qué estación te encuentras?</label>
            <input 
            type="text"
            id="inicio" 
            onChange={(e)=>setRuta({...ruta, inicio: e.target.value})}
            className="bg-gray-200 px-2 py-4 w-3/4 outline-none border rounded-xl text-xl focus:border-amber-500"
            placeholder="Ejemplo: Politécnico"/>
          </div>

          <div className="flex flex-col items-center justify-center mb-8">
            <label htmlFor="" className="text-2xl mb-6">¿A qué estación te diriges?</label>
            <input 
            type="text" 
            onChange={(e)=>setRuta({...ruta, destino: e.target.value})}
            className="bg-gray-200 px-2 py-4 w-3/4 outline-none border rounded-xl text-xl focus:border-amber-500"
            placeholder="Ejemplo: Deportivo Oceania"/>
          </div>
            <button 
            className="bg-amber-500 text-xl shadow-2xl text-white font-bold px-14 py-3 rounded-2xl mt-8"
            onClick={()=>Router.push(`/rutas/${ruta.inicio}-${ruta.destino}`)}
            type="submit"
            >Generar ruta</button>
          </form>
        </section>
      </main>
    </Layout>
  )
}

export default buscarRuta
