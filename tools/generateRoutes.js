const generateRoutes = () => {
    // *** <Posts> ***
    // Basic CRUD Get Routes:
    const postsIndexPath = `/posts`;
    const postsNewPath = `/posts/new`;
    const postsShowPath = postId => `/posts/show/${postId}`;
    const postsEditPath = postId => `/posts/edit/${postId}`;
    // Basic CRUD API Routes:
    // const postsApiIndexPath = `/api/posts`;
    const postsApiCreatePath = `/api/posts/create`;
    // const postsApiUpdatePath = `/api/posts/update`;
    // const postsApiDestroyPath = `/api/posts/destroy`;
    // Other Routes:
    const postsFeaturedIndexPath = `/posts/featured`;
    // const postsSlugPath = (...slug) => `/posts` + slug.map(slugItem => `/${slugItem}`).join('');
    // *** </Posts> ***

    // Others:
    const homePath = `/`;
    const contactPath = `/contact`;

    return {
        // Home (root route):
        homePath: homePath,

        // Posts:
        posts: {
            indexPath: postsIndexPath,
            newPath: postsNewPath,
            showPath: postsShowPath,
            editPath: postsEditPath,
            api: {
                createPath: postsApiCreatePath,
                // updatePath: postsApiUpdatePath,
                // destroyPath: postsApiDestroyPath,
            },
            featuredIndexPath: postsFeaturedIndexPath,
            // filteredPath: postsSlugPath,
        },

        users: {},

        // Others:
        contactPath: contactPath,
    };
};

export default generateRoutes;

// CRUD's Sequence Best Practices:
// index
// new
// create
// show
// edit
// update
// destroy