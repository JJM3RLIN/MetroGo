import Head from "next/head"
import Navegacion from "./Navegacion"
const Layout = ({titulo, children}) => {
  return (
    <>
        <Head>
            <title>MetroGo | {titulo}</title>
            <meta name="description" content="This web´s gonna show you how to be in the mexican subway"  />
            <meta name="author" content="Equipo desarrollo MetroGo"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;900&display=swap" rel="stylesheet"/>
        </Head>
          <header>
            <Navegacion />
          </header>
      
            {children}
<<<<<<< HEAD
      <script src="http://maps.google.com/maps/api/js?key=&sensor=false&language=es&libraries=places"></script>
=======
      <script src="http://maps.google.com/maps/api/js?key=AIzaSyAlaWMi6VabGwQntHVKxNngi3HtQtp2AiQ&sensor=false&language=es"></script>
>>>>>>> 702e906712a463b05f6ba1c487b0db47d766aefc
    </>
  )
}

export default Layout