import styles from './PostsGrid.module.css';
import {Fragment} from "react";
import PostGridItem from "../PostGridItem/PostGridItem";

const PostsGrid = (props) => {
    const {posts} = props;
    const postsGridItems = (posts || []).map(post => <PostGridItem key={post.id} post={post}/>);

    return (
        <Fragment>
            <ul className={styles.grid}>
                {postsGridItems}
            </ul>
        </Fragment>
    );

};

export default PostsGrid;