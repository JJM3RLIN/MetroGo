import Layout from '../components/Layout'


const turismo = () => {
  return (
    <Layout titulo="Turismo">
        <main className="bg-[url('/imgs/turismo_fondo.jpg')] bg-center bg-cover h-screen">
        <section className=" bg-black bg-opacity-20 backdrop-blur-sm h-screen pt-14  flex flex-col items-center ">
          <h1 className="font-bold text-5xl text-white ">Lugares Turisticos</h1>
          <form className="self-center">
          <p className="text-white text-3xl">Filtrar estaciones turisticas por linea</p>
          <select>
            <option>Selecciona una linea</option>
          </select>
          </form>
        </section>
        </main>
    </Layout>
  )
}

export default turismo