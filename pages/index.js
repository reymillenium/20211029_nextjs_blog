import {Fragment} from "react";
import Hero from "../components/ui/Hero/Hero";
import FeaturedPosts from "../components/Posts/FeaturedPosts/FeaturedPosts";

const HomePage = () => {

    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts/>
        </Fragment>
    );
};

export default HomePage;