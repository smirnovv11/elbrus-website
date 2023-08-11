import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}></div>
            <h1>Загрузка страницы..</h1>
        </div>
    )
}

export default Loading