import { useEffect, useState } from "react";
import Oferta, {OfertaModel} from "./Oferta";

const COntedorOfertas = () => {
    const [datos, setDatos] = useState<OfertaModel[]>([]);
    const [error,setError] = useState ("");

    const obtenerDatos = async () => {
        setError ("");
        try {
            const resp = await fetch ("http://localhost:4014/principal/ofertas");
            if(resp.ok){
                const  arr = await resp.json();
                setDatos(arr);
            }
            else{
                const text = await resp.text();
                console.log(text);
                setError("Ocurrio un error al obtener los datos, Revise la consolosa");
            }
        }
        catch(e){
            console.log(e);
            setError("Ocurrio un error al obtener los datos, Revise la consolosa");
        }
    }
    useEffect(()=>{
        obtenerDatos();
    },[])

    return (
        <div>
            <h1>Ofertas de la semana</h1>
            {
                datos.length > 0 &&
                <div className="contenedor6">
                    {
                        datos.map(x =>
                            <Oferta key={x.ItemId}
                            UrlImagen={x.UrlImagen}
                            Descripcion={x.Descripcion}
                            Precio={x.Precio}
                            PrecioConDescuento={x.PrecioConDescuento}
                            EnvioGratis={x.EnvioGratis}
                            ItemId={x.ItemId}
                            Descuento={x.Descuento}
                            />
                        )
                    }
                </div>
            }
            {
                error && <div>{error}</div>
            }
        </div>
    )
}
export default COntedorOfertas;