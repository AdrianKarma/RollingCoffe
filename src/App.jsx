
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FootCoffe from './components/common/FootCoffe'
import NavCoffee from './components/common/NavCoffee'
import Administrador from './components/pages/Administrador'
import Inicio from './components/pages/Inicio'
import Error404 from './components/pages/Error404';
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetalleProducto from './components/common/DetalleProducto';
import FormularioProducto from './components/common/FormularioProducto';

function App() {


  return (
   
    <BrowserRouter>
    <NavCoffee></NavCoffee>
    <Routes >
    <Route exact path='/' element={<Inicio></Inicio>}></Route>
    <Route exact path='administrador' element={<Administrador></Administrador>}></Route>
    <Route exact path='detalleProducto' element={<DetalleProducto></DetalleProducto>}></Route>
    <Route exact path='formularioProducto' element={<FormularioProducto></FormularioProducto>}></Route>
   
    <Route exact path='*' element={<Error404></Error404>}></Route>



    </Routes>
<FootCoffe></FootCoffe>
    </BrowserRouter>
    
  )
}

export default App
