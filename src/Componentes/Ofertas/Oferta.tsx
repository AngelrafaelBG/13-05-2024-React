import "../../assets/Ofertas.css"

export type OfertaModel = {
    ItemId : string,
    Descripcion : string,
    UrlImagen : string,
    Precio : number ,
    PrecioConDescuento? : number,
    Descuento? : number,
    EnvioGratis? : boolean
};

const Oferta = ({UrlImagen,ItemId,Precio,PrecioConDescuento,Descripcion,EnvioGratis,Descuento}: OfertaModel )=>{
    return (

        
        
            <div className="Contenedor5">
                <div className="Imagen4">
                <img src={UrlImagen} />
                </div>
                    
                <div className="Descripcion3">
                <p>{Descripcion}</p>
                
                {
                    PrecioConDescuento && Descuento && 
                    <div><span>${Precio} MXN</span><span>--{Descuento}%</span></div>
                }
                {
                    <div>${PrecioConDescuento ? PrecioConDescuento : Precio} MXN</div>
                }
                {EnvioGratis && <div> EnvioGratis </div>}
                </div>


            </div>
        
        
        
    )
}
export default Oferta;