import {Fragment} from "react";
import {dummyPosts} from "../../index";
import PostDetails from "../../../components/Posts/PostDetails/PostDetails";
import {useRouter} from "next/router";

const PostsShowPage =  (props)  => {
    const router = useRouter();
    const query = router.query;
    const postId = query.postId || [];
    const post = dummyPosts.find(dummyPost => dummyPost.id === postId);

    console.log('PostsShowPage -> post = ', post);

    return (
        <Fragment>
            <h1>Post Details</h1>
            <PostDetails post={post}/>
        </Fragment>
    );
};

export default PostsShowPage;