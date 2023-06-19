import { useEffect, useState } from "react"
import Image from "next/image";
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import Instruccion from "../../components/Instruccion";
import {estaciones, lineas} from "../../lineas";
const ruta = () => {

  //Guardar instrucciones
  const [instru, setIntru] = useState([])
  //rutas intermedias
  const [intermedias, setIntermedias] = useState([])
  const [lineasUsadas, setLineasUsadas] = useState([])
  //Seleccionadas por el usuario
  const [estacionInicial, setEstacionInical] = useState('')
  const [estacionFinal, setEstacionFinal] = useState('')
  //Duración del trayecto
  const [duracion, setDuracion] = useState('')
  //Estaciones por las ques se pasa en la ruta
  const [estacionesPaso, setEstacionesPaso] = useState([])
  //obtener los query
  const router = useRouter()
  useEffect(()=>{
    const {id}= router.query
    const lineas = id.split("-")
    //const { nombre:nom1} =  estaciones.filter(estacion=>estacion.nombre.toUpperCase() == lineas[0].toUpperCase())[0]
    //const { nombre:nom2} =  estaciones.filter(estacion=>estacion.nombre.toUpperCase() == lineas[1].toUpperCase())[0]
    setEstacionInical(lineas[0])
    setEstacionFinal(lineas[1])
    const solicitud_mapa = ()=>{
         
    var mapOptions = {
      zoom: 20,
      //center: myLatlng,
      mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
      //let inicio =new google.maps.LatLng(lati1, lon1);
      //let fin=new google.maps.LatLng(lati2, lon2);
      let servicioDireccion = new google.maps.DirectionsService();
      let directionsDisplay = new google.maps.DirectionsRenderer();
      let conf = {
        origin: `Metro ${lineas[0]}`,
        destination: `Metro ${lineas[1]}`,
        travelMode: 'TRANSIT',
        transitOptions: {
          modes: ['SUBWAY'],
          
        }
      }
      directionsDisplay.setMap(map);
      servicioDireccion.route(conf, function(response, status) {
        const pasos = response.routes[0].legs[0].steps.map(ins=>ins.instructions)
        //Modificar primer y ultimo paso
        pasos[0] = `Inicia tu viaje en Metro ${lineas[0]}` 
        pasos[pasos.length-1] = `Tu viaje termino en Metro ${lineas[1]}`
        setIntru(pasos)
        //Duración del viaje
        setDuracion(response.routes[0].legs[0].duration.text)
        //Lineas utilizadas
        const utilizadas = []
        const estacionesIntermedias = []
   
         response.routes[0].legs[0].steps.forEach(paso=>{
          //Verificando que tengan los atributos
            if(paso.hasOwnProperty('transit')){
              //Estaciones de inicio y fin entre cada linea, no cuenta con la ñ
              const inicial = paso.transit.departure_stop.name
              const final = paso.transit.arrival_stop.name
              estacionesIntermedias.push([inicial, final])
              //Obtener lineas que son utilizadas por la ruta trazada
              if(paso.transit.hasOwnProperty('line')){
                let linea = paso.transit.line.short_name
                //Verificar si la linea ya esta incluida, si no lo esta la agregamos
                if(!utilizadas.includes(linea)) utilizadas.push(`Línea ${linea}`)
              }
            }
        })
        setIntermedias(estacionesIntermedias)
        setLineasUsadas(utilizadas)
        directionsDisplay.setDirections(response);
        
      });
     
      
    }
    solicitud_mapa()
      
  }, [])

  //Ejecutarse ya cuando tengamos las lineas que se usan
  useEffect(()=>{
    if(lineasUsadas.length>0){
      buscar_lineas_usadas()
    }
  }, [lineasUsadas])

 const buscar_lineas_usadas = ()=>{
  //Arreglo finald de las estaciones usadas
  const usadasFinal = []
  //Lineas con sus estaciones
  const  usadas_usuario = lineas.filter(linea=>lineasUsadas.join().includes(linea.nombre))
  //Obtener estaciones intermedias entre la inicial y final de cada linea
  //LineasUsadas tiene el orden en el que fueron utilizadas
  lineasUsadas.forEach((linea,i)=>{
    //Obtener el indice de la linea usada d forma ordenada
   const index = usadas_usuario.findIndex(usada=>usada.nombre==linea)
   //Obtener solo el nombre de las estaciones
   const estacionesNombres = usadas_usuario[index].estaciones.map(estacion=>estacion.nombre)
 
   //Esto se hace para agregar la inicial y final que selecciono el usuario y evitar el error de la ñ
   if(i==0){
    intermedias[i][0] = estacionInicial
   }else if(i == estacionesNombres.length-1){
    intermedias[i][1]= estacionFinal
   }
   const inicial = estacionesNombres.findIndex(es=>es == intermedias[i][0])
   const final = estacionesNombres.findIndex(es=>es == intermedias[i][1])
   
    //Por la forma en que esta colocadas en el arreglo de lineas.js[panti,...,los reyes] y primero es los reyes, entonces invertir
    let estacionesUsadas = []
    if(inicial > final){
      //Obtener solo las que son usadas
     estacionesUsadas = estacionesNombres.slice(final, inicial+1)
     estacionesUsadas.reverse()
    }else{
     estacionesUsadas = estacionesNombres.slice(inicial, final+1)
    } 
    //Agregarlos al arreglo de las utilizadas
    usadasFinal.push(...estacionesUsadas)
  })
 
  //Elimar repetidos con set
  setEstacionesPaso([...new Set(usadasFinal)])
 }
  return (
    <Layout titulo='Ruta trazada' tab={2}>

      <main className="flex items-center mt-48 align-items justify-center">
        <div className="grid grid-cols-2 gap-10 mb-1">
          <div className="flex flex-col">
        <section>
        <h1 className="font-bold my-5 text-center text-4xl text-transparent bg-gradient-to-r from-orange-600 to-amber-500  bg-clip-text">Indicaciones</h1>
          <p className="text-xl mb-3 flex items-center justify-center">Duración estimada para el viaje: <span className="font-bold text-amber-500">{duracion}</span></p>
          {instru.map((ins, index)=><Instruccion key={index} ins={ins}/>)}
        </section>
          
          <section>
          <h2 className="font-bold text-3xl text-center mb-3 my-5 text-transparent bg-gradient-to-r from-orange-600 to-amber-500  bg-clip-text">Estaciones por las que vas a pasar</h2>
          <section className="flex flex-row gap-3  overflow-x-scroll scrollbar-hidden w-[50rem] snap-x self-center">
          {
            estacionesPaso.map((e,i)=>{
              const indexImagen = estaciones.findIndex(es=>es.nombre==e)
              console.log(estaciones[indexImagen])
            return(
              <Image 
              key={i} 
              src={estaciones[indexImagen].img}
              alt={`Imagen-${e}`}
              width={100}
              height={100}
              className="snap-center"
              />
            )
          })
          }
          </section>

          </section>
          </div>
          <section>
          <h2 className="font-bold text-4xl mb-3 text-center my-5 text-transparent bg-gradient-to-r from-orange-600 to-amber-500  bg-clip-text">Ruta a seguir</h2>
          <div id="map"className="h-full"></div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default ruta