import React from "react";
import styles from "../burgermenu/BurgerMenu.module.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import loginimg from "../../assets/login.svg";
import {useAuth} from "../../contexts/AuthContext";


function BurgerMenu({openBurger}) {
    let navigate = useNavigate();
    const { currentUser, logout } = useAuth();

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

                            {/*<li>*/}
                            {/*    {!currentUser && <NavLink className={styles.navItem}*/}
                            {/*                              to="/login" activeclassname="active">*/}
                            {/*        <img src={loginimg}*/}
                            {/*             alt="login"*/}
                            {/*             className={styles.login}*/}
                            {/*        />*/}
                            {/*        Login*/}
                            {/*    </NavLink>}*/}
                            {/*    {currentUser && <NavLink className={styles.navItem}*/}
                            {/*                             to="/logout"*/}
                            {/*                             activeclassname="active"*/}
                            {/*                             onClick={async  e => {*/}
                            {/*                                 e.preventDefault()*/}
                            {/*                                 logout()*/}
                            {/*                             }}*/}
                            {/*    >*/}
                            {/*        <img src={loginimg}*/}
                            {/*             alt="logout"*/}
                            {/*             className={styles.login}*/}
                            {/*        />*/}
                            {/*        Logout*/}
                            {/*    </NavLink>}*/}
                            {/*</li>*/}


                            {!currentUser && <Link className={styles.navBurgerItem}
                                  to="/login">
                                Login
                            </Link>}
                            {currentUser &&
                            <Link className={styles.navBurgerItem} to="/logout"
                                  onClick={async  e => {
                                      e.preventDefault()
                                      logout()
                                      navigate('/logout')
                                  }}
                            >
                            Logout
                        </Link>}
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