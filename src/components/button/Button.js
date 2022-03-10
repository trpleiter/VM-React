import React from "react";
import styles from "./button.module.css"

function Button({type, text, handleHandler}) {
    return (
        <button
            type={type}
            className={styles.btn}
            onClick={handleHandler}>
            {text}
        </button>
    )
}

export default Button
