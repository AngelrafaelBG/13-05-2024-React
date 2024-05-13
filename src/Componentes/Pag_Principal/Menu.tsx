import { FaBars, FaTimes  } from "react-icons/fa";
import "../../assets/menu.css";

const Menu = () => {
    return(
        <nav className="menu">
            <div className="wrapper">
                <div className="logo"><a href="#">Revistas Especializadas</a></div>
                <input type="radio" name="slide" id="menu-btn" />
                <input type="radio" name="slide" id="close-btn" />

                <ul className="nav-links">
                    <label htmlFor="close-btn" className="btn close-btn"><FaTimes/></label>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>


                    <li className="drop-down-container">    
                    <a href="#">Animales</a>
                    <ul className="drop-menu"> 
                    <li><a href="#">Terrestre</a></li>
                    <li><a href="#">Acuaticos</a></li>
                    <li><a href="#">Anfibios</a></li>
                    <li><a href="#">Voldores</a></li>
                        </ul>
                    </li>

                    <li className="drop-down-container">    
                    <a href="#">Ciencia</a>
                    <ul className="drop-menu"> 
                    <li><a href="#">Ciencia </a></li>
                    <li><a href="#">Sus leyes</a></li>
                    <li><a href="#">Otro tipo de ciencia</a></li>
                        </ul>
                    </li>
                    

                    
                    <li className="drop-down-container">
                        <a href="#">El universo</a>

                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src="https://i.pinimg.com/564x/d7/56/79/d75679527837fd6bee2401429479860c.jpg" alt=""/>
                                </div>

                                <div className="row">
                                    <header>El mundo</header>
                                    <ul className="mega-links">
                                        <li><a href="#">La tierra</a></li>
                                        <li><a href="#">Como se formo la tierra</a></li>
                                        <li><a href="#">Cual es el limite?</a></li>
                                        
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Email Services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Personal Email</a></li>
                                        <li><a href="#">Business Email</a></li>
                                        <li><a href="#">Mobile Email</a></li>
                                        <li><a href="#">Web Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                <header>Security services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Site Seal</a></li>
                                        <li><a href="#">VPS Hosting</a></li>
                                        <li><a href="#">Privacity Seal</a></li>
                                        <li><a href="#">Website desing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="drop-down-container">
                        <a href="#">Salud</a>

                        <div className="mega-box">
                            <div className="content">
                                <div className="row">
                                    <img src="https://i.pinimg.com/564x/3e/c2/46/3ec246458b70e132047c9c3531d3786e.jpg" alt=""/>
                                </div>

                                <div className="row">
                                    <header>Salud en Mexico</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Como cuidarnos?</a></li>
                                        <li><a href="#">Que es el covid-19?</a></li>
                                        <li><a href="#">Como evitar una efermedad grave</a></li>
                                        <li><a href="#">Que hacer en caso de</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <header>Email Services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Personal Email</a></li>
                                        <li><a href="#">Business Email</a></li>
                                        <li><a href="#">Mobile Email</a></li>
                                        <li><a href="#">Web Marketing</a></li>
                                    </ul>
                                </div>
                                <div className="row">
                                <header>Security services</header>
                                    <ul className="mega-links">
                                        <li><a href="#">Site Seal</a></li>
                                        <li><a href="#">VPS Hosting</a></li>
                                        <li><a href="#">Privacity Seal</a></li>
                                        <li><a href="#">Website desing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li><a href="#">Feedback</a></li>
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><FaBars /></label>
            </div>
        </nav>
    )
}

export default Menu;