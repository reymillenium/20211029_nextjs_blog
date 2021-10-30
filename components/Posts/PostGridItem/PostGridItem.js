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

    return (
        <Fragment>
            <li className={styles.post}>
                <Link href={postsShowPath(postId)}>
                    <a>
                        <div className={styles.image}>
                            <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
                        </div>

                        <div className={styles.content}>
                            <h3>{title}</h3>
                            <time>{humanReadableDate}</time>
                            <p>{summary}</p>
                        </div>
                    </a>
                </Link>
            </li>
        </Fragment>
    );
};

export default PostGridItem;