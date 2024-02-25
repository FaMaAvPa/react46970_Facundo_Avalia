import { Link } from "react-router-dom"
import Carrito from "../assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext)

    return(
        CantTotalProductos() > 0 ?
        <div className="mt-5">
            <Link to={"/cart"} className="btn btn-primary position-relative">
                <img src={Carrito} alt="carrito" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {CantTotalProductos()}
                </span>
            </Link>
        </div> : ""
    )
}

export default CartWidget