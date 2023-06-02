import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout titulo={"Inicio"}>
     <main className='bg-slate-50'>
     <section className="h-full bg-center bg-no-repeat bg-cover flex items-center justify-center">
            <div className='flex flex-col items-center justify-center bg-black w-full top-0 bg-opacity-5 absolute h-full'>
              <h1 className='text-white font-bold text-6xl my-4 sombra_texto uppercase separacion_letras'>Metro Go!</h1>
              <p className='text-white text-3xl sombra_texto'>La aplicación que todo usuario del metro necesita</p>
            </div>
            <video autoPlay muted loop className='w-full'>
              <source src='/video/video_header.mp4' type='video/mp4' />
            </video>
     </section>

    <section className='grid grid-cols-2 h-[40rem]'>
    <section className="bg-[url('/imgs/rutasFondo.jpg')] h-full bg-contain bg-no-repeat bg-fixed flex items-center justify-center">
     <div className='flex flex-col items-center justify-end bg-black w-full bg-opacity-40 hover:bg-opacity-50 transition-all ease-in-outn duration-500 h-full pb-14'>
     <h1 className='text-slate-100 font-bold text-4xl mb-4 sombra_texto'>Crea tus rutas</h1>
     <Link href="buscarRuta">
      <button type='button' className='bg-amber-500 px-3 py-1 rounded-lg shadow-lg shadow-neutral-800'>
      <p className='text-white text-lg font-bold'>Ver rutas</p>
      </button>
      </Link>
     </div>
     </section>

     <section className="bg-[url('/imgs/fondoAprender.webp')] h-full  bg-fixed bg-cover bg-no-repeat flex items-center justify-center w-full">
     <div className='flex flex-col items-center justify-end bg-black w-full bg-opacity-30 hover:bg-opacity-25 transition-all ease-in-outn duration-500  h-full pb-14'>
     <h1 className='text-slate-100 font-bold text-4xl mb-4 sombra_texto'>Aprende a utilizar el metro</h1>
     <Link href="aprendizaje">
      <button type='button' className='bg-amber-500 px-3 py-1 rounded-lg shadow-lg shadow-neutral-800'>
      <p className='text-white text-lg font-bold'>Aprender</p>
      </button>
      </Link>
     </div>
     </section>

    </section>

    <section className='m-5 px-3'>
      <h1 className='font-bold text-4xl text-center m-9'>Una app para aprender, conocer y saber transbordar en el metro de la CDMX</h1>
      <div className='grid grid-cols-3 mt-5'>
        <div className='w-auto flex flex-col items-center'>
        <Link href="https://www.metro.cdmx.gob.mx/boletos-de-aniversario" target='_blank'>
        <div className="bg-amber-500 rounded-2xl p-3 overflow-hidden flex justify-center hover:translate-y-[-20px] transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/boletosCon.jpeg" 
          alt='icono-maquinas' 
          width={350} height={80} 
          className=''
          />
          </div>
        </Link>
          <p className='text-xl text-center'>Checa todos los boletos conmemorativos que han existido</p>
        </div>
        <div className='w-auto flex flex-col items-center'>
          <Link href="https://www.metro.cdmx.gob.mx/tramites-y-servicios/servicios/manual-usuario" target='_blank'>
          <div className="bg-amber-500 rounded-2xl p-3 overflow-hidden  flex justify-center hover:translate-y-[-20px] transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/manual_usuario.jpeg" 
          alt='icono-maquinas' 
          width={350} height={80} 
          className=''
          />
          </div>
          </Link>
          <p className='text-xl text-center'>Aprende sobre el manual del buen usuario</p>
        </div>
    
        <div className='w-auto flex flex-col items-center'>
        <Link href="https://metro.cdmx.gob.mx/storage/app/media/Banners/maquinas_exp2.pdf" target='_blank'>
        <div className="bg-amber-500 rounded-2xl p-3 overflow-hidden flex justify-center hover:translate-y-[-20px] transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/maquinas.jpeg" 
          alt='icono-maquinas' 
          width={350} height={80} 
          className=''
          />
          </div>
        </Link>
          <p className='text-xl text-center'>Encontrar maquinas para recargar tu tarjeta</p>
        </div>

      </div>
    </section>
     </main>
     <footer>
      <h1>derechos reservados</h1>
      <p>a todo nuestro equipo</p>
     </footer>
    </Layout>
  )
}
