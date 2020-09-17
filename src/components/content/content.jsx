import React from "react";
import style from "./content.module.css"
import ArticleElement from "./article/articleElement";

const Content = () => {
    return <div className={style.content_grid}>
        <div className={style.post_grid}>
            <ArticleElement/>
            <ArticleElement/>
            <ArticleElement/>
            <ArticleElement/>
            <ArticleElement/>
        </div>

    </div>
}

export default Content;