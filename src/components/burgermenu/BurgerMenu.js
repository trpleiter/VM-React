import React from "react";
import styles from "../burgermenu/BurgerMenu.module.css";
import {Link} from "react-router-dom";

function BurgerMenu({openBurger}) {
    if (openBurger === true) {
        return (
            <>
                <div className={styles.burgerMenuOpen}>
                    <ul className={styles.navBurgerItems}>
                        <li>
                            <Link className={styles.navBurgerItem}
                                  to="/voedie-stomach">
                                Voedie stomach
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navBurgerItem}
                                  to="/voedie-talk">
                                Voedie talk
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navBurgerItem}
                                  to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={styles.burgerMenuClosed}>
                    <ul className={styles.navBurgerItems}>
                        <li>
                            <Link className={styles.navBurgerItem}
                                  to="/voedie-stomach">
                                Voedie stomach
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navBurgerItem}
                                  to="/voedie-talk">
                                Voedie talk
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.navBurgerItem}
                                  to="/login">
                                 Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default BurgerMenu;