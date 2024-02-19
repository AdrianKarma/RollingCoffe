import { Container } from "react-bootstrap";
import CardProdcuto from "./CardProdcuto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const ListProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect( ()=>{
      traerProductos();
  
    },[] )
  
  const traerProductos = async()=>{
  try{
   const listaProductosAPI = await leerProductosAPI();
   setProductos(listaProductosAPI);
  
  }
  catch(error){
    console.log(error)
  }
  
  }

    return (
        <Container fluid className="my-4 d-flex flex-wrap ">
        {
           productos.map((Producto)=> <CardProdcuto key={Producto.id} Producto={Producto} ></CardProdcuto>)
        }
        </Container>
    );
};

export default ListProductos;