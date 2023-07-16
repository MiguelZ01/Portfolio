import React from 'react'
import styles from './About.module.css'
import about from '../../../Assets/about.png'

export const About = () => {
    return (
        <div className={styles.about} >
            <div className={styles.card_about}>
                <h1>Sobre mí</h1>
                <h4>Desarrollador Web Full Stack apasionado por la creación de experiencias digitales. Con formación en logística industrial, una gran experiencia sobre la vida en el campo, estoy constantemente buscando nuevos retos para mejorar mis habilidades y ofrecer resultados de calidad.</h4>
                <h4>He adquirido conocimientos en lenguajes como HTML, CSS, JavaScript y Python, al igual que en tecnologías como React, Node.js y bases de datos como PostgreSQL. Además, he aprendido sobre metodologías ágiles, lo que me ha ayudado a saber que tengo la capacidad de afrontar nuevos retos en el ámbito laboral.</h4>
                <br />
                <a href="https://drive.google.com/file/d/1ymHn5zpic1KrXakwZJzg6ngYRDMFgttN/view?usp=drive_link" target='_blank' className={styles.button_about_link}>
                    <button className={styles.button_about}>
                        Conocer mi CV
                    </button>
                </a>
            </div>
            <div className={styles.image_about} >
                <img className={styles.img_about} src={about} alt="About me" />
            </div>
        </div>
    )
}

export default About;