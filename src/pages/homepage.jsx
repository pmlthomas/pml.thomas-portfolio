import React from "react";
import Header from "../components/Header";
import Abilities from "../components/Abilities";
import Projects from "../components/Projects/index";
import styles from "./../scss/components/Homepage/homepage.module.scss";

export default function Homepage() {
    window.onload = function () {
        const innerCursor = document.getElementById("innerCursor");
        const outerCursor = document.getElementById("outerCursor");

        document.addEventListener("mousemove", function (e) {
            innerCursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });

        document.addEventListener("mousemove", function (e) {
            outerCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });
    };

    return (
        <>
            <div className={styles.innerCursor} id="innerCursor"></div>
            <div className={styles.outerCursor} id="outerCursor"></div>
            <Header />
            <Abilities />
            <Projects />
        </>
    );
}
