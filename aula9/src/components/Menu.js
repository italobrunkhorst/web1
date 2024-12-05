import React from "react";
import { Link } from "react-router-dom";
import '../css/style.css';

function Menu() {
    const clickMenu = () => {
        const menu = document.getElementById("menu");
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }else{
            menu.style.display = 'block';
        }
    };

    return(
        <nav>
            <header>
                <img src="/img/pngwing.com (1).png" alt="Logo da Cafeteria" id="logo" />
           </header>
            <div id="dropdown">
                <button id="dropdown-button" onClick={clickMenu}>
                    <img src="/img/cardapio.png" alt="Menu"/>
                </button>
                <ul id="menu">
                    <li><Link to="/" className="link-menu">Home</Link></li>
                    <li><Link to="/historia" className="link-menu">História</Link></li>
                    <li><Link to="/galeria" className="link-menu">Galeria</Link></li>
                    <li><Link to="/contato" className="link-menu">Contato</Link></li>
                </ul>
           </div>
        </nav>
    );
}

export default Menu;