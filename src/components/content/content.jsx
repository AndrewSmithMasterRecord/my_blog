import React from "react";
import style from "./content.module.css"
import ArticleElement from "./article/articleElement";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    posts: state.postPreview.posts,
    totalPages: state.postPreview.totalPages
})


class Content extends React.Component {

    render() {

        const posts = this.props.posts.map((item, index) => <ArticleElement post={item} key={index}/>);

        return <div className={style.content_grid}>
            <div className={style.post_grid}>
                {posts}
            </div>

        </div>
    }
}

export default connect(mapStateToProps, null)(Content);