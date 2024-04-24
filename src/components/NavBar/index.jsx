import { memo } from "react";


import style from "./style.module.css";

export const NavBar = memo(() => (
    <nav className={style.container}>
        <img src="/icons/NavMenu.svg" alt="" loading="lazy" />
        <ol className={style.socialList}>
            <li>
                <a href="">
                    <img src="/icons/facebook.svg" alt="" loading="lazy" />
                </a>

            </li>
            <li>
                <a href="">
                    <img src="/icons/twitter-fill.svg" alt="" loading="lazy" />
                </a>
            </li>
            <li>
                <img src="/icons/linkedin.svg" alt="" loading="lazy" />
            </li>
        </ol>
    </nav>
))