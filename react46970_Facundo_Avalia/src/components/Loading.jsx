const Loading = () =>{
    return(
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;