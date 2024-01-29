import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mt-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item fs-4 mx-3">
                        <Link to="productos" className="text-decoration-none text-dark">Productos</Link>
                    </li>        
                    <li className="nav-item fs-4 mx-3">
                        Mouses
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        Teclados
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        Procesadores
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        Monitores
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        Graficas
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar un producto..." aria-label="Search" />
                    <button className="btn btn-outline-success text-dark" type="submit">Buscar</button>
                    </form>
                </div>
                </div>
                <div className="column col-md-2">
                    <CartWidget />  
                </div>
        </nav>
    )
}

export default Navbar