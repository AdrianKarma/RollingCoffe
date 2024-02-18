import { Container,Table, Button, Image } from "react-bootstrap";
import coffeHeart from '../../assets/coffeHeart.png'


const ItemProducto = ({Producto}) => {
    return (
        
            <tr>
          <td className="align-middle">{Producto.id}</td>
          <td className="align-middle">{Producto.nombreProducto} </td>
          <td className="align-middle">
            {Producto.precio}
          </td>
          <td className="align-middle"><Image className="img-fluid imgTabla" src={Producto.imagen}></Image></td>
          <td className="align-middle">{Producto.categoria}</td>
          <td className="align-middle">
            <div className="d-flex justify-content-around">
          <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
            <Button variant="danger"><i className="bi bi-trash"></i></Button>
            </div>
          </td>
        </tr>       
        
    );
};

export default ItemProducto;