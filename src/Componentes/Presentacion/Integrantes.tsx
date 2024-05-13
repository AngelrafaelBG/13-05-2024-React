type Argumentos = {
    nombre: string,
    numControl: string,
    foto: string,
    rol:string,
    fechanacimiento:string,
    redsocial:string
}

const Integrantes = ({nombre, numControl, foto,rol,fechanacimiento,redsocial}: Argumentos) =>{
    return (
        <>
        <div className="Contenedor3">
            <div className="Forma">
                </div>
                <div className="Imagen2">
                    <img src={foto} width={150} />
            </div>

        <div className="ContenedorInformacion">    
            <div className="Nombre">
            <h3>{nombre}</h3>
            </div>
            
            <div className="numControl">
            <h3>{numControl}</h3>
            </div>

            <div className="Rol">
            <h4>{rol}</h4>
            </div>

            <div className="Fechadenacimiento">
            <h4>{fechanacimiento}</h4>
            </div>

            <div className="redsocial">
            <a href={redsocial} target="_blank">Mi Redes</a></div>
        </div>
        </div>
        </>
    )
}

export default Integrantes;