import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledTopBar.css";
import logo from "../../images/pclogo.jpg"
import car from "../../images/shopping-cart.png"
import carblue from "../../images/shopping-cart-blue.png"


export default function TopBar() {
    let navigate = useNavigate();
    let [menu, setMenu] = useState(true)


    const navigateCloseMenu = ((nav) => {
        navigate(nav)
        setMenu(true);
    })

    return (
        <header className="top-bar-container">
            <div className="top-bar">
                <div className="container-logo">

                    <div className="lines" onClick={() => setMenu(!menu)}>
                        <span className={menu?'line1':'line1-active'}></span>
                        <span className='line2'></span>
                        <span className={menu?'line3':'line3-active'}></span>
                    </div>

                    <img onClick={() => navigate(`/`)} className="logo" src={logo} alt="logo" />
                </div>
                <div id='nav-container' className="nav-container">
                    <div className={menu ? 'hide-nav-menu-container' : 'nav-menu-container'}>
                        <div className="nav-section ">
                            <ul className="nav-buttons">
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/`)}>INÍCIO</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/produtos`)}>PRODUTOS</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/sobre`)}>QUEM SOMOS</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/videos`)}>VIDEOS</li>
                                <li className="nav-button" onClick={() => navigateCloseMenu(`/contato`)}>CONTATO</li>
                            </ul>
                            <div className="cart-container">
                                <img className="cart-logo" onClick={() => navigateCloseMenu(`/carrinho`)} src={car} alt="carrinho" />
                                <img className="cart-logo-blue" onClick={() => navigateCloseMenu(`/carrinho`)} src={carblue} alt="carrinho" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}