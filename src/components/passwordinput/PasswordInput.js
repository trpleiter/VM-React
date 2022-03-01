import React from "react";
import styles from './PasswordInput.module.css'

function PasswordInput ( { placeholder, id, name} ) {
    return (
        <>
            <input
                type="password"
                className={styles.inputField}
                placeholder={placeholder}
                id={id}
                name={name}
            />
        </>
    )
}

export default PasswordInput;