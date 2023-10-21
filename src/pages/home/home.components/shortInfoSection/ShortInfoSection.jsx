import styles from './ShortInfoSection.module.css'
import { scrollToForm } from '../../../../components/applicationForm/ApplicationFrom';
import { Link } from 'react-router-dom';

const ShortInfoSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.main_section}>
                <div className={styles.face_info_container}>
                        <h1>Частная охранная ораганизация <span className={styles.colored_p}>"</span>Эльбрус<span className={styles.colored_p}>"</span></h1>
                        <p><span style={{fontWeight: 'bold', fontSize: '18pt'}}>Эльбрус</span> <span className={styles.colored_p} style={{fontSize: '18pt'}}>–</span> это современная компания, специализирующаяся
                            на обеспечении безопасности и защите вашего бизнеса,
                            имущества и сотрудников<span className={styles.colored_p}>.</span>
                        </p>
                        <h2>Наши цели:</h2>
                        <ul className={styles.list}>
                            <li>Мы предлагаем широкий спектр услуг, адаптированных под потребности наших клиентов.</li>
                            <li>Миссия "Эльбрус" заключается в обеспечении надежной и эффективной защиты наших клиентов.</li>
                            <li>Мы стремимся создать безопасную среду, где бизнесы могут процветать, а сотрудники и клиенты чувствовать уверенность и спокойствие.</li>
                        </ul>
                    </div>
                <div className={styles.white_panel_div}>
                    <div className={styles.white_panel}>
                            <h2>Ознакомтесь со списком предоставляемых услуг</h2>
                            
                            <p>Подробную информацию об услугах можно просмотреть на вкладке "Наши услуги"</p>
                            <Link className={styles.black_btn} to={'/services'}>К услугам</Link>
                    </div>
                    <div className={styles.white_panel}>
                            <h2>Оставьте вашу заявку на бесплатную консультацию!</h2>
                            
                            <p>И мы обязательно свяжемся с вами</p>
                            <button className={styles.order_btn} onClick={scrollToForm}>Отправить заявку</button>
                        </div>
                </div>
                <img className={styles.img_man} src='/images/preview.png'/>
            </section>
        </div>    
    )
}

export default ShortInfoSection