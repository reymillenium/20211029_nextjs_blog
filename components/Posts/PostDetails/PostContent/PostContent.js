import {Fragment} from "react";
import styles from './PostContent.module.css';
import PostHeader from "../PostHeader/PostHeader";
import Markdown from "markdown-to-jsx";

const PostContent = (props) => {
    const {post} = props;
    // const {id: postId, title, image} = props.post;
    // const imagePath = `/images/posts/${postId}/${image}`;

    return (
        <Fragment>
            <article className={styles.content}>
                <PostHeader post={post}/>
                CONTENT:
                <br/>
                <Markdown>
                    {post && post.content && post.content}
                </Markdown>
            </article>
        </Fragment>
    );
};

export default PostContent;