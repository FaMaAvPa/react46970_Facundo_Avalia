import { useEffect, useState } from "react"
import productos from "./json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve =>{
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
        });                                                         
        promesa.then(data => {
            setItems(data)
        })
    }, [id])

    return(
        <div className="container bg-dark rounded">
            <div className="row">
                <h2 className="text-center text-light pt-2">Nuestros Productos</h2>
            </div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer