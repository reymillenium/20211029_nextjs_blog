import {Fragment} from "react";
import Posts from "../../components/Posts/Posts/Posts";
import {getAllPosts} from "../../lib/markdownUtils";

const PostsIndexPage = (props) => {
    const {posts} = props;

    return (
        <Fragment>
            <Posts posts={posts}/>
        </Fragment>
    );
};

export default PostsIndexPage;

export const getStaticProps = async () => {
    let posts;
    try {
        posts = await getAllPosts();
    } catch (error) {
        // return {notFound: true};
        return {
            redirect: {
                destination: '/404',
            },
        };
    }

    return {
        props: {
            posts: posts,
        }, // will be passed to the page component as props
        revalidate: 1,
    };
};