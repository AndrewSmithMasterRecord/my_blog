import React from "react";
import Avatar from "../../../assets/0a-600x730.jpg"
import style from "./articleElement.module.css"
import heart from "../../../assets/heart.svg"
import comment_svg from "../../../assets/comment.svg"

const ArticleElement = () => {
    return <div className={style.post_global}>
        <div className={style.post_img}>
            <img src={Avatar} alt={"post img"}/>
        </div>

        <div>
            <div className={style.text_category}> Design</div>
            <div className={style.text_title}>
                Post title
            </div>

            <div>
                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors,
                manga artists, comic book artists....
            </div>
            <div className={style.read_button}>
                <a>Read more</a>
            </div>
        </div>
        <div className={style.likes + ' ' + style.comment_like}>
            <div className={style.com_like_position}>17. SEP 20</div>
            <div><img  src={heart} alt={"likes"}/></div>
            <div className={style.com_like_position}>10</div>
            <div><img  src={comment_svg} alt={"likes"}/></div>
            <div className={style.com_like_position}>2</div>

        </div>

    </div>
}

export default ArticleElement;