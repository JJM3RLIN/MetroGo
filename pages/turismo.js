import Layout from '../components/Layout'


const turismo = () => {
  return (
    <Layout titulo="Turismo">
        <main className="bg-[url('/imgs/turismo_fondo.jpg')] bg-center bg-cover h-screen">
        <section className=" bg-black bg-opacity-20 backdrop-blur-sm h-screen pt-14  flex flex-col items-center ">
          <h1 className="mt-36 text-center sombra_texto font-bold text-5xl text-white mb-6 ">Lugares Turisticos</h1>
          <form className="self-center">
          <p className="mt-6 sombra_texto text-white font-medium text-xl mb-4 flex flex-col">
              Filtrar estaciones turisticas por linea
            </p>
          <div className="flex justify-center">
          <select className='mx-auto block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500'>
            <option>Selecciona una linea</option>
          </select>
          </div>
          </form>
        </section>
        </main>
    </Layout>
  )
}

export default turismo