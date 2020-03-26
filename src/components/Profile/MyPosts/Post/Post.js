import React from "react";

import s from "./Post.module.css"

const Post = (props) => {
    return (


        <div className={s.item}>
            <div>
                {props.message}
            </div>
            <div>
                <span>
                    likes:</span> {props.likesCount}
            </div>
        </div>


    )
}

export default Post;