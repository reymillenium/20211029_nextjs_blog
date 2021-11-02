import {Fragment} from "react";
import styles from './PostContent.module.css';
import PostHeader from "../PostHeader/PostHeader";
// import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import Image from "next/image";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// Not working -> Error: Uncaught ReferenceError: Cannot access WEBPACK_DEFAULT_EXPORT  before initialization"
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

// Works
// import {atomOneDarkReasonable} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
    const {post} = props;
    // const {id: postId, title, image} = props.post;
    // const imagePath = `/images/posts/${postId}/${image}`;


    const customRenderers = {
        // img(image) {
        //   console.log('image', image.src)
        //   return (
        //     < Image
        //       src={`${image.src}`}
        //       alt={image.alt}
        //       width={600}
        //       height={300}
        //     />
        //   );
        // },

        p(paragraph) {
            const { node } = paragraph;
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className={styles.image}>
                        < Image
                            // src={`/images/posts/${post.id}/${image.properties.src}`}
                            src={`${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const {node, inline, className, children, ...props} = code;
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={darcula}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        },
    }

    return (
        <Fragment>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={customRenderers}>
                {post && post.content && post.content}
            </ReactMarkdown>
        </Fragment>
    );
};

export default PostContent;