import { useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 d-flex align-items-center">
                    <img src={item.imagen} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4 text-light ">
                    <h2 className="pb-5">{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                    <p className="pb-5"><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>        
    )
}

export default ItemDetail