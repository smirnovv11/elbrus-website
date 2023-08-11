import { Link } from "react-router-dom"
import styles from './NoPage.module.css'


const NoPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>4</h1>
                <h1>0</h1>
                <h1>4</h1>
            </div>
            <p className={styles.text}>Извините, данной страницы не существует. Вернуться на <Link to='/'>главную страницу</Link></p>
        </div>
    )
}

export default NoPage