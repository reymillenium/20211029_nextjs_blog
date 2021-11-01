import {Fragment} from "react";
import PostDetails from "../../../components/Posts/PostDetails/PostDetails";
import {useRouter} from "next/router";
import {getAllPosts, getOneSinglePost} from "../../../lib/markdownUtils";

const PostsShowPage = (props) => {
    const router = useRouter();
    const query = router.query;
    const postId = query.postId || [];
    // const post = dummyPosts.find(dummyPost => dummyPost.id === postId) || tempPost;
    const {post} = props;

    console.log('PostsShowPage -> post = ', post);

    return (
        <Fragment>
            <h1>Post Details</h1>
            <PostDetails post={post}/>
        </Fragment>
    );
};

export async function getStaticPaths() {
    let paths = [];
    try {
        const posts = await getAllPosts();
        paths = posts.map(post => ({params: {postId: post.id.toString()},}));
    } catch (error) {
        console.log('error.message = ', error.message);
    }

    return {
        paths: paths,
        // If it fails pre-generating the dynamic age: With false (this is all the supported parameters) then it shows a 404 error -> 404 page
        //... and with true it then tries to generate a page for that meetupId, dynamically on the server for the incoming request,... How? by executing again the getStaticProps function?
        // Basically if he have hundred or thousands of dynamic pages, then we don't want to pre-generate all of them, but maybe just our most popular pages and then generate some of them and the rest gets generated dynamically on the server for the incoming request (whatever that means!)
        // False -> these are all the meetupIds, so NO fallback. Just show a 404 error page if the request has parameters not included in 'paths'
        // True -> there might be other meetupIds, so YES,... perform a fallback. Next.js will pre-generate the page just in time, but Next.js won't wait until is pre-generated, so it needs a fallback block in the page component function
        // blocking -> Similar to true, but the user won't see anything until the page was pre-generated in the server and then... the finished page will be served. Next.js will wait until is pre-generated just in time. No need to add a fallback block in the page component function (if (!product) {...)
        // However, in a production server it always shows a 404 error?:
        // fallback: true, // With true or with 'blocking': It will generate that page on demand and thereafter cache it. It will pre-generate it when needed
        fallback: 'blocking', // It won't render the function component directly. It will until executing getStaticProps and until the data is ready. If there is an error, it won't show the function component directly, as it will allow to execute the redirection. This avoids the necessity of a LoadingSpinner
        // true vs blocking: With true it will immediately return an empty page and then pull down the generated content once that's done, so we need to handle that case that the page doesn't have the data yet
        // with blocking the user won't see anything until the page was pre-generated and the finished page will be served
    };
}

export const getStaticProps = async (context) => {
    const postId = context.params.postId;
    let post;

    try {
        post = await getOneSinglePost(postId);
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
            post: post,
        }, // will be passed to the page component as props
        revalidate: 1,
    };

};

export default PostsShowPage;