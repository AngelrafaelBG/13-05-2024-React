import { useRef,useState } from "react";

type Props = {
    imagenes : string[]
};

const DisplayImagenes = ({imagenes} : Props) => {
    const divMiniaturas = useRef<HTMLDivElement>(null);
    const [imagenActual, setImagenActual] = useState<string> (imagenes[0]);

    const mover = (dirreccion : string) =>{
        if(dirreccion.toLowerCase()== "izq"){
            divMiniaturas?.current?.scrollBy({behavior : "smooth", top: 0, left : -100})
        }
        else{
            divMiniaturas?.current?.scrollBy({behavior : "smooth", top: 0, left : 100})
        } 
    }
    return (
        <div className="ContenedorPadreDisplay">
        <div className="display-imagenes">
            <div className="imagen-principal">
                <img src={imagenActual} />
            </div>
            <div className="slider">
                {imagenes.length > 4 && <button onClick={()=> mover ("izq")}>&lt;</button>}
                <div className="miniaturas" ref={divMiniaturas}>
                    {
                        imagenes.map((url, index) =>
                        <img key={index} src={url} onClick={()=> setImagenActual(imagenes[index])}/>
                    )
                    }
                </div>
                {imagenes.length > 4 && <button onClick={()=> mover ("der")}>&gt;</button>}
            </div>
        </div>
        </div>
    )
}

export default DisplayImagenes;