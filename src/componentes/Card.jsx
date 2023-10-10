import React from "react";
import Cerdo from "../assets/Cerdo.png";
import gallina from "../assets/gallina.png";
import vaquita from "../assets/vaquita.png";
import perros from "../assets/perros.png";

import { Cajas, CardContainer, CardsContainer, Blanco, Finish } from "../componentes/CardStyled";

const cardData = [
    {
        imagen: Cerdo,
        tittle: "Producto 1",
        categoria: "porcino",
        link: "#",
    },
    {
        imagen: gallina,
        tittle: "Producto 2",
        categoria: "avicultura",
        link: "#",
    },
    {
        imagen: vaquita,
        tittle: "Producto 3",
        categoria: "Rumiantes",
        link: "#",
    },
    {
        imagen: perros,
        tittle: "Producto 4",
        categoria: "ruuuaushshhshhs",
        link: "https://bard.google.com/",
    },
];

function CardNuevo() {
    return (
        <div>
            <CardsContainer>
                {cardData.map((cardData, index) => (
                    <CardContainer className="carta" key={index}>
                        <Cajas>
                            <div className="image-container">
                                <img src={cardData.imagen} alt={cardData.tittle} />
                            </div>
                            <h2>{cardData.tittle}</h2>
                            <p>{cardData.categoria}</p>
                            <a href={cardData.link} target="_blank" rel="noopener noreferrer">
                                Ver más
                            </a>
                        </Cajas>
                    </CardContainer>
                ))}
            </CardsContainer>
            <Blanco></Blanco>
<Finish>
    <h1>holaa</h1>
</Finish>
            
        </div>
        
    );
}

export default CardNuevo;
