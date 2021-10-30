import styles from './Hero.module.css';
import {Fragment} from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <Fragment>
            <section className={styles.hero}>
                <div className={styles.image}>
                    <Image src={'/images/rei_squared_picture.jpg'} width={1000} height={1000}/>
                </div>
                <h1>Hi, I'm Reinier</h1>
                <p>I blog about web development - especially frontend frameworks like Angular or Next.js.</p>
                {/*<p>(React is not a Framework)</p>*/}
            </section>
        </Fragment>
    );
};

export default Hero;