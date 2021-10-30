import styles from './PostGridItem.module.css';
import {Fragment} from "react";
import Link from "next/link";
import generateRoutes from "../../../tools/generateRoutes";
import Image from "next/image";

const PostGridItem = (props) => {
    const postsRoutes = generateRoutes().posts;
    const {showPath: postsShowPath} = postsRoutes;
    const {id: postId, title, image, summary, date} = props.post;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    });
    const imagePath = `/images/posts/${postId}/${image}`;
    console.log('imagePath = ', imagePath);

    return (
        <Fragment>
            <li className={styles.post}>
                <Link href={postsShowPath(postId || 1)}>
                    <a>
                        <div className={styles.image || ''}>
                            <Image src={imagePath} alt={title} width={300} height={200}/>
                        </div>

                        <div className={styles.content}>
                            <h3>{title || 'The title'}</h3>
                            <time>{humanReadableDate || 'February 10th 2022'}</time>
                            <p>{summary || 'The summary of the post'}</p>
                        </div>
                    </a>
                </Link>
            </li>
        </Fragment>
    );

};

export default PostGridItem;