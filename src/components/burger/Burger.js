import React from 'react';
import styles from "../burger/Burger.module.css";

function Burger({openBurger, setOpenBurger}) {
    if (openBurger === true) {
        return (
            <div className={styles.burgerStyle} onClick={() => setOpenBurger(!openBurger)}>
                <h6> </h6>
                <h6> </h6>
                <h6> </h6>
            </div>
        )
    } else {
        return (
            <div className={styles.burgerStyleClosed} onClick={() => setOpenBurger(!openBurger)}>
                <h6> </h6>
                <h6> </h6>
                <h6> </h6>
            </div>
        )
    }


}

export default Burger;