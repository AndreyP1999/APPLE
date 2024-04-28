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
                <LinkHeader path="IWatch" text="IWatch" isNavigate={true} folder="apple_watch" />
                <LinkHeader path="IPhone" text="IPhone" isNavigate={true} folder="apple_iphone" />
                <LinkHeader path="IVision" text="IVision" isNavigate={true} folder="apple_vision" />
                <LinkHeader path="https://github.com/AndreyP1999/APPLE" text="Pезуме" isNavigate={false} folder="" />
            </nav>
            <div className={style.btnlist}>
                <button className={style.btn} data-dontWorking="true">
                    <img className={style.ContentBtn} src="/icons/search.svg" alt="" data-dontWorking="true"/>
                </button>
                <div className={style.line}></div>
                <button className={style.btn} data-dontWorking="true">
                    <img className={style.ContentBtn} src="/icons/shopping-bag.svg" alt="" data-dontWorking="true"/>
                </button>
            </div>
        </div>
    </header>
))