import styles from './ContactForm.module.css';
import {Fragment, useRef, useContext, useEffect} from "react";
import generateRoutes from "../../../tools/generateRoutes";
import useInputReducer from "../../../hooks/use-input-reducer";
import * as validators from '../../../tools/validators';
import {NotificationContext} from "../../../store/notificationContext";

const ContactForm = () => {
    const routes = generateRoutes();
    const contactCreateRoute = routes.contacts.api.createPath;
    const notificationContext = useContext(NotificationContext);
    const {showNotification} = notificationContext;

    const {
        valueState: emailState,
        setValueIsTouchedState: setEmailIsTouchedState,
        valueIsValidState: emailIsValidState, valueInputIsInvalid: emailInputIsInvalid,
        valueInputChangeHandler: emailInputChangeHandler,
        // valueInputBlurHandler: emailInputBlurHandler,
        resetValueInput: resetEmailInput,
    } = useInputReducer(validators.emailValidator);

    const {
        valueState: nameState,
        setValueIsTouchedState: setNameIsTouchedState,
        valueIsValidState: nameIsValidState, valueInputIsInvalid: nameInputIsInvalid,
        valueInputChangeHandler: nameInputChangeHandler,
        // valueInputBlurHandler: nameInputBlurHandler,
        resetValueInput: resetNameInput,
    } = useInputReducer(validators.nameValidator);

    const {
        valueState: messageState,
        setValueIsTouchedState: setMessageIsTouchedState,
        valueIsValidState: messageIsValidState, valueInputIsInvalid: messageInputIsInvalid,
        valueInputChangeHandler: messageInputChangeHandler,
        // valueInputBlurHandler: messageInputBlurHandler,
        resetValueInput: resetMessageInput,
    } = useInputReducer(validators.nameValidator);


    const formIsValid = (emailIsValidState && nameIsValidState && messageIsValidState);
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const onAddContactHandler = async (contactData) => {
        showNotification({title: 'Contacting!', message: 'Sending the contact information...', status: 'pending'});
        const response = await fetch(`${contactCreateRoute}`, {
            method: 'POST',
            body: JSON.stringify(contactData), // stringify converts to Json string
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseData = await response.json();
        // console.log(responseData);
        const {message} = responseData;

        console.log('response.ok = ', response.ok);
        if (!response.ok) {
            showNotification({title: 'Error!', message: message || 'Something went wrong!', status: 'error'});
            return;
        }

        const {name} = responseData.contact;
        showNotification({title: `Success ${name}!`, message: message, status: 'success'});
    };

    async function submitFormHandler(event) {
        event.preventDefault();
        setEmailIsTouchedState(true);
        setNameIsTouchedState(true);
        setMessageIsTouchedState(true);
        emailRef.current.focus();

        if (!formIsValid) {
            setProperFocus();
            return;
        }
        // console.log('Submitted!. I did something!!');
        const contactData = {
            email: emailState,
            name: nameState,
            message: messageState,
        };
        await onAddContactHandler(contactData);

        resetEmailInput();
        resetNameInput();
        resetMessageInput();
    }

    const setProperFocus = () => {
        if (emailInputIsInvalid) {
            emailRef.current.focus();
        } else if (nameInputIsInvalid) {
            nameRef.current.focus();
        } else if (messageInputIsInvalid) {
            messageRef.current.focus();
        }
    }

    const emailValidityClasses = `${styles.control} ${emailInputIsInvalid ? styles.invalid : ''}`;
    const nameValidityClasses = `${styles.control} ${nameInputIsInvalid ? styles.invalid : ''}`;
    const messageValidityClasses = `${styles.control} ${messageInputIsInvalid ? styles.invalid : ''}`;

    const preventWhiteSpaceOnKeyDown = (e) => {
        if (e.key === " ") {
            e.preventDefault();
        }
    }

    useEffect(()=>{
        // Allows to focus after page reload:
        emailRef.current.focus();
    },[])

    return (
        <Fragment>
            <section className={styles.contact}>
                <h1>How can I help you?</h1>

                <form className={styles.form} onSubmit={submitFormHandler}>
                    <div className={styles.controls}>
                        <div className={emailValidityClasses}>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id={'email'}
                                name={'email'}
                                required
                                autoFocus={true}
                                // placeholder='Your email'
                                // aria-label='Your email'
                                ref={emailRef}
                                value={emailState}
                                onChange={emailInputChangeHandler}
                                // onBlur={emailInputBlurHandler}
                                onKeyDown={preventWhiteSpaceOnKeyDown}
                            />
                            {emailInputIsInvalid ? <p className={styles.ErrorText}>The Email must be valid.</p> : <p>&nbsp;</p>}
                        </div>

                        <div className={nameValidityClasses}>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id={'name'}
                                name={'name'}
                                // placeholder='Your email'
                                aria-label='Your name'
                                ref={nameRef}
                                value={nameState}
                                onChange={nameInputChangeHandler}
                                // onBlur={nameInputBlurHandler}
                            />
                            {nameInputIsInvalid ? <p className={styles.ErrorText}>The Name must be valid.</p> : <p>&nbsp;</p>}
                        </div>
                    </div>

                    <div className={messageValidityClasses}>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            aria-label='Your message'
                            ref={messageRef}
                            value={messageState}
                            onChange={messageInputChangeHandler}
                            // onBlur={messageInputBlurHandler}
                        />
                        {messageInputIsInvalid ? <p className={styles.ErrorText}>The Message must be valid.</p> : <p>&nbsp;</p>}
                    </div>

                    <div className={styles.actions}>
                        <button disabled={!formIsValid}>Send Message</button>
                    </div>
                </form>
            </section>
        </Fragment>
    );
};

export default ContactForm;