import { Link } from "react-router-dom"

const Item = ({item}) => {

    return(
    <div className="col-md-3 my-5 text-center" height={500}>
        <div className="card border-2 border-info h-100 bg-dark-subtle">
            <img src={item.imagen} className="card-img-top" height={300} alt={item.titulo}/>
            <div className="card-body">
                <h5 className="card-title">{item.titulo}</h5>
                <p className="card-text">${item.precio}</p>
                <button type="button" className="btn btn-outline-warnig px-5 w-100 bg-dark"><Link to={"/item/" + item.id} className="text-decoration-none link-light">Info del Producto</Link></button>
            </div>
        </div>
    </div>
    )
}

export default Item