import styles from './AdvantagesSection.module.css'

const AdvantagesSection = () => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Наши преимущества</h1>
        <div className={styles.content_container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h2>Глубокое понимание рисков и индивидуальный подход</h2>
                    <p>Компания "Эльбрус" выделяется благодаря своей способности глубоко анализировать уникальные риски, связанные с каждым бизнесом или объектом. Мы не предлагаем стандартные решения, а разрабатываем стратегии безопасности, опираясь на особенности и потребности клиента. Наша способность точно оценивать риски и прогнозировать угрозы позволяет предупреждать инциденты и минимизировать потенциальные убытки.</p>
                </li>
            </ul>
        </div>
        <img src='/images/shape1.png' className={`${styles.shape} ${styles.shape1}`}/>
        <img src='/images/shape2.png' className={`${styles.shape} ${styles.shape2}`}/>
        <img src='/images/shape3.png' className={`${styles.shape} ${styles.shape3}`}/>
    </div>
    )
}

export default AdvantagesSection