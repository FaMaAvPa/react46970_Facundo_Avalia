import { useEffect, useState } from "react"
import productos from "./json/productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({}) =>{
    const [item, setItem] = useState([])
    const {id} = useParams();

    useEffect(() => {
            const promesa = new Promise(resolve =>{
                    let producto = productos.find(item => item.id == id)
                    resolve(producto);
            });                                                         
            promesa.then(data => {
                setItem(data)
            })                  
    }, [id])

    return(
        <>
        <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer