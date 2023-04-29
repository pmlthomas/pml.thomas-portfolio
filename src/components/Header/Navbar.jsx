import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./../../scss/components/Header/header.module.scss";

export default function Navbar() {
    const [isPhoneNavActive, setIsPhoneNavActive] = useState(false);
    return !isPhoneNavActive ? (
        <div className={styles.navRight}>
            <ul className={styles.ulTabletAndMore}>
                <li>
                    <a href="#accueil">Accueil</a>
                </li>
                <li>
                    <a href="#compétences">Compétences</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
            </ul>
            <div
                onClick={() => setIsPhoneNavActive(!isPhoneNavActive)}
                className={styles.phoneNav}
            >
                <FaBars size={35} color="white" />
            </div>
        </div>
    ) : (
        <div className={styles.navRight}>
            <div
                onClick={() => setIsPhoneNavActive(!isPhoneNavActive)}
                className={styles.phoneNav}
            >
                <FaBars size={35} color="white" />
            </div>
            <div className={styles.openedPhoneNav}>
                <ul className={styles.ulPhone}>
                    <li>
                        <a
                            onClick={() => setIsPhoneNavActive(false)}
                            href="#accueil"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setIsPhoneNavActive(false)}
                            href="#compétences"
                        >
                            Compétences
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setIsPhoneNavActive(false)}
                            href="#portfolio"
                        >
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
