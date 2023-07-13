import React from 'react'
import styles from './About.module.css'
import about from '../../../Assets/about.png'

export const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.card_about}>
                <h1>About me</h1>
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus aut vitae, enim provident minima neque facilis maiores fugiat, dolorem nihil accusantium iste quam aperiam tempora totam quae. Quaerat, eius ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quis error cumque praesentium minima sed pariatur debitis magni repellat? Nisi,

                    aliquid! Itaque similique est veritatis porro deserunt amet minima unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ducimus voluptatibus dolore nostrum exercitationem perferendis nam veniam quisquam quam velit, aliquid amet reprehenderit eius alias beatae ab. Harum, id iusto?</h4>
            </div>
            <div className={styles.image_about}>
                <img className={styles.img_about} src={about} alt="About me" />
            </div>
        </div>
    )
}

export default About;