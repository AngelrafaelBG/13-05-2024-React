import { Outlet } from "react-router-dom"
import Menu from "./Pag_Principal/Menu";
import PiePagina from "../Componentes/PiePagina";

const PlantillaPrincipal = () =>{
    return (
        <>
        <Menu />
        <Outlet />
        <PiePagina/>
        </>
    )
}

export default PlantillaPrincipal;