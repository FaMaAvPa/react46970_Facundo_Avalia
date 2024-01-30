import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{
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
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>        
    )
}

export default ItemDetail