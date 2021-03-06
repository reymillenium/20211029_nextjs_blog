import Head from "next/head";

const PageHead = (props) => {
    const headInfo = props.headInfo || {};

    return (
        <Head>
            <title>{headInfo.title}</title>

            <meta property="og:type" content="website"/>
            <meta name="og:title" property="og:title" content={headInfo.title}/>
            <meta name={"description"} content={`${headInfo.description}`}/>
            <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'}/>
            <meta property="og:site_name" content="Rei's Blog"/>
            <meta charSet="utf-8"/>

            <link rel="shortcut icon" type={'image/png'} sizes={"16x16"} href="/images/site/blog_logo_green_line_white_860_x_886.png"/>
            <link rel="apple-touch-icon" href="/images/site/blog_logo_green_line_white_860_x_886.png"/>
        </Head>
    );
};

export default PageHead;