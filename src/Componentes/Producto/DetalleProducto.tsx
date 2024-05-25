import { useEffect, useState  } from "react";
import DisplayImagenes from "./DisplayImagenes";
import { useParams } from "react-router-dom";

type ProductoImagen = {
    URLImagen: string,
    Order: number,
    SKU: string
}

const DetalleProducto = () => {
    const {sku} = useParams();
    const [errorImagenes, setErrorImagenes] = useState("");
    const [imagenes, setImagenes] = useState<string[]>([]);
    
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

    useEffect(()=> {
        obtenerImagenes();
    }, []);

    return (
        <div>
            <div>{sku}</div>
            { errorImagenes && <div>{errorImagenes}</div> }
            {
                !errorImagenes && imagenes.length > 0 && <DisplayImagenes imagenes={imagenes} />
            }
            {
                !errorImagenes && imagenes.length === 0 && <div>No hay imagenes para mostrar</div> 
            }    
        </div>
            
    )
}

export default DetalleProducto;