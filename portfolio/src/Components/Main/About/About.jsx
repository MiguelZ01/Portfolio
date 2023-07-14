import React from 'react'
import styles from './About.module.css'
import about from '../../../Assets/about.png'

export const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.card_about}>
                <h1>About me</h1>
                <h4>Desarrollador Web Full Stack apasionado por la creación de experiencias digitales. Con formación en logística industrial, una gran experiencia sobre la vida en el campo, estoy constantemente buscando nuevos retos para mejorar mis habilidades y ofrecer resultados de calidad.</h4>
                <h4>I have acquired knowledge in languages such as HTML, CSS, JavaScript and Python as well as in technologies such as React, Node.js and databases such as PostgreSQL. In addition, I have learned about agile methodologies, which has helped me to know that I have the ability to face new challenges in the workplace.</h4>

                <a href="https://drive.google.com/file/d/1pTG-qVpqKlRBQwN7NhcFtHSq9Rs3RaA4/view?usp=sharing" target='_blank' className={styles.button_about_link}>
                    <button className={styles.button_about}>
                        Know my CV
                    </button>
                </a>
            </div>
            <div className={styles.image_about}>
                <img className={styles.img_about} src={about} alt="About me" />
            </div>
        </div>
    )
}

export default About;