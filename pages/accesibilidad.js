import { use, useState } from "react"
import Layout from "../components/Layout"
import { nombreLineas, elevadores } from "ets/lineas"
const accesibilidad = () => {
  const [elev, setElev] = useState([])
  const [mensaje, setMensaje] = useState(false)
  const handle_elevador = e =>{
   
    if(e.target.value == 4){
      setMensaje(!mensaje)
      return   
    }
  if(mensaje == true) setMensaje(!mensaje)
   const lineaElevador = elevadores[e.target.value.trim()]
   setElev(lineaElevador)
  }
  return (
    <Layout titulo={"Accesibilidad"}>
        <main className="bg-[url('/imgs/fondoAcces.png')] min-h-screen">
        <section className=" bg-black bg-opacity-20 backdrop-blur-sm min-h-screen pt-14 pb-10  flex flex-col items-center ">
          <h1 className="font-bold text-5xl text-white mt-16 mb-9">Accesibilidad</h1>
          <form className="self-center">
          <p className="sombra_texto text-white text-3xl">Filtrar elvadores por linea</p>
          <select 
          name="elevadores"
          onChange={handle_elevador}
          className="cursor-pointer bg-gray-200 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9">
            <option>Selecciona una linea</option>
            {
              nombreLineas.map(linea=>(
                <option value={linea.replace("Línea", "")}>{linea}</option>
              ))
            }
          </select>
          </form>
          {
            mensaje ?
            (
              <p className="sombra_texto text-white text-3xl font-bold">En esta línea no hay elevadores</p>
            )
            :
            elev.length > 0 && (
              <table className="w-4/5 overflow-y-scroll max-h-16">
              <thead className="bg-amber-500">
                <tr className="text-white text-center">
                <th className="py-4 text-xl">Estación</th>
                <th className="py-4 text-xl">Dirección</th>
                <th className="py-4 text-xl">Lugar</th>
                </tr>
              </thead>
              <tbody>
              {
                elev.map(e=>(
                  <tr className="bg-slate-50 hover:bg-slate-100 text-center border-slate-300 border-b">
                    <td className="py-4 text-xl">{e.direccion}</td> 
                    <td className="py-4 text-xl">{e.estacion}</td> 
                    <td className="py-4 text-xl">{e.lugar}</td> 
                  </tr>
                ))
              }
              </tbody>
            
            </table>
            )
          }
        </section>
        </main>
    </Layout>
  )
}

export default accesibilidad