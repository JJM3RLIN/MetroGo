import Layout from "../components/Layout"

const accesibilidad = () => {
  return (
    <Layout titulo={"Accesibilidad"}>
        <main className="bg-[url('/imgs/fondoAcces.png')] h-screen">
        <section className=" bg-black bg-opacity-20 backdrop-blur-sm h-screen pt-14  flex flex-col items-center ">
          <h1 className="font-bold text-5xl text-white ">Accesibilidad</h1>
          <form className="self-center">
          <p className="sombra_texto text-white text-3xl">Filtrar elvadores por linea</p>
          <select>
            <option>Selecciona una linea</option>
          </select>
          </form>
        </section>
        </main>
    </Layout>
  )
}

export default accesibilidad