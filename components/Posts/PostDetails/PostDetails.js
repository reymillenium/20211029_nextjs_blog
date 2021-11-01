import styles from './PostDetails.module.css';
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import {Fragment} from "react";

const PostDetails = (props) => {
    const {post} = props;

    return (
        <Fragment>
            <article className={styles.content}>
                <PostHeader post={post}/>
                <PostContent post={post}/>
            </article>
        </Fragment>
    );
};

export default PostDetails;