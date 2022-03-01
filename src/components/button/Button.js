import React from "react";
import styles from "./button.module.css"

function Button({type, text}) {
    return (<button type={type} className={styles.btn}>{text}</button>
    )
}

export default Button
