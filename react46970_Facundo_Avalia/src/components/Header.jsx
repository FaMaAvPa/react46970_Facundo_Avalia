import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Logo from "../assets/Logo.png"


const Header = () =>{
    return(
        <header className="bg-secondary">
                <div className="row">
                    <div className="column col-md-3">
                         <Link className="nav-link active fs-3 text-dark" to={"/"}><img src={Logo} alt="Logo" />CompuShop</Link>
                    </div>
                    <div className="column col-md-9">
                        <Navbar />
                    </div>
                </div>
        </header>
    )
}

export default Header