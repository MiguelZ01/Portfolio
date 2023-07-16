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
            offset: -100
        });
    };

    return (
        <div className={styles.nav}>
            <div className={styles.name}>
                <Link to="home" onClick={() => handleLinkClick("home")}>
                    <h1>Miguel Zuluaga</h1>
                </Link>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link to="about" onClick={() => handleLinkClick("about")}>
                        <p>Sobre mí</p>
                    </Link>
                </div>
                <div className={styles.content}>
                    <Link to="portfolio" offset={-90} onClick={() => handleLinkClick("portfolio")} >
                        <p>Proyectos</p>
                    </Link>
                </div>
                <div className={styles.content}>
                    <Link to="contact" offset={-90} onClick={() => handleLinkClick("contact")} >
                        <p className={styles.contact}>Contacto</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default NavBar;