import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout titulo={"Inicio"} tab={0}>
     <main className='bg-slate-50'>
     <section className="h-full bg-center bg-no-repeat bg-cover flex items-center justify-center">
            <div className='flex flex-col items-center justify-center bg-black w-full top-0 bg-opacity-5 absolute h-full'>
              <h1 className='text-transparent font-bold text-8xl my-4  uppercase separacion_letras bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text'>Metro Go!</h1>
              <p className='text-transparent text-3xl font-semibold bg-gradient-to-r from-orange-400 to-amber-300  bg-clip-text'>La aplicación que todo usuario del metro necesita</p>
            </div>
            <video autoPlay muted loop className='w-full'>
              <source src='/video/video_header.mp4' type='video/mp4' />
            </video>
     </section>

     {
      //2 columnas para info
     }

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
     <h2 className='text-slate-100 font-bold text-4xl mb-4 sombra_texto'>Aprende a utilizar el metro</h2>
     <Link href="aprendizaje">
      <button type='button' className='bg-amber-500 px-3 py-1 rounded-lg shadow-lg shadow-neutral-800'>
      <p className='text-white text-lg font-bold'>Aprender</p>
      </button>
      </Link>
     </div>
     </section>

    </section>
    {
      //Gráfico
    }
    <section className='w-full bg-[url("/imgs/metro_grafico.jpg")] bg-no-repeat bg-right-bottom bg-fixed bg-cover h-80'>
      <div className='w-full bg-black bg-opacity-20 h-full flex items-center flex-col justify-center'>
      <h2 className='text-white font-bold text-5xl sombra_texto mb-9'>¿Estas perdido?, Busca las estaciones cercanas a ti</h2>
      <Link href='buscarEstacion'>
      <button type='button' className='bg-amber-500  hover:bg-amber-600 px-10 py-1 rounded-lg shadow-lg shadow-neutral-800'>
      <p className='text-white text-xl font-bold'>Buscar</p>
      </button>
      </Link>
      </div>
    </section>

    {
      //Cards
    }

    <section className='m-5 px-3'>

      <h2 className='font-bold text-4xl text-center m-9'>Una app para aprender, conocer y saber transbordar en el metro de la CDMX</h2>
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
     <footer className='flex flex-col items-center py-10 bg-gradient-to-r from-orange-600 to-amber-500'>
      <h1 className='text-4xl text-white sombra_texto font-semibold'>MetroGO!</h1>
      <div className='m-28 text-white justify-center items-center text-center mt-9 mb-9'>
      <p>© 2023 MetroGO! Todos los derechos reservados. Prohibida la reproducción total o parcial de cualquier contenido de esta página web sin autorización expresa por escrito de MetroGO!. Todas las marcas comerciales, logotipos y nombres de productos mencionados son propiedad de sus respectivos propietarios.</p>
      
      <div className='flex justify-center gap-10 items-center mt-10 '>
      <Link href="https://www.facebook.com/MetroCDMX?mibextid=ZbWKwL" target='_blank'>
      <div className="rounded-2xl hover:opacity-70 transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/facebook.png" 
          alt='icono-maquinas' 
          width={40} height={40} 
          className=''
          />
        </div>
      </Link>

      <Link href="https://twitter.com/MetroCDMX?t=DH6_0CZYkKSO6vxdnZKyVA&s=09" target='_blank'>
      <div className="rounded-2xl hover:opacity-70 transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/twitter.png" 
          alt='icono-maquinas' 
          width={40} height={40} 
          className=''
          />
        </div>
      </Link>

      <Link href="https://instagram.com/metrocdmx?igshid=YmM0MjE2YWMzOA==" target='_blank'>
      <div className="rounded-2xl hover:opacity-70 transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/insta.png" 
          alt='icono-maquinas' 
          width={40} height={40} 
          className=''
          />
        </div>
      </Link>

      <Link href="https://youtube.com/@Metro_CDMX" target='_blank'>
      <div className="rounded-2xl hover:opacity-70 transition-all ease-in-outn duration-500">
          <Image 
          src="/imgs/youtube.png" 
          alt='icono-maquinas' 
          width={40} height={40} 
          className=''
          />
        </div>
      </Link>


      </div>


      </div>
     </footer>
    </Layout>
  )
}
