import {Fragment} from "react";
import styles from './PostContent.module.css';
import PostHeader from "../PostHeader/PostHeader";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const PostContent = (props) => {
    const {post} = props;
    // const {id: postId, title, image} = props.post;
    // const imagePath = `/images/posts/${postId}/${image}`;

    return (
        <Fragment>
            <ReactMarkdown remarkPlugins={remarkGfm}>
                {post && post.content && post.content}
            </ReactMarkdown>
        </Fragment>
    );
};

export default PostContent;