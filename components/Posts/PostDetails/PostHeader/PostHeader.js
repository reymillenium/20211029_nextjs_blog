import {Fragment} from "react";
import styles from './PostHeader.module.css';
import Image from "next/image";

const PostHeader = (props) => {
    const {id: postId, title, image} = props.post;
    const imagePath = `/images/posts/${postId}/${image}`;

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>{title}</h1>
                <Image src={imagePath} alt={title} width={200} height={150}/>
            </header>
        </Fragment>
    );
};

export default PostHeader;