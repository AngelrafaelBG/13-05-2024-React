import "../assets/pie_pagina.css"

const PiePagina = () =>{
    return(
    <>

    <footer className="pie-pagina3">
        <div className="grupo-1">
            <div className="box2">
                <figure>
                    <a href="#">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24812.315901299007!2d-97.93740013506729!3d22.41498908251098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7fd5bfec41b21%3A0xc0b342c2a5e8938c!2sCBTis%20No.%20105%20%22Ing.%20Alejandro%20Prieto%20Quintero%22!5e0!3m2!1ses!2smx!4v1714483328612!5m2!1ses!2smx" width="320" height="280" ></iframe>
                    </a>
                </figure>
            </div>
            <div className="box2">
                <h2>SOBRE NOSOTROS</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</h5>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</h5>
            </div>
            <div className="box2">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="http://localhost:3014/Presentacion" className="fa fa-facebook"/>
                    <a href="#" className="fa fa-instagram"/>
                    <a href="#" className="fa fa-twitter"/>
                    <a href="#" className="fa fa-youtube"/>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2024 <b>Revistas</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    </>
    )
}

export default PiePagina;