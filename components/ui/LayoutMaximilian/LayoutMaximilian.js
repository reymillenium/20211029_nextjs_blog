import MainNavigationMaximilian from "./MainNavigation/MainNavigationMaximilian";
import styles from './LayoutMaximilian.module.css';
import FooterClassic from "../FooterClassic/FooterClassic";
import PageHead from "../PageHead";
import Notification from "../Notification/Notification";
// import {NotificationContext} from "../../store/notificationContext";
import {useContext} from "react";

function LayoutMaximilian(props) {
    const hideNavigation = props.hideNavigation || false;
    const navigation = (hideNavigation ? null : <MainNavigationMaximilian/>);
    // const {notification, hideNotification} = useContext(NotificationContext);

    return (
        <>
            <PageHead headInfo={props.headInfo}/>
            <div>
                {navigation}
                <main className={styles.main}>{props.children}</main>
                {/*{notification && <Notification {...notification} hideNotification={hideNotification}/>}*/}
                <FooterClassic/>
            </div>
        </>
    );
}

export default LayoutMaximilian;
