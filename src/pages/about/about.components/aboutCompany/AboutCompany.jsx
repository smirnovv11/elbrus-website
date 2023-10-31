import { Link } from 'react-router-dom'
import styles from './AboutCompany.module.css'

const AboutCompany = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>О КОМПАНИИ</h1>
            <p>Эльбрус – это современная компания, специализирующаяся на обеспечении безопасности и защите вашего бизнеса, имущества и сотрудников. Миссия "Эльбрус" заключается в обеспечении надежной и эффективной защиты наших клиентов. Мы предлагаем широкий спектр услуг, адаптированных под потребности наших клиентов.</p>
            <label className={styles.services_p}>Частная охранная организация "Эльбрус" предоставляет следующие виды услуг:</label>
            <ul className={styles.services_list}>
                <li>Охрана объектов</li>
                <li>Юридические услуги</li>
                <li>Сопровождение грузов</li>
                <li>Вооруженная охрана</li>
                <li>Личная охрана</li>
                <li>Охрана массовых мероприятий</li>
            </ul>
            <div className={styles.employees}>
                <h1 className={styles.subtitle}>НАШИ СОТРУДНИКИ</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src='/images/license.png'></img>
                        Лицензированные и специально обученые
                    </div>
                    <div className={styles.card}>
                        <img src='/images/exp.png'></img>
                        Знают свои обязанности и имели опыт на подобных работах
                    </div>
                    <div className={styles.card}>
                        <img src='/images/suit.png'></img>
                        В форменном обмундировании
                    </div>
                    <div className={styles.card}>
                        <img src='/images/guard.png'></img>
                        Адекватны, сдержаны и стрессоустойчивы
                    </div>
                    <div className={styles.card}>
                        <img src='/images/strong.png'></img>
                        Обладают крепким телосложением
                    </div>
                    <div className={styles.card}>
                        <img src='/images/human.png'></img>
                        Презентабельно выглядят
                    </div>
                </div>
            </div>
            <Link className={styles.button} to={'/employees'}>Стать членом команды</Link>
            <hr/>
        </div>
    )
}

export default AboutCompany