import styles from './IntermediateSlide.module.css'
import { Link } from 'react-router-dom';

const IntermediateSlide = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upperlayer}/>
            <div className={styles.panel}>
                <h2>Трудоустройство в "Эльбрус"</h2>
                <hr/>
                <p>Вы ответственный специалист? Мы рады видеть Вас в нашей КОМАНДЕ!
                </p>
                <Link className={styles.button} to={'/employees'}>Стать членом команды</Link>
            </div>
        </div>
    )
}

export default IntermediateSlide