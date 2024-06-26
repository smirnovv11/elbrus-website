import styles from './AdvantagesSection.module.css'

const AdvantagesSection = () => {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Наши преимущества</h1>
        <hr/>
        <div className={styles.content_container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h2>Понимание рисков и индивидуальный подход</h2>
                    <p>Мы не предлагаем стандартные решения, а разрабатываем стратегии безопасности, опираясь на особенности и потребности клиента. Наша способность точно оценивать риски и прогнозировать угрозы позволяет предупреждать инциденты и минимизировать потенциальные убытки.</p>
                </li>
                <li className={styles.item}>
                    <h2>Интеграция технологий и оперативность</h2>
                    <p>«Эльбрус» всегда остается на передовой технологических инноваций в области охранной деятельности. Мы интегрируем передовые системы видеонаблюдения и контроля доступа, что позволяет реагировать быстро и эффективно на любые ситуации. Наша оперативность и способность быстро адаптироваться к изменяющимся условиям позволяют быть впереди потенциальных угроз.</p>
                </li>
                <li className={styles.item}>
                    <h2>Высокий профессионализм и доверие клиентов</h2>
                    <p>С момента своего основания компания «Эльбрус» заслужила репутацию надежного и ответственного партнера. Наша команда состоит из высококвалифицированных специалистов, прошедших строгий отбор и обучение. Большой опыт работы и положительные отзывы наших клиентов свидетельствуют о нашем высоком профессионализме и способности держать обещания.</p>
                </li>
                <li className={styles.item}>
                    <h2>Круглосуточная поддержка и оперативное реагирование</h2>
                    <p>«Эльбрус» предоставляет клиентам не только надежную защиту, но и круглосуточную поддержку. Оперативное реагирование на любые ситуации и готовность выйти на помощь в любое время суток позволяют клиентам чувствовать себя защищенными и уверенными в нашей поддержке.</p>
                </li>
                {/* <li className={styles.item}>
                    <h2>Партнерство и долгосрочные отношения</h2>
                    <p>Мы строим не просто рабочие отношения, а настоящие партнерства с нашими клиентами. Долгосрочные отношения основаны на взаимном доверии, внимании к деталям и постоянной готовности к сотрудничеству. «Эльбрус« всегда готов поддержать своих клиентов в их росте и успехах.</p>
                </li> */}
            </ul>
        </div>
        <img src='/images/shape1.png' className={`${styles.shape} ${styles.shape1}`}/>
        <img src='/images/shape2.png' className={`${styles.shape} ${styles.shape2}`}/>
        <img src='/images/shape3.png' className={`${styles.shape} ${styles.shape3}`}/>
    </div>
    )
}

export default AdvantagesSection