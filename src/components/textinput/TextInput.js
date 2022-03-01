import React from "react";
import styles from './TextInput.module.css'

function InputField ( { placeholder, id, name} ) {
    return (
        <>
    <input
        type="{type}"
        className={styles.inputField}
        placeholder={placeholder}
        id={id}
        name={name}
    />
        </>
    )
}

export default InputField;