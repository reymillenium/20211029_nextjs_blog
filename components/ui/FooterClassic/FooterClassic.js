import styles from './FooterClassic.module.css';
import Image from "next/image";


const FooterClassic = () => {
    const websiteUrl = 'https://reiniergarcia.dev';
    const linkedinUrl = 'https://www.linkedin.com/in/reymillenium';
    const gitHubUrl = 'https://github.com/reymillenium';
    const stackOverflowUrl = 'https://stackoverflow.com/users/9616949/reinier-garcia?tab=profile';

    const addAnimationClassHandler = (event) => {
        // setTimeout(function () {
        //     event.target.classList.add("animated-hover");
        // }, 2500);
        // event.target.classList.add("animated-hover");
        event.target.classList.toggle("animated-hover");
    };

    const removeAnimationClassHandler = (event) => {
        setTimeout(function () {
            // event.target.classList.remove("animated-hover");
            event.target.classList.toggle("animated-hover");
        }, 1000);
    };


    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <div className={styles.Row}>
                    <div className={styles.Column}>
                        <p className={styles.Title}>About Us</p>
                        <a className={styles.Link} href="#">Story</a>
                        <a className={styles.Link} href="#">Clients</a>
                        <a className={styles.Link} href="#">Testimonials</a>
                    </div>
                    <div className={styles.Column}>
                        <p className={styles.Title}>Services</p>
                        <a className={styles.Link} href="#">Marketing</a>
                        <a className={styles.Link} href="#">Consulting</a>
                        <a className={styles.Link} href="#">Development</a>
                        <a className={styles.Link} href="#">Design</a>
                    </div>
                    <div className={styles.Column}>
                        <p className={styles.Title}>Contact Us</p>
                        {/*<a className={styles.Link} href="#">United States</a>*/}
                        {/*<a className={styles.Link} href="#">United Kingdom</a>*/}
                        {/*<a className={styles.Link} href="#">Australia</a>*/}
                        {/*<a className={styles.Link} href="#">Support</a>*/}
                        <a className={styles.Link} href="#"><Image src={'/images/site/flags/us.png'} width={16} height={11}/>&nbsp;&nbsp;&nbsp;United States</a>
                        <a className={styles.Link} href="#"><Image src={'/images/site/flags/gb.png'} width={16} height={11}/>&nbsp;&nbsp;&nbsp;United Kingdom</a>
                        <a className={styles.Link} href="#"><Image src={'/images/site/flags/au.png'} width={16} height={11}/>&nbsp;&nbsp;&nbsp;Australia</a>
                        <a className={styles.Link} href="#"><Image src={'/images/site/flags/us.png'} width={16} height={11}/>&nbsp;&nbsp;&nbsp;Support</a>
                    </div>

                    <div className={styles.Column}>
                        <p className={styles.Title}>Social</p>

                        <a className={styles.Link + ' faa-parent animated-hover'} href={websiteUrl} target={'_website'} onMouseEnter={removeAnimationClassHandler} onMouseLeave={addAnimationClassHandler}>
                            <i className={styles.Icon + " fas fa-globe faa-pulse faa-fast"}/>Website
                        </a>

                        <a className={styles.Link + ' faa-parent animated-hover'} href={linkedinUrl} target={'_linkedin'} onMouseEnter={removeAnimationClassHandler} onMouseLeave={addAnimationClassHandler}>
                            <i className={styles.Icon + " fab fa-linkedin faa-ring faa-slow"}/>Linkedin
                            {/*<i className={styles.Icon + " fab fa-linkedin-in faa-ring faa-slow"}/>Linkedin*/}
                        </a>

                        <a className={styles.Link + ' faa-parent animated-hover'} href={gitHubUrl} target={'_github'} onMouseEnter={removeAnimationClassHandler} onMouseLeave={addAnimationClassHandler}>
                            <i className={styles.Icon + " fab fa-github faa-tada faa-fast"}/>GitHub
                        </a>

                        <a className={styles.Link + ' faa-parent animated-hover'} href={stackOverflowUrl} target={'_stackoverflow'} onMouseEnter={removeAnimationClassHandler} onMouseLeave={addAnimationClassHandler}>
                            <i className={styles.Icon + " fab fa-stack-overflow faa-wrench faa-fast"}/>Stack Overflow
                        </a>
                    </div>
                </div>
            </div>
            {/*<div className={styles.box}>*/}
            {/*    <h2>Demo: Button Link with Rubber Band Animation on Hover</h2>*/}
            {/*    <a href="#" className={styles.buttonD}>Button</a>*/}
            {/*</div>*/}
        </div>
    );
};

export default FooterClassic;
