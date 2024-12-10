import React from "react";
import 'lightbox2/dist/css/lightbox.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.js'; //tem que colar a pasta do lightbox na pasta raiz
import '../css/style.css';

function Galeria() {
    return (
        <div>
            <div className="galeria">
                <a href="/img/brigadeiro.jfif" data-lightbox="fotos" data-title="Brigadeiro">
                    <img src="/img/brigadeiro.jfif" alt="brigadeiro" className="galeria" id="brigadeiro" />
                </a>
                <a href="/img/torta.jfif" data-lightbox="fotos" data-title="Torta">
                    <img src="/img/torta.jfif" alt="torta" className="galeria" />
                </a>
            </div>
            <div className="segunda_galeria">
                <a href="/img/torta2.jfif" data-lightbox="fotos" data-title="Torta de Chocolate">
                    <img src="/img/torta2.jfif" alt="torta 2" className="segunda_galeria" />
                </a>
                <a href="/img/torta_banana.jfif" data-lightbox="fotos" data-title="Torta de Banana">
                    <img src="/img/torta_banana.jfif" alt="torta de banana" className="segunda_galeria" />
                </a>
            </div>
        </div>
    );
}

export default Galeria;
