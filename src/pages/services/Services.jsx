import ApplicationFrom from '../../components/applicationForm/ApplicationFrom'
import styles from './Services.module.css'

const Services = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title_container}>
                <h1>Наши услуги</h1>
                <hr className={styles.hr}></hr>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h2>Услуга №1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam qui molestias provident vitae atque suscipit libero 
                        distinctio voluptas reiciendis expedita sequi, architecto 
                        dolore aspernatur eaque excepturi ad impedit reprehenderit! 
                        Vero in molestias vitae vel earum esse assumenda numquam, facere 
                        doloribus pariatur modi alias praesentium eaque minima nam perspiciatis 
                        mollitia! Incidunt!</p>
                </div>
                <div className={styles.card}>
                    <h2>Услуга №2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam qui molestias provident vitae atque suscipit libero 
                        distinctio voluptas reiciendis expedita sequi, architecto 
                        dolore aspernatur eaque excepturi ad impedit reprehenderit! 
                        Vero in molestias vitae vel earum esse assumenda numquam, facere 
                        doloribus pariatur modi alias praesentium eaque minima nam perspiciatis 
                        mollitia! Incidunt!</p>
                </div>
                <div className={styles.card}>
                    <h2>Услуга №3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam qui molestias provident vitae atque suscipit libero 
                        distinctio voluptas reiciendis expedita sequi, architecto 
                        dolore aspernatur eaque excepturi ad impedit reprehenderit! 
                        Vero in molestias vitae vel earum esse assumenda numquam, facere 
                        doloribus pariatur modi alias praesentium eaque minima nam perspiciatis 
                        mollitia! Incidunt!</p>
                </div>
                <div className={styles.card}>
                    <h2>Услуга №4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam qui molestias provident vitae atque suscipit libero 
                        distinctio voluptas reiciendis expedita sequi, architecto 
                        dolore aspernatur eaque excepturi ad impedit reprehenderit! 
                        Vero in molestias vitae vel earum esse assumenda numquam, facere 
                        doloribus pariatur modi alias praesentium eaque minima nam perspiciatis 
                        mollitia! Incidunt!</p>
                </div>
                <div className={styles.card}>
                    <h2>Услуга №5</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam qui molestias provident vitae atque suscipit libero 
                        distinctio voluptas reiciendis expedita sequi, architecto 
                        dolore aspernatur eaque excepturi ad impedit reprehenderit! 
                        Vero in molestias vitae vel earum esse assumenda numquam, facere 
                        doloribus pariatur modi alias praesentium eaque minima nam perspiciatis 
                        mollitia! Incidunt!</p>
                </div>
                <div className={styles.card}>
                    <h2>Услуга №6</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam qui molestias provident vitae atque suscipit libero 
                        distinctio voluptas reiciendis expedita sequi, architecto 
                        dolore aspernatur eaque excepturi ad impedit reprehenderit! 
                        Vero in molestias vitae vel earum esse assumenda numquam, facere 
                        doloribus pariatur modi alias praesentium eaque minima nam perspiciatis 
                        mollitia! Incidunt!</p>
                </div>
            </div>
            <div className={styles.info}>
                    <div>
                        <h2>Как осуществляется процесс оказа услуг: </h2>
                        <ol>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorum rerum alias magni earum unde et doloremque perspiciatis sint non!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil neque vel numquam quas natus dolorum consequatur quasi ex. Reprehenderit ex facilis molestias ipsam eligendi sapiente corrupti quia repellat nam quidem?</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolorum rerum alias magni earum unde et doloremque perspiciatis sint non!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil neque vel numquam quas natus dolorum consequatur quasi ex. Reprehenderit ex facilis molestias ipsam eligendi sapiente corrupti quia repellat nam quidem?</li>
                        </ol>
                    </div>
                </div>
            <ApplicationFrom bgColor={'#ebebeb'}/>
        </div>
    )
}

export default Services