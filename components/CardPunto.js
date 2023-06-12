import Image from "next/image"
const CardPunto = ({punto_turistico}) => {
  console.log(punto_turistico)
  return (
    <div className="bg-white text-black p-2 rounded-2xl shadow-lg shadow-neutral-800 flex flex-col justify-center items-center">
      
    
          <Image src={punto_turistico.icono} alt={`Imagen-${punto_turistico.nombre}`} width={100} height={100}/>
    
      
        <p>{punto_turistico.nombre}</p>
        <p>{punto_turistico.cali}</p>
        <p>{punto_turistico.direccion}</p>
    </div>
  )
}

export default CardPunto