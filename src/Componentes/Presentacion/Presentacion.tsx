import { useEffect, useState } from "react";
import Integrantes from "./Integrantes";

type Alumno = {
    Nombre: string,
    NumControl: string,
    Foto: string
    Rol:string
    FechaNaciemiento:string,
    RedSocial:string
}

const Presentacion = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>([]);
    const [error, setError] = useState("");
    useEffect(()=> {
        mostrarAlumnos();
    },[]);

    const mostrarAlumnos =async () =>{
        setError("");

        try{
            const resp =await fetch("http://localhost:4014/equipo/integrantes");

            if(resp.ok) {
                const datos = await resp.json();
                setAlumnos(datos);
            }
            else {
                const texto =await resp.text();
                setError("Ocurrio un error al ejecutar el servicio." + texto);
            }
        }
        catch(e){
            setError("Ocurrio un error al ejecutar el servico. Revise la consola");
            console.log("Error:",e)
        }
    }

    return(
        <>
        <div className="ContenedorPresentacion">
        <div className="NombreDeLaEscuela"><h3>Centro De Bachillerato Tecnologico Industrial Numero 105</h3></div>
        <div className="NombreAlterno"><h4>"Armando Martinez Saucedo</h4></div>
        <div className="Carrera"><h4>Programacion 4:D</h4></div>
        {/* <div className="GradoYGrupo"><h3>4:D</h3></div> */}
        <div className="NumeroYNombreDelProyecto"><h4>Revistas Especializadas</h4></div>
        <div className="IntegrantesDelEquipoEstilo">
        <h2>Integrantes del equipo</h2>
        </div>
        <div className="LogoRevisatasEspecialisadas">
            <img src="https://img.freepik.com/vector-premium/icono-linea-vector-minimo-revista-boton-3d-aislado-sobre-fondo-negro-vector-premium_570929-1403.jpg" width={100} ></img>
        </div>
        </div>
        {
            error === "" &&
            <div className="color">
            <div className="grid">
               
                {
                    alumnos.map((item, index) =>
                    <Integrantes
                    key={index}
                    foto={item.Foto}
                    nombre={item.Nombre}
                    rol={item.Rol}
                    numControl={item.NumControl}
                    fechanacimiento={item.FechaNaciemiento}
                    redsocial={item.RedSocial}
                    />
                    )
                }
            </div>
            </div>
        }
        {
          error !== "A ocurrido un error" &&
          <div className="error">{error}</div>
        }
       <div className="PieDePagina">
        <div className="TerminosYCondiciones">
        <h3>Acerca de nosotros</h3>
        <h3>terminos y condiciones</h3></div>
        
            <div className="Domicilio">Blvd Allende 2405, Roger Gomez 89602 Altamira Tamps</div>
            <div className="Telefono">83326404111</div>
            <div className="CorreoElectronico">cbtis105.altamira@gmail.com</div>
            </div>
        
        
        </>
   )
}
   export default Presentacion;