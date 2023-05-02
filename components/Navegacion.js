import Link from "next/link"
import Image from "next/image"
const Navegacion = () => {
  return (
    <div className=" bg-gradient-to-b from-slate-100  to-transparent">
      <nav className="mx-14 grid grid-cols-7  px-11 py-2 items-center ">
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
            <div className="flex flex-col items-center text-neutral-950 hover:text-amber-500">
                <Image
                  src="/imgs/iconoMapa.svg"
                  alt="icono-mapa"
                  width={60}
                  height={15}
                
                />
                <p>Mapa</p>
            </div>
            </Link>
            
            <Link href="/buscarRuta">
            <div className="flex flex-col items-center text-neutral-950 hover:text-amber-500">
                <Image
                  src="/imgs/iconoRutas.svg"
                  alt="icono-rutas"
                  width={60}
                  height={15}
                
                />
                <p>Rutas</p>
            </div>
            </Link>

            <Link href="/accesibilidad">
            <div className="flex flex-col items-center text-neutral-950 hover:text-amber-500">
                <Image
                  src="/imgs/iconoAccesi.svg"
                  alt="icono-accesibilidad"
                  width={60}
                  height={15}
                
                />
                <p>Accesibilidad</p>
            </div>
            </Link>

            <Link href="/turismo">
            <div className="flex flex-col items-center text-neutral-950 hover:text-amber-500">
                <Image
                  src="/imgs/iconoTurismo.webp"
                  alt="icono-turismo"
                  className="dark:invert"
                  width={100}
                  height={15}
                
                />
                <p>Turismo</p>
            </div>
            </Link>

            <Link href="/aprendizaje">
            <div className="flex flex-col items-center text-neutral-950 hover:text-amber-500">
                <Image
                  src="/imgs/iconoLearn.svg"
                  alt="icono-aprendizaje"
                  className="hover:text-amber-500"
                  width={60}
                  height={15}
                
                />
                <p>Aprendizaje</p>
            </div>
            </Link>

            <Link href="/informacion">
            <div className="flex flex-col items-center text-neutral-950 hover:text-amber-500">
                  <Image
                  src="/imgs/iconoInfo.svg"
                  alt="icono-información"
                  width={60}
                  height={15}
                  
                  />
                  <p>Información</p>
              </div>
            </Link>

        
      </nav>
    </div>
  )
}

export default Navegacion