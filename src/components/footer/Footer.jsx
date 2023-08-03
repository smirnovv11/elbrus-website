import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.top_container}>
                <div className={styles.left}>
                    <div className={styles.logo}></div>
                    <div>
                        <h1>ЧОО "Эльбрус"</h1>
                        <p>© 2023 ООО ЧОО "Эльбус"</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <h3>fdsfds</h3>
                    <h3>fdsfds</h3>
                    <h3>fdsfds</h3>
                </div>
            </div>
            <hr/>
            <p className={styles.bottom_p}>© 2023 ООО ЧОО "Эльбус"</p>
        </div>
    )
}

export default Footer