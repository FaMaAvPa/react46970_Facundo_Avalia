import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext"


const ItemCount = ({stock, onAdd}) => {
    const {addItem} = useContext(CartContext)
    const [counter, setCounter] = useState(1)
    const [stockRestante, setStockRestante] = useState(stock)
    const [itemAdded, setItemAdded] = useState(false)

    const incrementar = () => {
        if(counter < stockRestante)
        {
            setCounter(counter+1);
        }
    }

    const decrementar = () => {
        if(counter > 1)
        {
            setCounter(counter-1);
        }
    }
    
    const AddToCart = () => {
        if (counter <= stockRestante)
        {  
            setStockRestante(stockRestante - counter);
            console.log("Agregaste " + counter + " productos al carrito");
            onAdd(counter)
            setCounter(1);
            setItemAdded(true);
        } 
    }

    useEffect(() => {
        setStockRestante(stock)
    }, [stock])
    
    return(
        <>
            <div className="row my-1">
                <div className="col-md-12">
                    <div className="btn-group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary px-5 w-100">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-12">
                    {
                    itemAdded ? <Link to={"/cart"} className="btn btn-outline-success px-5 w-auto">Finalizar Compra</Link> :
                    <button type="button" className="btn btn-outline-success px-5 w-auto" onClick={AddToCart}>Agregar al Carrito</button>
                     }
                </div>
            </div>
        </>
    )
}

export default ItemCount