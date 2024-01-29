import ItemCount from "./ItemCount"

const Item = ({item}) => {
    return(
    <div className="col-md-3 my-5 text-center">
        <div className="card border-0">
            <img src={item.imagen} className="card-img-top" alt={item.titulo}  height={300}/>
            <div className="card-body">
                <h5 className="card-title">{item.titulo}</h5>
                <p className="card-text">${item.precio}</p>
                <ItemCount stock={item.stock}/>
            </div>
        </div>
    </div>
    )
}

export default Item