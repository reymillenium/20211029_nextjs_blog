import {Fragment} from "react";
import FeaturedPosts from "../../components/Posts/FeaturedPosts/FeaturedPosts";
import {getFeaturedPosts} from "../../lib/markdownUtils";

const PostsFeaturedIndexPage = (props) => {
    const {posts} = props;
    return (
        <Fragment>
            <FeaturedPosts posts={posts}/>
        </Fragment>
    );
};

export default PostsFeaturedIndexPage;

export const getStaticProps = async () => {
    let posts;
    try {
        posts = await getFeaturedPosts();
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
        revalidate: 10,
    };
};