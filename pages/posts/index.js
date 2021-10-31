import {Fragment} from "react";
import Posts from "../../components/Posts/Posts/Posts";
import {dummyPosts} from "../index";

const PostsIndexPage = () => {
    return (
        <Fragment>
            <Posts posts={dummyPosts}/>
        </Fragment>
    );
};

export default PostsIndexPage;