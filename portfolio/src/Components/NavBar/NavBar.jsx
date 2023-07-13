import styles from "./NavBar.module.css";
import { useEffect } from "react";
import { Link, animateScroll, scroller } from "react-scroll";

const NavBar = () => {
    useEffect(() => {
        animateScroll.scrollToTop({
            duration: 0,
        });
    }, []);

    const handleLinkClick = (target) => {
        scroller.scrollTo(target, {
            duration: 1800,
            smooth: "easeInOutQuint",
        });
    };

    return (
        <div className={styles.nav}>
            <div className={styles.name}>
                <Link to="home" onClick={() => handleLinkClick("home")}>
                    <h1>Miguel Zuluaga</h1>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link to="about" onClick={() => handleLinkClick("about")}>
                        <p>About me</p>
                    </Link>
                </div>
                <div className={styles.content}>
                    <Link to="portfolio" onClick={() => handleLinkClick("portfolio")}>
                        <p>Portfolio</p>
                    </Link>
                </div>
                <div className={styles.content}>
                    <Link to="contact" onClick={() => handleLinkClick("contact")}>
                        <p className={styles.contact}>Contact me</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NavBar;