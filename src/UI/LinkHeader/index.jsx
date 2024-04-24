import { NavLink } from "react-router-dom";

import style from "./style.module.css";

export const LinkHeader = ({ text, path }) => (
    <NavLink className={style.link} to={path} >{text}</NavLink>
)