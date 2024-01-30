import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2 d-flex align-items-center">
                    <img src={item.imagen} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <h2>{item.title}</h2>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={itemDetalle.stock}/>
                </div>
            </div>
        </div>        
    )
}

export default ItemDetail