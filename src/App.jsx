
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FootCoffe from './components/common/FootCoffe'
import NavCoffee from './components/common/NavCoffee'
import Administrador from './components/pages/Administrador'
import Inicio from './components/pages/Inicio'
import Error404 from './components/pages/Error404';

function App() {


  return (
    <>
    <section className='principal'>
    <article className='nuevoMain'>
    <NavCoffee></NavCoffee>
   {/*  <Inicio></Inicio>*/}
    <Error404></Error404>
  {/*  <Administrador></Administrador>*/}
  </article>
    <FootCoffe></FootCoffe>
    </section>


    </>
    
  )
}

export default App
