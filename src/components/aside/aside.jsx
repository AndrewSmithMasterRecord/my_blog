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

            <p className={style.category_items}>1111111111111</p>
            <p className={style.category_items}>2222222222</p>
            <p className={style.category_items}>333333333333</p>
            <div className={style.border_back}>
                <p className={style.category_items}>44444444444444</p>
            </div>


        </div>

    </div>
}

export default Aside;