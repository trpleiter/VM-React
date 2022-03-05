import React from "react";
import styles from './PasswordInput.module.css';
import { useForm } from 'react-hook-form';

function PasswordInput ( { placeholder, id, name } ) {
    const { register } = useForm();
    return (
        <>
            <input
                type="password"
                className={styles.inputField}
                placeholder={placeholder}
                id={id}
            />
        </>
    )
}

export default PasswordInput;