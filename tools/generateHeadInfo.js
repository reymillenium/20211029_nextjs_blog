const generateHeadInfo = (componentName, pageProps) => {
    let title = 'Rei’s Blog';
    let description = 'A personal Blog to share my thoughts about programming';

    switch (componentName) {
        case 'HomePage':
            title += ` | Home Page`;
            break;

        case `PostsIndexPage`:
            title += ` | Posts`;
            description = `Browse a list of posts`;
            break;

        case `PostsFeaturedIndexPage`:
            title += ` | Featured Posts`;
            description = `Browse a list of featured posts`;
            break;

        case 'PostsNewPage':
            title += ` | Add a new Post`;
            description = `Add your own post and share with the community`;
            break;

        case 'PostsShowPage':
            title += ` | ${pageProps.post.title}`;
            description = `${pageProps.post.summary}`;
            break;

        // case 'FilteredPostsPage':
        //     title = ` | Posts Special search`;
        //     description = ``;
        //     break;

        case 'ContactPage':
            title += ` | Contact Page`;
            description = `You can contact me this way`;
            break;

        case 'Error404':
            title += ` | The page doesn't exist`;
            description = `The resource you are looking for, does not exists`;
            break;
    }

    return {
        title: title,
        description: description,
    };

};

export default generateHeadInfo;