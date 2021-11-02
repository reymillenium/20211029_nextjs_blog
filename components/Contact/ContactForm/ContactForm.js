import styles from './ContactForm.module.css';
import {Fragment} from "react";

const ContactForm = () => {

    return (
        <Fragment>
            <section className={styles.contact}>
                <h1>How can I help you?</h1>

                <form className={styles.form}>
                    <div className={styles.controls}>
                        <div className={styles.control}>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id={'email'} name={'email'}/>
                        </div>

                        <div className={styles.control}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id={'name'} name={'name'}/>
                        </div>
                    </div>

                    <div className={styles.control}>
                        <label htmlFor="text">Message:</label>
                        <textarea name="text" id="text" rows="5"></textarea>
                    </div>

                    <div className={styles.actions}>
                        <button>Send Message</button>
                    </div>
                </form>
            </section>
        </Fragment>
    );
};

export default ContactForm;