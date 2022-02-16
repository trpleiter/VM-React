import React from "react";
import styles from '../../components/textinput/TextInput.module.css'

function TextInput ( { placeholder, id, name} ) {
    return (
        <>
    <input
        type="text"
        className={styles.inputField}
        placeholder={placeholder}
        id={id}
        name={name}
    />
        </>
    )
}

export default TextInput;