import React from "react";
import '../css/style.css';

function Contato(){
    return(
        <div>
            <div id="container">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="nmae"/>

                    <label htmlFor="telefone">Telefone</label>
                    <input type="number" name="telefone" id="telefone"/>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email"/>

                    <label htmlFor="menssagem">Digite sua Menssagem</label>
                    <textarea name="menssagem" id="menssagem"></textarea>

                    <button type="submit">Enviar</button>
                </form>
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.47157373248078!2d-48.53360024137974!3d-25.81857492139717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dbefce201232e5%3A0xdfabc38c0e2dceb7!2sCafeteria%20Mais1%20Caf%C3%A9%20-%20Matinhos!5e0!3m2!1spt-BR!2sbr!4v1729632143239!5m2!1spt-BR!2sbr" 
                        width="600" 
                        height="450" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Mapa da Cafeteria"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contato;