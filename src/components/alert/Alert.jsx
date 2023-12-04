import styles from './Alert.module.css'
import { useAlert } from './AlertContext'

const Alert = () => {

    const alert = useAlert()

    return (
        <div style={{
            display: alert.isAlert
        }}>
            <div className={styles.container} style={{backgroundColor: alert.isError ? '#cc0000' : 'rgb(5, 162, 5)'}}>
                <h1>{alert.isError ? 'Ошибка!' : 'Отпралено!'}</h1>
                <p>{alert.isError ? 'Поле \'Телефон\' не заполнено': 'Заявка успешно отправлена.'}</p>
            </div>
        </div>
    )
}

export default Alert