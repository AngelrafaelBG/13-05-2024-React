import { useEffect, useState  } from "react";
import DisplayImagenes from "./DisplayImagenes";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {FaTruck} from "react-icons/fa";
import "../../assets/DetalleProducto.css"

type ProductoImagen = {
    URLImagen: string,
    Order: number,
    SKU: string
}
type Productos = {
    SKU : string,
    Descripcion : string,
    Precio : number,
    PrecioConDescuento? :number,
    EnvioGratis : boolean,
    Calificacion : number,
}

const DetalleProducto = () => {
    const {sku} = useParams();
    const [errorImagenes, setErrorImagenes] = useState("");
    const [imagenes, setImagenes] = useState<string[]>([]);
    const [productos, setProductos] = useState<Productos>();
    const [errorProductos, setErrorProductos] = useState ("");
    const [cantidad, setCantidad] = useState(1);
    
    const obtenerImagenes = async () => {
        try{
            var resp = await fetch("http://localhost:4014/productos/" + sku + "/imagenes");
            if(resp.ok) {
                const arreglo = await resp.json();
                const soloUrls = arreglo.map((x: ProductoImagen) => x.URLImagen);
                setImagenes(soloUrls);
            }
            else {
                setErrorImagenes("Error al ejecutar el servicio para obtener imagenes");
            }
        }
        catch(e){
            console.log("hola");
            setErrorImagenes("Error al ejecutar el servicio para obtener imagenes");
        }
    }
    const obtenerProductos = async () => {
        try{
            var resp = await fetch ("http://localhost:4014/productos/"+ sku);
            if (resp.ok){
                const data = await resp.json();
                setProductos(data);
            }
            else{
                if(resp.status == 404){
                    const detalleError = await resp.text();
                    setErrorProductos(detalleError);
                }
                else{
                    setErrorProductos("Error al ejecutar el sevicio para obtener la imagenes");
                }
            }
        }
        catch (e){
            setErrorImagenes("Error al ejecutar el servicio para obtener imagenes");
        }
    }
    useEffect(() => {
        obtenerProductos();
    }, [])

    useEffect(()=> {
        obtenerImagenes();
    }, [productos]);

    const aumentar = () =>{
        setCantidad (c => c+1);
    }
    const disminuir = () => {
        if (cantidad > 1){
            setCantidad (c => c-1);
        }
    }
    const formatoNumero = (num? : number) => {
        const format = new Intl.NumberFormat("es-MX", {
            currency: "MXN",
            maximumFractionDigits : 2,
            maximumSignificantDigits : 2
        });

        if (num){
            return format.format(num);
        }
        return "";
    }
    const mostarCalificacion = (calif?: number) => {
        if (calif){
            switch (calif){
                case 1 : return <>
                    <FaStar style = {{color : "yellow"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    </>;
                case 2 : return <>
                    <FaStar style = {{color : "yellow"}}/>
                    <FaStar style = {{color : "yellow"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    <FaStar style = {{color : "#ccc"}}/>
                    </>;
                case 3 : return <>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "#ccc"}}/>
                     <FaStar style = {{color : "#ccc"}}/>
                    </>;
                case 4 : return <>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "#ccc"}}/>
                    </>
                case 5 : return <>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                     <FaStar style = {{color : "yellow"}}/>
                    </>
            }
        }
        return <></>
    }

    return (
        <>
        {
            errorProductos && <div>{errorProductos}</div>
        }
        {
        !errorProductos &&
        <div>
            <div>
            { errorImagenes && <div>{errorImagenes}</div> }
            {
                !errorImagenes && imagenes.length > 0 && <DisplayImagenes imagenes={imagenes} />
            }
            {
                !errorImagenes && imagenes.length === 0 && <div>No hay imagenes para mostrar</div> 
            }    
            </div>
            <div className="ContenedorPadreDisplay">
            <div className="Contenedor7"> 
            <div className="Descripcion">
                <h1>{productos?.Descripcion}</h1></div>

                <div className="SKU">Codigo de producto{productos?.SKU}</div>
                <div>{mostarCalificacion(productos?.Calificacion)}</div>
                <hr/>
                {
                    productos?.PrecioConDescuento && 
                    <div>
                        <span>{formatoNumero(productos?.PrecioConDescuento)}</span>
                        <span>{formatoNumero(productos?.Precio)}</span>
                    </div>
                }
                {
                    !productos?.PrecioConDescuento && 
                    <div>{formatoNumero(productos?.Precio)}
                    </div>
                }
                {productos?.EnvioGratis && <div className="Envio"><FaTruck/>Envio gratis a todo mexico</div>}
                <div>Cantidad :</div>

                <div className="ContenedorBoton">
                <div className="Cantidad">
                    <button onClick={disminuir}><div className="BotonMas">-</div></button>
                    
                    {cantidad}

                    <button onClick={aumentar}><div className="BotonMenos">+</div></button></div>
                </div>
            </div>
        </div>
        </div>
            }
        </>
    )
}

export default DetalleProducto;