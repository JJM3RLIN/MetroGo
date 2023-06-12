import { useState } from 'react'
import Layout from '../components/Layout'
import CardPunto from '../components/CardPunto'
import { nombreLineas, lineas } from '../lineas'

const turismo = () => {
  const [estaciones, setEstaciones] = useState([])
  const [estacion, setEstacion] = useState("")
  const [puntos, setPuntos] = useState([])
  const handleLinea = e =>{ 
    const est = lineas.filter(linea=> linea.nombre == e.target.value)[0].estaciones.map(estacion=>{return{nombre:estacion.nombre, latitud:estacion.latitud, longitud:estacion.longitud}})
    setEstaciones(est)
  }
  const handleSubmit =  (e) =>{
    e.preventDefault()
    //0 es nombre, 1 es latitud
    const valor_estacion = estacion.split("/")
    const latitud = Number(valor_estacion[1])
    const longitud = Number(valor_estacion[2])
    console.log(valor_estacion)
    console.log(estacion)
const apiKey = 'AIzaSyAlaWMi6VabGwQntHVKxNngi3HtQtp2AiQ';

// Parámetros de búsqueda
const query = ` atraccion turistica cerca del metro ${valor_estacion[0]}`;
const radius = 500; 
const type = "point_of_interest";


// Inicializar el mapa
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: latitud, lng: longitud }, // Coordenadas del Metro Chapultepec
    zoom: 15
  });
  let directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  // Crear el servicio de búsqueda de lugares
  const service = new google.maps.places.PlacesService(map);
      // Realizar la solicitud de búsqueda
      service.textSearch(
        {
          query: query,
          location: new google.maps.LatLng(latitud, longitud),
          radius: radius,
          type: type,
          limit: 5
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // Procesar y mostrar los resultados de los puntos turisticos
         const  turis =   results.map(place => {
                // Obtener la imagen del lugar
              return {
                nombre: place.name,
                direccion: place.formatted_address,
                cali: place.rating,
                icono: place.icon,
                latitud: place.geometry.location.lat(),
                longitud: place.geometry.location.lng()
              }
            });
            
            const limitado = turis.slice(0,10)
            // Iterar sobre los puntos turisticos y crear marcadores en el mapa
            limitado.forEach(punto_turistico => {
              // Crear un marcador para el punto turistico
              const marker = new google.maps.Marker({
                position: { lat: punto_turistico.latitud, lng: punto_turistico.longitud },
                map: map,
                title: punto_turistico.nombre
              });
            });
          setPuntos(limitado)
          } else {
            console.error('Error al realizar la búsqueda:', status);
          }
        }
      );
  
    
      }
  return (
    <Layout titulo="Turismo">
      <main className="bg-[url('/imgs/turismo_fondo.jpg')] bg-center  min-h-screen">
        <section className=" bg-black bg-opacity-20 backdrop-blur-sm pt-14 px-4 flex flex-col items-center min-h-screen">
          <h1 className="sombra_texto font-bold text-5xl text-white mt-40 mb-6">Lugares Turisticos</h1>
          <form className="self-center flex flex-col gap-3 mb-5" onSubmit={handleSubmit}>
          <p className="text-white text-4xl font-semibold text-center sombra_texto">Filtrar estaciones turisticas por linea</p>
          <select className="cursor-pointer bg-gray-200 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9"  onChange={handleLinea}>
            <option value="">---Selecciona una linea---</option>
            {
            nombreLineas.map(linea=>(
            <option value={linea}>{linea}</option>
            )
            )}
          </select>
          <select 
          className="cursor-pointer bg-gray-200 px-6 py-2 outline-none border rounded-xl text-2xl border-amber-300 my-9" 
          onChange={(e)=>setEstacion(e.target.value)}> 
            {
              estaciones.length == 0 ? (
                <option value="">Para ver las estaciones debes seleccionar una línea</option>
              ) :
              estaciones.map(estacion=>(<option value={`${estacion.nombre}/${estacion.latitud}/${estacion.longitud}`}>{estacion.nombre}</option>))
            }
          </select>
          <button 
           className="bg-amber-500  text-xl text-white font-bold px-14 py-3 rounded-2xl mt-8"
          tipo='submit'>Buscar</button>
          </form>
          <div className='grid grid-cols-5 gap-4'>
          {
            puntos.map(punto_turistico=>(
              <CardPunto punto_turistico={punto_turistico} />
            ))
          }
        </div>
        
        </section>
        <div id='map' className={`${puntos.length>0 ?'h-96 mt-3' : ''}`}></div>
        </main> 
    </Layout>
  )
}

export default turismo