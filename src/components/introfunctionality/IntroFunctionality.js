import React from "react";
import styles from './IntroFunctionality.module.css';

function IntroFunctionality ({title, intro}) {
    return (
        <header className={styles.intro}><h2>{title}</h2>
            <p>{intro}</p>
        </header>
    )
}

export default IntroFunctionality