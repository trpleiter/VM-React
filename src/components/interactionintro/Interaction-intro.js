import React from "react";
import voedielogo from '../../assets/voedie-logo.jpg';
import styles from '../../components/interactionintro/Interactionintro.module.css';

function InteractionIntro({intro, children}) {
    return (
        <>
                <img src={voedielogo} alt="logo" className={styles.interactionlogo}/>
                <p className={styles.introduction}>{intro}</p>
                {children}
        </>
    );
}

export default InteractionIntro;
