import styles from './ShortInfoSection.module.css'
import { scrollToForm } from '../../../../components/applicationForm/ApplicationFrom';
import { Link } from 'react-router-dom';

const ShortInfoSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.main_section}>
                <div className={styles.face_info_container}>
                        <h1><span className={styles.colored_p}>«</span>Эльбрус<span className={styles.colored_p}>»</span> - это Ваш выбор!</h1>
                        <h2>Наши достоинства:</h2>
                        <ul className={styles.list}>
                            <li>Связь по телефону и почте 24 часа в сутки, 7 дней в неделю;</li>
                            <li>Оперативная информация  о существующих предложениях по обеспечению безопасности на Объекте Заказчика;</li>
                            <li>Комплексное обследование территории и внесение рекомендаций  по совершенствованию систем безопасности на Объекте Заказчика;</li>
                            <li>Согласование условий Договора в кратчайшие сроки с учетом всех пожеланий Заказчика;</li>
                            <li>Формирование кадрового состава на Объекте, оснащение сотрудников необходимыми средствами в соответствии с пожеланиями Заказчика;</li>
                            <li>Берем ответственность за Вашу безопасность на себя!</li>
                        </ul>
                    </div>
                <div className={styles.white_panel_div}>
                    <div className={styles.white_panel}>
                            <h2>Нам доверяют свою безопасность</h2>
                            
                            {/* <p>Подробную информацию об объектах можно просмотреть в блоке "Обслуживаемые объекты".</p> */}
                            <Link className={styles.black_btn} to={'/services'}>К объектам</Link>
                    </div>
                    <div className={styles.white_panel}>
                            <h2>Оставьте заявку и мы незамедлительно приступим к организации вашей безопасности</h2>
                            
                            {/* <p>Оставьте заявку и мы незамедлительно приступим к организации вашей безопасности.</p> */}
                            <button className={styles.order_btn} onClick={scrollToForm}>Отправить заявку</button>
                        </div>
                </div>
                <img className={styles.img_man} src='/images/preview.png'/>
            </section>
        </div>    
    )
}

export default ShortInfoSection