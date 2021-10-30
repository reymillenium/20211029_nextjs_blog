import styles from './FeaturedPosts.module.css';
import {Fragment} from "react";
import PostsGrid from "../PostsGrid/PostsGrid";

const FeaturedPosts = () => {
    return (
        <Fragment>
            <section className={styles.latest}>
                <h2>Featured Posts</h2>
                <PostsGrid/>
            </section>
        </Fragment>
    );

};

export default FeaturedPosts;