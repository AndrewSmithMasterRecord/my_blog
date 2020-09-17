import React from "react";
import Avatar from "../../../assets/0a-600x730.jpg"
import style from "./articleElement.module.css"
import heart from "../../../assets/heart.svg"
import comment_svg from "../../../assets/comment.svg"

const ArticleElement = (props) => {

    return <div className={style.post_global}>
        <div className={style.post_img}>
            <img src={props.post.photo ? props.post.photo : Avatar} alt={"post img"}/>
        </div>

        <div>
            <div className={style.text_category}> {props.post.category}</div>
            <div className={style.text_title}>
                {props.post.title}
            </div>

            <div className={style.content}>
                {props.post.content}
            </div>
            <div className={style.read_button}>
                <a>Read more</a>
            </div>
        </div>
        <div className={style.likes + ' ' + style.comment_like}>
            <div className={style.com_like_position}>{props.post.date}</div>
            <div><img src={heart} alt={"likes"}/></div>
            <div className={style.com_like_position}>{props.post.likes}</div>
            <div><img src={comment_svg} alt={"likes"}/></div>
            <div className={style.com_like_position}>{props.post.comments}</div>

        </div>

    </div>
}

export default ArticleElement;