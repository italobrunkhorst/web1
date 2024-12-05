import React from "react";
import '../css/style.css';

function Galeria(){
    return(
        <div>
            <div class="galeria">
                <img src="/img/brigadeiro.jfif" alt="brigadeiro" class="galeria" id="brigadeiro"/>
                <img src="/img/torta.jfif" alt="torta" class="galeria"/>
            </div>
            <div class="segunda_galeria">
                <img src="/img/torta2.jfif" alt="torta 2" class="segunda_galeria"/>
                <img src="/img/torta_banana.jfif" alt="torta de banana" class="segunda_galeria"/>
            </div>
        </div>
        
    );
}

export default Galeria;