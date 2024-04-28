import { memo } from "react";


import style from "./style.module.css";

export const NavBar = memo(() => (
    <nav className={style.container}>
        <img data-dontWorking="true" src="/icons/NavMenu.svg" alt="" loading="lazy" />
        <ol className={style.socialList} >
            <li>

                <img data-dontWorking="true" src="/icons/facebook.svg" alt="" loading="lazy" />

            </li>
            <li>
                <img data-dontWorking="true" src="/icons/twitter-fill.svg" alt="" loading="lazy" />
            </li>
            <li>
                <img data-dontWorking="true" src="/icons/linkedin.svg" alt="" loading="lazy" />
            </li>
        </ol>
    </nav>
))