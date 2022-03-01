import React from "react";
import styles from './EmailInput.module.css'

function EmailInput ( { placeholder, id, name} ) {
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

export default EmailInput;