import styles from './AboutCompany.module.css'

const AboutCompany = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>О КОМПАНИИ</h1>
            <p>[Эльбрус – это современная компания, специализирующаяся на обеспечении безопасности и защите вашего бизнеса, имущества и сотрудников. Эльбрус – это современная компания, специализирующаяся на обеспечении безопасности и защите вашего бизнеса, имущества и сотрудников. Миссия "Эльбрус" заключается в обеспечении надежной и эффективной защиты наших клиентов. Мы предлагаем широкий спектр услуг, адаптированных под потребности наших клиентов.]</p>
            <div className={styles.list}>
                <div className={styles.item}>
                    <h2>18<span style={{color: 'var(--main-color)'}}>+</span></h2>
                    <h3>лет опыта работы</h3>
                </div>
                <div className={styles.item}>
                    <h2>2000<span style={{color: 'var(--main-color)'}}>+</span></h2>
                    <h3>довольных клиентов были обеспечены надежной защитой</h3>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default AboutCompany