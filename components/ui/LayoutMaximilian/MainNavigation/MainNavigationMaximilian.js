import {Fragment} from "react";
import styles from './MainNavigationMaximilian.module.css';
import Logo from "../../Logo/Logo";
import Link from "next/link";
import generateRoutes from "../../../../tools/generateRoutes";

const MainNavigationMaximilian = () => {
    const routes = generateRoutes();
    const {indexPath: postsIndexPath, featuredIndexPath: postsFeaturedIndexPath} = routes.posts;
    const {newPath: contactNewPath} = routes.contacts;
    const {homePath} = routes;

    let regularNavLinks = [
        {path: postsIndexPath, name: 'Posts'},
        {path: postsFeaturedIndexPath, name: 'Featured Posts'},
        {path: contactNewPath, name: 'Contact'},
    ].map(linkData => {
        return (
            <li key={linkData.path}>
                <Link href={linkData.path} passHref>
                    {linkData.name}
                </Link>
            </li>
        );
    });

    return (
        <Fragment>
            <header className={styles.header}>
                <Link href={homePath} passHref>
                    <a>
                        <Logo/>
                    </a>
                </Link>

                <nav>
                    <ul>
                        {regularNavLinks}
                    </ul>
                </nav>
            </header>
        </Fragment>
    );

};

export default MainNavigationMaximilian