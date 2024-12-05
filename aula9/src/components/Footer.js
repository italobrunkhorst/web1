import React from "react";
import '../css/style.css';

function Footer() {
    return(
        <footer>
            <p>Cafeteria</p>
            <p>Rua Darnerys, 923, Smooville - Eregor/PR</p>
            <p>Telefone: (99) 3431-0022</p>
            <img src="/img/instagram.png" alt="Instagram" className="icons"/>
            <img src="/img/youtube.png" alt="YouTube" className="icons" />
        </footer>
    );
}

export default Footer;