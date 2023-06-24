import Head from "next/head"
import Navegacion from "./Navegacion"
const Layout = ({titulo, tab ,children}) => {
  return (
    <>
        <Head>
            <title>MetroGo | {titulo}</title>
            <meta name="description" content="This web is gonna show you how to be in the mexican subway"  />
            <meta name="author" content="Equipo desarrollo MetroGo"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&display=swap" rel="stylesheet"/>
        </Head>
          <header>
            <Navegacion tab={tab} />
          </header>
      
            {children}
      <script src="key del mapa"></script>
    </>
  )
}

export default Layout