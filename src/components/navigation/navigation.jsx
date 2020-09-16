import React from "react";
import style from "./navigation.module.css"
import logo from "../../assets/logoleft.png"


const Navigation = (props) => {
    return <div className={style.navigation_grid}>
        <div className={style.logo}>
            <img src={logo} alt={"logo"}/>
        </div>
        <div className={style.list_wrapper}>
            <ul className={style.list}>
                <li>Home</li>
                <li>Category</li>
                <li>Contact me</li>
            </ul>
        </div>

    </div>
}

export default  Navigation;