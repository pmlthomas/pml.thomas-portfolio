import React from "react";
import { FaBars } from "react-icons/fa";
import styles from "./../../scss/components/Header/header.module.scss";

export default function Navbar() {
    return (
        <div className={styles.navRight}>
            <ul>
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
            <div className={styles.phoneNav}>
                <FaBars size={35} color="white" />
            </div>
        </div>
    );
}
