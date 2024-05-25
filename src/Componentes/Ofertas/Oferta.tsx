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
        <div>
            <div className="Contenedor5">

            <div className="Imagen4">
            <img src={UrlImagen} />
            </div>
            
            <div className="Descripcion3">
            <h4>{Descripcion}</h4>

            <div className="EnvioGratis">
                <p>{EnvioGratis}</p>
            </div>
            

            {
                PrecioConDescuento && Descuento && 
                <div className="PrecioDescuento"><span>${Precio} MXN</span><span>--{Descuento}%</span></div>
            }
            {
                <div className="P">${PrecioConDescuento ? PrecioConDescuento : Precio} MXN</div>
            }
            {EnvioGratis && <div className="EnvioGratis"> EnvioGratis </div>}
                </div>
            </div>
        </div>
    )
}
export default Oferta;