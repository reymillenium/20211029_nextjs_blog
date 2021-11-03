import styles from './Notification.module.css';
import ReactDOM from 'react-dom';

function Notification(props) {
    const {title, message, status, hideNotification} = props;
    const notificationClasses = `${styles.notification} ${styles[status]}`;

    return ReactDOM.createPortal((
        <div className={notificationClasses} onClick={hideNotification}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    ), document.getElementById('portal_notifications'));
}

export default Notification;