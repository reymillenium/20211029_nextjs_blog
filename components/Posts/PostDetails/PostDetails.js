// import styles from './PostDetails.module.css';
import PostContent from "./PostContent/PostContent";
import {Fragment} from "react";

const PostDetails = (props) => {
    const {post} = props;

    return (
        <Fragment>
            <PostContent post={post} />
        </Fragment>
    );
};

export default PostDetails;