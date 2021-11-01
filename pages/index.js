import {Fragment} from "react";
import Hero from "../components/ui/Hero/Hero";
import FeaturedPosts from "../components/Posts/FeaturedPosts/FeaturedPosts";

export const dummyPosts = [
    {
        id: 'p1',
        title: 'Post 1',
        summary: 'Post 1 summary',
        image: 'getting-started-nextjs.png',
        date: '2020-04-10',
        content: '# This is a first post',
        isFeatured: true,
    },
    {
        id: 'p2',
        title: 'Post 2',
        summary: 'Post 2 summary',
        image: 'nextjs-file-based-routing.png',
        date: '2021-08-11',
        content: '# This is a second post',
        isFeatured: true,
    },
];


const HomePage = () => {
    return (
        <Fragment>
            <Hero/>
            <FeaturedPosts posts={dummyPosts}/>
        </Fragment>
    );
};

export default HomePage;