import Carrito from "../assets/cart.svg"

const CartWidget = () => {
    return(
        <div className="mt-5">
            <button type="button" className="btn btn-primary position-relative">
            <img src={Carrito} alt="carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
            </span>
            </button>
        </div>
    )
}

export default CartWidget