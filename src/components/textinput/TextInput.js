import React from "react";
import styles from './TextInput.module.css';

function InputField({placeholder, id, children}) {
    return (
        <>
            <input
                type="{type}"
                className={styles.inputField}
                placeholder={placeholder}
                id={id}
            />
            {children}
        </>
    )
}

export default InputField;