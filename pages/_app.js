import '../styles/globals.css'
import Layout from "../components/ui/Layout/Layout";
import LayoutMaximilian from "../components/ui/LayoutMaximilian/LayoutMaximilian";
import generateHeadInfo from "../tools/generateHeadInfo";

function MyApp({Component, pageProps}) {
    const headInfo = generateHeadInfo(Component.name, pageProps);

    return (
        // <NotificationContextProvider>
            <LayoutMaximilian
                hideNavigation={Component.name === 'Error404'}
                headInfo={headInfo}
            >
                <Component {...pageProps} />
            </LayoutMaximilian>
        // </NotificationContextProvider>
    );
}

export default MyApp
