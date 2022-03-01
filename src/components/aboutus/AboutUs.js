import React from "react";
import styles from './AboutUs.module.css';

function AboutUs ({title , children}) {
    return (
        <article className={styles.articleContent}>
            <h2>{title}</h2>
            {children}
        </article>
    )
}

export default AboutUs;