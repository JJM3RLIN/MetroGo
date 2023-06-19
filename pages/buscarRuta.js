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
    <Layout titulo="Busca una ruta" tab={2}>
      <main className="grid grid-cols-2 place-content-center">
        
        <div className="bg-[url('/imgs/fondoRutas.png')] bg-no-repeat h-screen bg-cover bg-right"></div>
        <section className="mt-6 text-center flex flex-col items-center bg-slate-200">
          <h1 className="font-bold text-5xl mt-40 mb-6 text-transparent bg-gradient-to-r from-orange-600 to-amber-500  bg-clip-text">Rutas</h1>
         <div id="inicio" className="cursor-pointer bg-slate-50 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9"  onClick={desplegarLista}>
          <div id="lista_inicio" className="max-h-48 overflow-y-scroll">
               <p className="default">Selecciona la línea en donde se encuentra la estación</p>
          </div>
         </div>

          <div id="final" className="cursor-pointer bg-slate-50 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9"  onClick={desplegarLista}>
          <div id="lista_final" className="max-h-48 overflow-y-scroll">
               <p className="default">Selecciona la línea en donde se encuentra la estación</p>
          </div>
         </div>
         <button 
            className="bg-amber-500  text-xl text-white font-bold px-14 py-3 rounded-2xl mt-8"
            onClick={()=>Router.push(`/rutas/${ruta.inicio}-${ruta.destino}`)}
            type="button"
            >Generar ruta</button>
        </section>
      </main>
    </Layout>
  )
}

export default buscarRuta
