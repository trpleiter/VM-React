import React from "react";
import voedielogo from '../assets/voedie-logo.jpg';

function InteractionIntro ( {intro} ) {
    return (
        <>
        <img src={voedielogo} alt="logo" id="interactionlogo" />
            <span>{intro}</span>
        </>
    );
}

export default InteractionIntro;
