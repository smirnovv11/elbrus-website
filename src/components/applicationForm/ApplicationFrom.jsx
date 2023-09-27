import { scroller } from 'react-scroll';
import styles from './ApplicationFrom.module.css'
import { useState } from 'react';
import ApplicationFormProvider, { useForm } from './ApplicationFormContext';

export const scrollToForm = () => {
    scroller.scrollTo('application-form', {
      duration: 100,
      delay: 0,
      smooth: 'easeInQuad',
    });
};

const ApplicationFrom = ({bgColor}) => {

    
    const form = useForm();
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        form.changeData({ ...form.data, [name]: value });
    };
    
    const handlePhoneChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');
        if (input.length <= 11) {
            form.changeData({...form.data, phone: formatPhoneNumber(input)});
        }
    };

    const formatPhoneNumber = (value) => {
        const matches = value.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (matches) {
          const formatted = [
            '+7',
            matches[2] ? ' (' + matches[2] + ') ' : '',
            matches[3] ? matches[3] : '',
            matches[4] ? '-' + matches[4] : '',
            matches[5] ? '-' + matches[5] : ''
          ].join('');
    
          return formatted;
        }
        return value;
    };

    return (
    <>
        <div id="application-form" style={{backgroundColor: `${bgColor}`}} className={styles.container}>
        <div className={styles.panel}>
            <h1 className={styles.title}>Оформление заявки</h1>
            <hr></hr>
            <form className={styles.form} ref={form.form} onSubmit={form.sendEmail}>
                <div className={styles.client_info}>
                    <div className={styles.line_div}>
                        <label>Имя:</label>
                        <input type='text' value={form.data.name} onChange={handleInputChange} maxLength={'30'} autoComplete='false' name='name' required placeholder='Иван'/>
                    </div>
                    <div className={styles.line_div}>
                        <label>Фамилия:</label>
                        <input type='text' value={form.data.surname} onChange={handleInputChange} maxLength={'30'} autoComplete='false' name='surname' required placeholder='Иванов'/>
                    </div>
                    <div className={styles.line_div}>
                        <label>Телефон:</label>
                        <input type="tel" name='phone' value={form.data.phone} onChange={handlePhoneChange} placeholder="+7 (XXX) XXX-XX-XX" autoComplete='false'/>
                    </div>
                </div>
                <div className={styles.service_customize}>
                    <div className={styles.line}>
                        <label>Вид объекта:</label>
                        <select className={styles.select} type='select' name='type' required value={form.data.type} onChange={handleInputChange}>
                            <option>Частный объект</option>
                            <option>АЗС</option>
                            <option>Коттедж/Коттеджный поселок</option>
                            <option>Личная охрана</option>
                            <option>Дача/Дачный поселок</option>
                            <option>Склад</option>
                            <option>Стройка</option>
                            <option>Магазин/ТЦ</option>
                            <option>Мероприятие</option>
                            <option>Офис/Офисное здание</option>
                        </select>
                    </div>
                    <div className={styles.radio_div}>
                        <label>Режим охраны:</label>
                        <div>
                            <input type='radio' value='12 часов' checked={form.data.time === '12 часов'} onChange={handleInputChange} name='time' id='time1' required/>
                            <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="time1">12 часов</label>
                        </div>
                        <div>
                            <input type='radio' value='24 часа' checked={form.data.time === '24 часа'} onChange={handleInputChange} name='time' id='time2' required/>
                            <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="time2">24 часа</label>
                        </div>
                    </div>
                    <div className={styles.radio_div}>
                        <label>График работы:</label>
                        <div>
                            <input type='radio' value='Смена' checked={form.data.schedule === 'Смена'} onChange={handleInputChange} name='schedule' id='schedule1' required/>
                            <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="schedule1">Смена</label>
                        </div>
                        <div>
                            <input type='radio' value='Вахта' checked={form.data.schedule === 'Вахта'} onChange={handleInputChange} name='schedule' id='schedule2' required/>
                            <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="schedule2">Вахта</label>
                        </div>
                    </div>
                </div>
                <div className={styles.control_div}>
                    <button className={styles.black_btn}>Отправить</button>
                </div>
                
            </form>
        </div>
    </div>
    </>
    )
}

export default ApplicationFrom