import React from "react";
import style from "./navigation.module.css"
import logo from "../../assets/logoleft.png"
import {NavLink} from "react-router-dom";


const Navigation = (props) => {
    return <div className={style.navigation_grid}>
        <div className={style.logo}>
            <img src={logo} alt={"logo"}/>
        </div>
        <div className={style.list_wrapper}>
            <ul className={style.list}>
                <li><NavLink exact to={"/"} activeClassName={style.link_active}>Home</NavLink></li>
                <li><NavLink to={"/category"} activeClassName={style.link_active}>Category</NavLink></li>
                <li><NavLink to={"/contacts"} activeClassName={style.link_active}>Contact me</NavLink></li>
            </ul>
        </div>

    </div>
}

export default  Navigation;