import { memo } from "react";
import { LinkHeader } from "../../UI/LinkHeader";


import style from "./style.module.css";

export const Header = memo(() => (
    <header className={style.container}>
        <a href="">
            <img className={style.logo} src="/icons/Logo.svg" alt="" />
        </a>
        <div className={style.interface}>
            <nav className={style.nav}>
                <LinkHeader path="./mac" text="Mac" />
                <LinkHeader path="./iphone" text="IPhone" />
                <LinkHeader path="./ipad" text="ipad" />
                <LinkHeader path="./iwatch" text="IWatch" />
                <LinkHeader path="./support" text="Support" />
            </nav>
            <div className={style.btnlist}>
                <button className={style.btn}>
                    <img className={style.ContentBtn} src="/icons/search.svg" alt="" />
                </button>
                <div className={style.line}></div>
                <button className={style.btn}>
                    <img className={style.ContentBtn} src="/icons/shopping-bag.svg" alt="" />
                </button>
            </div>
        </div>
    </header>
))