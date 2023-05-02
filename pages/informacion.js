import Layout from "../components/Layout"

const informacion = () => {
  return (
    <Layout titulo={"Información"}>
      <main className="bg-[url('/imgs/fondoInfo2.jpg')] h-screen bg-no-repeat bg-cover bg-right">
         <div className="bg-black bg-opacity-20 h-screen backdrop-blur-sm flex flex-col items-center text-white sombra_texto py-10">

         <h1 className="bold font-bold text-6xl my-6">Informacion</h1>
          <p className="flex flex-col justify-center text-3xl mb-6">Aquí podras encontrar el estado de las 12 líneas del metro, así como
            <span className="self-center">avisos de averías, retrasos y afluencia de personas</span>
          </p>
          <div className="flex justify-evenly items-center gap-7 w-full">
          <section className="">
            <h2 className="font-bold text-3xl sombra_texto">Afluencia</h2>
            
          </section>
          <section>
            <h2 className="font-bold text-3xl sombra_texto">Avisos</h2>
          </section>
          </div>
         </div>
      </main>
    </Layout>
  )
}

export default informacion