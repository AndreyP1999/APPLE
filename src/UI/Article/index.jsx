import { NavLink } from "react-router-dom";

import style from "./style.module.css";

export const Article = ({ heading, text, href }) => (
    <section className={style.container}>

        <h1 className={style.h1}>{heading}</h1>
        <a className={style.link} href={href}>{text}</a>

    </section>

)