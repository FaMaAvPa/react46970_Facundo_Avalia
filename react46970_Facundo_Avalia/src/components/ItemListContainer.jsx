import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productos from "./json/productos.json"
import { json, useParams } from "react-router-dom"
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loading from "./loading"
// import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([])                                  
    const {id} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos")
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false)
            setItems(resultado.docs.map(product => ({id:product.id, ...product.data()})))
        });
    }, [id])    
    
   

    return(
        
        <div className="container bg-dark rounded">
            <div className="row">
                <h2 className="text-center text-light pt-2">Nuestros Productos</h2>
            </div>
            {loading ? <Loading /> :<ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer