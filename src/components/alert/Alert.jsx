import styles from './Alert.module.css'
import { useAlert } from './AlertContext'

const Alert = () => {

    const alert = useAlert()

    return (
        <div style={{
            display: alert.isAlert
        }}>
            <div className={styles.container}>
                <h1>Отпралено!</h1>
                <p>Заявка успешно отправлена.</p>
            </div>
        </div>
    )
}

export default Alert