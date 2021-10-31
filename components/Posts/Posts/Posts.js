import styles from './Posts.module.css';
import {Fragment} from "react";
import PostsGrid from "../PostsGrid/PostsGrid";

const Posts = (props) => {
    const {posts} = props;
    return (
        <Fragment>
            <section className={styles.posts}>
                <h1>All Posts</h1>
                <PostsGrid posts={posts || []}/>
            </section>
        </Fragment>
    );
};

export default Posts;