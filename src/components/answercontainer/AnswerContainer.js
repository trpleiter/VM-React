import React from "react";
import styles from './AnswerContainer.module.css';

function AnswerContainer ({answer}) {
    return (
        <div className={styles.cloud}>A: {answer}</div>
    )
}

export default AnswerContainer