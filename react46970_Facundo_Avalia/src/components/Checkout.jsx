import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Checkout = () =>{
        const [nombre, setNombre] = useState();
        const [email, setEmail] = useState();
        const [telefono, setTelefono] = useState();
        const [orderId, setOrderId] = useState();

        const {cart, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext)

  
        
        const generarOrden = () => {
            if (nombre.lenght === 0) 
            {
                return false;
            }
            else if (email.lenght === 0) 
            {
                return false;
            }
            else if (telefono.lenght === 0) 
            {
                return false;
            }

            const buyer = {name:nombre, email:email, phone:telefono}
            const items = cart.map(item => ({id:item.idx, title:item.titulo, price:item.precio}))
            const fecha = new Date();
            const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
            const total = SumaTotalProductos();
            
            const order = {buyer:buyer, items:items, date:date, total:total}

            const db = getFirestore();
            const ordersCollection = collection(db, "order")   
            addDoc(ordersCollection, order).then(resultado => {
                clear();
                setOrderId(resultado.id)
            })
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2 className="fs-1 text-light">Checkout</h2>
                    </div>
                </div>
                <div className="row bg-dark">
                    <div className="col-md-6">
                        <form className="text-info">
                            <div className="mb-3">
                                <label className="form-label">Nombre:</label>
                                <input type="text" className="form-control bg-dark text-light" onInput={(e) => {setNombre(e.target.value)}}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control bg-dark text-light" onInput={(e) => {setEmail(e.target.value)}}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono:</label>
                                <input type="number" className="form-control bg-dark text-light" onInput={(e) => {setTelefono(e.target.value)}}/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <button type="button" className="btn btn-outline-success" onClick={generarOrden}>Generar orden</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="col text-center">
                            <table className="table">
                                <tbody className="">
                                    
                                    {
                                        cart.map(product =>
                                            <tr key={product.id} className="">
                                                <td className="bg-dark text-info fs-5 align-middle"><img src={product.imagen} alt={product.titulo} style={{width: 50}}/></td>
                                                <td className="bg-dark text-info fs-5 align-middle text-start">{product.titulo}</td>
                                                <td className="bg-dark text-info fs-5 align-middle">${product.precio}</td>
                                                <td className="bg-dark text-info fs-5 align-middle">Cantidad: {product.quantity}</td>
                                                <td className="bg-dark text-info fs-5 align-middle">${product.quantity * product.precio}</td>
                                            </tr>
                                            )
                                    }
                                    <tr className="bg-dark text-info fs-5 my-5">
                                        <td colSpan={4} className="bg-dark text-info fs-5 text-center align middle">Total:</td>
                                        <td className="bg-dark text-info fs-5 text-start align middle">${SumaTotalProductos()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-success p-5 text-center" role="alert">
                            <h2>Gracias por tu compra!</h2>
                            <h3>Tu código de facturación es: <b>{orderId}</b></h3>
                        </div> : ""}
                    </div>
                </div>
            </div>
        )
    } 

export default Checkout