import Layout from "../components/Layout"
const aprendizaje = () => {
  return (
    <Layout titulo={"Aprendizaje"}>
       <main className="bg-[url('/imgs/planoFondo.jpg')] bg-center bg-cover h-screen">
        <section className=" bg-black bg-opacity-20 backdrop-blur-sm h-screen pt-14  flex flex-col items-center ">
          <h1 className="font-bold text-5xl text-white mt-16 mb-9">Aprendizaje</h1>
          <p className="sombra_texto text-white font-medium text-xl mb-16 flex flex-col">Bienvenido a la sección de aprendizaje, aquí podrás aprender a 
            <span>moverte a través de la red del metro de una forma divertida</span>
          </p>
          <butto className="bg-amber-500 text-white font-bold text-xl px-10 py-2 rounded-lg">Comenzar</butto>
        </section>
        </main>
    </Layout>
  )
}

export default aprendizaje