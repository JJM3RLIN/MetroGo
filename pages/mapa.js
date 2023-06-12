import Layout from '../components/Layout'
import Image from 'next/image'

const mapa = () => {
  return (
    <Layout titulo={"Mapa"}>
        <main className='flex flex-col items-center mt-36'>
<<<<<<< HEAD
        <h1 className='font-bold text-3xl mt-16 mb-9'>Mapa de la red</h1>
=======
        <h1 className='font-bold text-3xl'>Mapa de la red</h1>
>>>>>>> 702e906712a463b05f6ba1c487b0db47d766aefc

        <Image src="/imgs/plano-red-metro-cdmx.jpg" 
               alt='red-metro' 
               width={650}
               height={600}
               />
        </main>
    </Layout>
  )
}

export default mapa