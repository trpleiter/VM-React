import React from "react";
import styles from './QuestionContainer.module.css';

function QuestionContainer ({question}) {
    return (
        <div className={styles.cloud}>Q: {question}</div>
    )
}

export default QuestionContainer;