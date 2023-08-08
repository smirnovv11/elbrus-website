import styles from './IntermediateSlide.module.css'

const IntermediateSlide = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upperlayer}/>
            <div className={styles.panel}>
                <h2>[Информация о компании]</h2>
                <hr/>
                <p>[Здесь можно предоставить какую-либо краткую и полезную
                    информацию перед следующей секцией сайта]</p>
                <button>[Кнопка]</button>
            </div>
        </div>
    )
}

export default IntermediateSlide