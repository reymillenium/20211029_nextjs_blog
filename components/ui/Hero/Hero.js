import styles from './Hero.module.css';
import {Fragment} from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <Fragment>
            <section className={styles.hero}>
                <div className={styles.image}>
                    <Image src={'/images/site/rei_squared_picture.jpg'} alt={'An image showing Reinier'} width={300} height={300}/>
                </div>
                <h1>Hi, I&rsquo;m Reinier</h1>
                <p>I blog about web development (React & Next.js), as well as Ruby on Rails and Flutter</p>
            </section>
        </Fragment>
    );
};

export default Hero;