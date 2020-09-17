import React from "react";
import style from "./aside.module.css"
import search_svg from "../../assets/search.svg"

const Aside = () => {
    return <div className={style.aside_grid}>
        <div className={style.search}>
            <button type="submit" className={style.searchButton}>
                <img src={search_svg} alt={"search"}/>
            </button>
            <input type="text" className={style.searchInput} placeholder="Type"/>
        </div>
        <div className={style.category_wrapper}>
            <h4 className={style.category_header}>Category</h4>

            <div className={style.border_back}>
                <a>1111111111111</a>
            </div>
            <div className={style.border_back}>
                <a>2222222222</a>
            </div>
            <div className={style.border_back}>
                <a>333333333333</a>
            </div>
            <div className={style.border_back}>
                <a>44444444444444</a>
            </div>


        </div>

    </div>
}

export default Aside;