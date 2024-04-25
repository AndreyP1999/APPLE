import { NavLink } from "react-router-dom";

import style from "./style.module.css";

export const LinkHeader = ({ text, path, isNavigate, folder }) => {
    if (isNavigate) {
        return <NavLink className={style.link} to={"?product=" + path} state={{ folder:folder }} >{text}</NavLink>
    }
    else {
        return <a className={style.link} href={path}>{text}</a>
    }
}


