import {Fragment} from "react";
// import Hero from "../../components/ui/Hero/Hero";
import FeaturedPosts from "../../components/Posts/FeaturedPosts/FeaturedPosts";
import {dummyPosts} from "../index";

const PostsFeaturedIndexPage = () => {
    return (
        <Fragment>
            {/*<Hero/>*/}
            <FeaturedPosts posts={dummyPosts}/>
        </Fragment>
    );
};

export default PostsFeaturedIndexPage;