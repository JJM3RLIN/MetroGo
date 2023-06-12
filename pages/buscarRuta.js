import Layout from "../components/Layout"
import { useState } from "react";
import Router from "next/router";
import { nombreLineas, lineas } from "../lineas";
const buscarRuta = () => {
  const [ruta, setRuta] = useState({inicio:"", destino: ""})
 
  const desplegarLista = e =>{
     
    const padre = document.querySelector(`#${e.target.parentElement.id != '' ? e.target.parentElement.id : e.target.firstChild.id}`)
    //Limpiar div pq se quiere cerrar la lista
    if (e.target.parentElement.childNodes.length > 1 && !e.target.textContent.includes("Línea")) {
      padre.innerHTML = "<p>Selecciona la línea en donde se encuentra la estación</p>"
      return
    }
    
    if(e.target.parentElement.childNodes.length <= 1){
       //Primer click para ver la lista
    nombreLineas.forEach(linea=>{
      const  option = document.createElement('P');
      option.textContent = linea
      //para saber si es inicio o destino
      option.onmouseover = ()=> mostrarLinea(linea, padre)

      padre.appendChild(option)
    })
    }
   
  }
  //option
  const mostrarLinea = (linea, padre) =>{
    //si se le da click a una nueva linea eliminar la lista anterior
    if(document.querySelector(".contenedor-estacion")){
      document.querySelector(".contenedor-estacion").remove()
    }
    //encontramos la linea a la que le dimos click y mapeamos sus estaciones
   const estaciones = lineas.filter(line=>line.nombre == linea)[0].estaciones.map(estacion=>estacion.nombre)
   const contenedor = document.createElement("DIV")
   contenedor.className = "contenedor-estacion"
   estaciones.forEach(estacion=>{
    const item = document.createElement("P")
    item.textContent = estacion
    item.className = padre.id == "lista_inicio"? "inicio" : "final"
    item.onclick = ()=>{
      if(item.className == "inicio") {
        setRuta({...ruta, inicio:estacion})
        padre.textContent = estacion
      }
      else {
        setRuta({...ruta, destino:estacion})
        padre.textContent = estacion
      }
    }
    contenedor.appendChild(item)
   })
   padre.appendChild(contenedor)
  }
  return (
    <Layout titulo="Busca una ruta">
      <main className="grid grid-cols-2 place-content-center">
        
        <div className="bg-[url('/imgs/fondoRutas.png')] bg-no-repeat h-screen bg-cover bg-right"></div>
<<<<<<< HEAD
        <section className="mt-6 text-center flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-10 mt-52">Rutas</h1>
         <div id="inicio" className="cursor-pointer bg-slate-50 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9"  onClick={desplegarLista}>
          <div id="lista_inicio" className="max-h-48 overflow-y-scroll">
               <p className="default">Selecciona la línea en donde se encuentra la estación</p>
=======
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
>>>>>>> 702e906712a463b05f6ba1c487b0db47d766aefc
          </div>
         </div>

<<<<<<< HEAD
          <div id="final" className="cursor-pointer bg-slate-50 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9"  onClick={desplegarLista}>
          <div id="lista_final" className="max-h-48 overflow-y-scroll">
               <p className="default">Selecciona la línea en donde se encuentra la estación</p>
          </div>
         </div>
         <button 
            className="bg-amber-500  text-xl text-white font-bold px-14 py-3 rounded-2xl mt-8"
=======
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
>>>>>>> 702e906712a463b05f6ba1c487b0db47d766aefc
            onClick={()=>Router.push(`/rutas/${ruta.inicio}-${ruta.destino}`)}
            type="button"
            >Generar ruta</button>
        </section>
      </main>
    </Layout>
  )
}

export default buscarRuta
