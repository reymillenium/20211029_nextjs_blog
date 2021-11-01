import {Fragment} from "react";
import Hero from "../components/ui/Hero/Hero";
import FeaturedPosts from "../components/Posts/FeaturedPosts/FeaturedPosts";
import {getAllPosts} from "../lib/markdownUtils";

const HomePage = (props) => {
    const {posts} = props;

    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={posts}/>
        </Fragment>
    );
};

export default HomePage;

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