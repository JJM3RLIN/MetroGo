import Layout from "../../components/Layout"
import Instruccion from "../../components/Instruccion";
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {estaciones} from "../../lineas";
const ruta = () => {

  //Guardar instrucciones
  const [instru, setIntru] = useState([])
  //obtener los query
  const router = useRouter()
  useEffect(()=>{
    const {id}= router.query
    const lineas = id.split("-")
   const { nombre:nom1} =  estaciones.filter(estacion=>estacion.nombre.toUpperCase() == lineas[0].toUpperCase())[0]
    const { nombre:nom2} =  estaciones.filter(estacion=>estacion.nombre.toUpperCase() == lineas[1].toUpperCase())[0]
   
    var mapOptions = {
      zoom: 8,
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
        origin: `Metro ${nom1}`,
        destination: `Metro ${nom2}`,
        travelMode: 'TRANSIT',
        transitOptions: {
          modes: ['SUBWAY'],
          
        }
      }
      directionsDisplay.setMap(map);
      servicioDireccion.route(conf, function(response, status) {
        const pasos = response.routes[0].legs[0].steps.map(ins=>ins.instructions)
        setIntru(pasos)
        directionsDisplay.setDirections(response);
       console.log(pasos);
      
      });

      
      
  }, [])
 
  return (
    <Layout>

      <section className="grid grid-cols-3">
      {instru.map((ins, index)=><Instruccion key={index} ins={ins}/>)}
      </section>
      <div className="h-96" id="map"></div>
    </Layout>
  )
}

export default ruta