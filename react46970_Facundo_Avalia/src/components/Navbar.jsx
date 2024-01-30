import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"


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
                        <NavLink to="/productos" className="text-decoration-none text-dark">Productos</NavLink>
                    </li>        
                    <li className="nav-item fs-4 mx-3">
                        <NavLink to="/categoria/mouse" className="text-decoration-none text-dark">Mouses</NavLink>
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        <NavLink to="/categoria/teclado" className="text-decoration-none text-dark">Teclados</NavLink>
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        <NavLink to="/categoria/procesador" className="text-decoration-none text-dark">Procesadores</NavLink>
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        <NavLink to="/categoria/monitor" className="text-decoration-none text-dark">Monitores</NavLink>
                    </li>
                    <li className="nav-item fs-4 mx-3">
                        <NavLink to="/categoria/grafica" className="text-decoration-none text-dark">Graficas</NavLink>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="column col-md-2">
                    <CartWidget />  
                </div>
        </nav>
    )
}

export default Navbar