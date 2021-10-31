import styles from './FeaturedPosts.module.css';
import {Fragment} from "react";
import PostsGrid from "../PostsGrid/PostsGrid";

const FeaturedPosts = (props) => {
    const {posts} = props;
    return (
        <Fragment>
            <section className={styles.latest}>
                <h2>Featured Posts</h2>
                <PostsGrid posts={posts || []}/>
            </section>
        </Fragment>
    );
};

export default FeaturedPosts;