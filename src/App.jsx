
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FootCoffe from './components/common/FootCoffe'
import NavCoffee from './components/common/NavCoffee'
import Administrador from './components/pages/Administrador'
import Inicio from './components/pages/Inicio'

function App() {


  return (
    <>
    <NavCoffee></NavCoffee>
    <Inicio></Inicio>
  {/*  <Administrador></Administrador>*/}
    <FootCoffe></FootCoffe>
    </>
  )
}

export default App
