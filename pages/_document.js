import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    // Default structure
    // render() {
    //     return (
    //         <Html>
    //             <Head/>
    //             <body>
    //             <Main/>
    //             <NextScript/>
    //             </body>
    //         </Html>
    //     );
    // }
    // Customized structure
    render() {
        return (
            <Html lang={'en'}>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                {/* Allows to add html content outside of our application component tree (using react portals) */}
                <div id={'notifications'}/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;