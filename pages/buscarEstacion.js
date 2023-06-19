import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../components/Layout"
import { estaciones } from "../lineas"
const buscarEstacion = () => {
    const [miUbi, setMiUbi] = useState({lat:'', lng:''})
    const [estaCercanas, setEstaCercanas] = useState([])
    useEffect(()=>{
        //Obtener la latitud y longitud de la posición del usuario
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            let ubicacion = { lat: latitud, lng: longitud };
            setMiUbi(ubicacion)
          });
         
        
    }, [])
    useEffect(()=>{
      if(!Object.values(miUbi).includes('')){
         // Crear un mapa centrado en la ubicación actual
         let map = new google.maps.Map(document.getElementById('map'), {
          center: miUbi,
          zoom: 15
        });

        // Agregar un marcador en la ubicación actual
        let marker = new google.maps.Marker({
          position: miUbi,
          map: map,
          title: '¡Aquí estoy!'
        });

        let directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);

      // Crear el servicio de búsqueda de lugares
     const service = new google.maps.places.PlacesService(map);
      // Realizar la solicitud de búsqueda
      service.textSearch(
        {
          query: 'Estaciones del metro cercanas a mi',
          location: new google.maps.LatLng(miUbi.lat, miUbi.lng),
          radius: 100,
          type: "subway_station",
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
           const estacionesCercanas = results.map(ob=>{
            return {
              'nombre':ob.name,
              'latitud': ob.geometry.location.lat(),
              'longitud': ob.geometry.location.lng()
            } 
          }).slice(0,5)
          estacionesCercanas.forEach(estacion=>{
            //Marcador para las estaciones
            const marker = new google.maps.Marker({
              position: { lat: estacion.latitud, lng: estacion.longitud },
              map: map,
              title: estacion.nombre
            });
          })

          //Guardar las estaciones por su nombre
          const nombresEstaciones = estacionesCercanas.map(es=>es.nombre)
           setEstaCercanas(nombresEstaciones)
          } else {
            console.error('Error al realizar la búsqueda:', status);
          }
        }
      );

      }
    },[miUbi])
  return (
    <Layout titulo='Estaciones cercanas'>
      <main className="h-screen flex">
        <div className="w-2/5 flex flex-col items-center">
        <h1 className="mt-40 mb-10 font-bold text-4xl text-transparent bg-gradient-to-r from-orange-600 to-amber-500  bg-clip-text">Estaciones cercanas a ti</h1>
        {
          estaCercanas.map((es, i)=>{
            const index = estaciones.findIndex(esta=>esta.nombre==es)
            if(index != -1)
            return (
              <div className="mb-3 flex items-center flex-col" key={i} >
                <Image 
                src={estaciones[index].img}
                alt={`Metro ${es}`}
                width={105}
                height={105}
                />
                <p className="text-center font-medium text-xl ">{es}</p>
              </div>
            )
            else return
          })
        }
        </div>
        <div id="map" className="w-3/5 h-full"></div>
      </main>
    </Layout>
  )
}

export default buscarEstacion