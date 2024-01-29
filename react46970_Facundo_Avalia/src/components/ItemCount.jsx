import { useState } from "react"


const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const [stockRestante, setStockRestante] = useState(stock)

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
    
    const onAdd = () => {
        if (counter <= stockRestante)
        {  
            setStockRestante(stockRestante - counter);
            console.log("Agregaste " + counter + " productos al carrito");
            setCounter(1);
        } 
    }
    
    return(
        <>
            <div className="row my-1">
                <div className="col-md-12">
                    <div className="btn-group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary px-5">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-12">
                    <button type="button" className="btn btn-outline-success px-5 w-auto" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount