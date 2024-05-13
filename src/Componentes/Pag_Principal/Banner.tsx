import { useEffect, useState } from "react";

type Publicidad = {
    UrlImagen:string,
    Titulo : string,
    Texto : string,
    UrlAccion : string,
    TextoAccion : string
};

const Banner = () => {
     const [lista, setLista] = useState<Publicidad[]>([]);
     const[error, setError] = useState("");
     const[currentIndex, setCurrentIndex] = useState(-1);
      const obtenerPubliciad = async () => {
        try{
            const resp = await fetch("http://localhost:4014/banner/principal");
            if(resp.ok){
                let data = await resp.json();
                setLista(data);
                setCurrentIndex(0);
            }
            else{
                setError("Ocurrio un error al cargar la publiciad. Revise la consola");
                setCurrentIndex(-1);
            }
        }
        catch (e){
            setError("Ocurrio un error al cargar la publiciddad. Revise la consola");
            setCurrentIndex(-1);
        }
    }
    const anterior = () => {
        if (currentIndex > 0){
            setCurrentIndex(index => index -1 );
        }
        else {
            setCurrentIndex(lista.length -1);
        }
    }
    const siguiente = () => {
        if (currentIndex <lista.length -1 ){
            setCurrentIndex(index => index + 1);
        }
        else {
            setCurrentIndex(0);
        }
    }
    const obtenerImagenFondo = () => {
        return "url(" + lista[currentIndex].UrlImagen +")";
    }
    useEffect (() => {
        obtenerPubliciad();
    }, []);

    return (
        <>
        {
            currentIndex >= 0 && 
            <body className="Pagina3">
            <div className="Contenedor">
            <div className="Imagen" style={{backgroundImage : obtenerImagenFondo()}}>
                <div className="Boton"><button onClick={anterior}>&lt;</button></div>
                <div className="Titulo">{lista[currentIndex].Titulo}</div>
                <div className="Texto">{lista[currentIndex].Texto}</div>
                <div className="Boton2"><button onClick={siguiente}>&gt;</button></div>
                <div className="Informacion"><a href={lista[currentIndex].UrlAccion}>{lista[currentIndex].TextoAccion}</a></div>
            </div>
            </div>
            </body>
        }
        {
            error !== "" && <div>{error}</div>
        }
        
        </>
    )
}
export default Banner;