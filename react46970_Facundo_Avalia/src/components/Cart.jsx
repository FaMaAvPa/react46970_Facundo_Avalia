import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"


const Cart = () =>{
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext)

    if(CantTotalProductos() == 0){
        return(
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col my-5">
                        <div className="alert alert-danger my-5" role="alert">No tienes productos en el carrito!</div>
                        <div className="col text-center">
                            <Link to={"/productos"} className="btn btn-success my-5">Volver a la tienda</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container ">
            <div className="row">
                <div className="col text-center">
                    <h2 className="fs-1 text-light">Productos en el carrito:</h2>
                </div>
            </div>
            <div className="row bg-dark">
                <div className="col text-center">
                    <table className="table">
                        <tbody className="">
                            <tr className="my-5 ">
                                <td className="bg-dark text-light fs-5 align-middle text-end" colSpan={6}>
                                    <a href="#" className="btn btn-outline-danger" onClick={clear}>Vaciar carrito
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                            {
                                cart.map(product =>
                                    <tr key={product.id} className="">
                                        <td className="bg-dark text-info fs-5 align-middle"><img src={product.imagen} alt={product.titulo} style={{width: 50}}/></td>
                                        <td className="bg-dark text-info fs-5 align-middle text-start">{product.titulo}</td>
                                        <td className="bg-dark text-info fs-5 align-middle">${product.precio}</td>
                                        <td className="bg-dark text-info fs-5 align-middle">Cantidad: {product.quantity}</td>
                                        <td className="bg-dark text-info fs-5 align-middle">${product.quantity * product.precio}</td>
                                        <td className="bg-dark text-info fs-5 align-middle text-end"><button type="button" className="btn btn-outline-danger" title="Eliminar producto" onClick={() =>       {removeItem(product.id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
</svg>
              </button></td>
                                    </tr>
                                    )
                            }
                            <tr className="bg-dark text-info fs-5 my-5">
                                <td colSpan={4} className="bg-dark text-info fs-5 text-center align middle">Total:</td>
                                <td className="bg-dark text-info fs-5 text-start align middle">${SumaTotalProductos()}</td>
                                <td className="bg-dark text-end align middle"><Link to={"/checkout"} className="btn btn-outline-success">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart