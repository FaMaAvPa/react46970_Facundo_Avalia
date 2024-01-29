import { useEffect, useState } from "react"
import productos from "./json/productos.json"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise(resolve =>{
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });
        promesa.then(data => {
            setItems(productos)
        })
    }, [])

    return(
        <div className="container my-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer