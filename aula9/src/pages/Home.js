import React from "react";
import {motion} from "framer-motion";
import '../css/style.css';

function Home(){
    
    return(
        <div>
           <div id="corpo">
                <h1>Bem-Vindo(a) ao nosso site!</h1>
                <motion.img 
                    src="/img/cafeteria.avif" 
                    alt="Cafeteria" 
                    initial={{scale: 0.8, opacity: 0, rotate: 0}} 
                    animate={{sale: 1, opacity: 1, rotate: 360}} 
                    transition={{duration: 2, ease: "easeInOut"}}
                />
           </div>
        </div>
    );
}

export default Home;