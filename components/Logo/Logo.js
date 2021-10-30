import {Fragment} from "react";
import styles from './Logo.module.css';
import Image from "next/image";

const Logo = () => {
    return (
        <Fragment>
            <div className={styles.logo}>
                {/*`&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`*/}
                Rei&rsquo;s&nbsp;
                <Image src={'/images/site/blog_logo_transparent_860_x_886.png'} alt={'Rei\'s Blog Logo'} width={'40'} height={'40'}/>
            </div>
        </Fragment>
    );
};

export default Logo;