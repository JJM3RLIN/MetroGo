import Link from "next/link"
import Image from "next/image"
const Navegacion = ({tab}) => {
  return (
    <div className="absolute w-full top-0 bg-gradient-to-b from-slate-300 to-transparent h-40 z-50">
      <nav className="relative mx-14 grid grid-cols-7 px-11 py-1 items-center">
        <div className="self-center">
        <Link href={"/"}>
        <div className="flex">
        <Image 
          alt="Logo App"
          src="/imgs/metroLogo.png"
          width={100}
          height={35}
          />
          <p className="self-end font-bold text-2xl">Go!</p>
      </div>
      </Link>
        </div>
       
            <Link href="/mapa">
            <div className={`flex flex-col items-center text-neutral-950 activo-link_hover ${tab==1 ? 'activo-link': ''}`}>
                <Image 
                  src="/imgs/iconoMapa.svg"
                  alt="icono-mapa"
                  width={69}
                  height={15}
                />
                <p className="font-semibold">Mapa</p>
            </div>
            </Link>
            
            <Link href="/buscarRuta">
            <div className={`flex flex-col items-center activo-link_hover text-neutral-950 ${tab==2 ? 'activo-link': ''}`}>
                <Image
                  src="/imgs/iconoRutas.svg"
                  alt="icono-rutas"
                  width={69}
                  height={15}
                
                />
                <p className="font-semibold">Rutas</p>
            </div>
            </Link>

            <Link href="/accesibilidad">
            <div className={`flex flex-col items-center text-neutral-950 activo-link_hover ${tab==3 ? 'activo-link': ''}`}>
                <Image
                  src="/imgs/iconoAccesi.svg"
                  alt="icono-accesibilidad"
                  width={69}
                  height={15}
                
                />
                <p className="font-semibold">Accesibilidad</p>
            </div>
            </Link>

            <Link href="/turismo">
            <div className={`flex flex-col items-center text-neutral-950 activo-link_hover ${tab==4 ? 'activo-link': ''}`}>
                <Image
                  src="/imgs/iconoTurismoBlack2.svg"
                  alt="icono-turismo"
                  className=""
                  width={70}
                  height={15}
                
                />
                <p className="font-semibold">Turismo</p>
            </div>
            </Link>

            <Link href="/aprendizaje">
            <div className={`flex flex-col items-center text-neutral-950 activo-link_hover ${tab==5 ? 'activo-link': ''}`}>
                <Image
                  src="/imgs/iconoLearn.svg"
                  alt="icono-aprendizaje"
                  className="hover:text-amber-500"
                  width={69}
                  height={15}
                
                />
                <p className="font-semibold">Aprendizaje</p>
            </div>
            </Link>

            <Link href="/informacion">
            <div className={`flex flex-col items-center text-neutral-950 activo-link_hover ${tab==6 ? 'activo-link': ''}`}>
                  <Image
                  src="/imgs/iconoInfo.svg"
                  alt="icono-información"
                  width={69}
                  height={15}
                  
                  />
                  <p className="font-semibold">Información</p>
              </div>
            </Link>

        
      </nav>
    </div>
  )
}

export default Navegacion