import { scroller } from 'react-scroll';
import styles from './ApplicationFrom.module.css'
import { useState } from 'react';

export const scrollToForm = () => {
    scroller.scrollTo('application-form', {
      duration: 100,
      delay: 0,
      smooth: 'easeInQuad',
    });
};

const ApplicationFrom = ({bgColor}) => {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');

        if (input.length <= 11) {
            setPhoneNumber(formatPhoneNumber(input));
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

    return <div id="application-form" style={{backgroundColor: `${bgColor}`}} className={styles.container}>
        <h1 className={styles.title}>Оформление заявки заявки</h1>
        <hr></hr>
        <form className={styles.form}>
            <div className={styles.client_info}>
                <div className={styles.line_div}>
                    <label>Имя:</label>
                    <input type='text' maxLength={'30'} autoComplete='false' name='name' required placeholder='Иван'/>
                </div>
                <div className={styles.line_div}>
                    <label>Фамилия:</label>
                    <input type='text' maxLength={'30'} autoComplete='false' name='surname' required placeholder='Иванов'/>
                </div>
                <div className={styles.line_div}>
                    <label>Телефон:</label>
                    <input type="tel" value={phoneNumber} onChange={handleInputChange} placeholder="+7 (XXX) XXX-XX-XX" autoComplete='false'/>
                </div>
            </div>
            <div className={styles.service_customize}>
                <div className={styles.line}>
                    <label>Вид объекта:</label>
                    <select className={styles.select} type='select' required>
                        <option>Частный объект</option>
                        <option>Частный объектfsdfsdfddasdasdsa</option>
                        <option>Частный объект</option>
                        <option>Частный объект</option>
                        <option>Частный объект</option>
                        <option>Частный объект</option>
                        <option>Частный объект</option>
                        <option>Частный объект</option>
                        <option>Частный объект</option>
                    </select>
                </div>
                <div className={styles.radio_div}>
                    <label>Режим охраны:</label>
                    <div>
                        <input type='radio' name='time' id='time1' required/>
                        <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="time1">12 часов</label>
                    </div>
                    <div>
                        <input type='radio' name='time' id='time2' required/>
                        <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="time2">24 часа</label>
                    </div>
                </div>
                <div className={styles.radio_div}>
                    <label>График работы:</label>
                    <div>
                        <input type='radio' name='schedule' id='schedule1' required/>
                        <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="schedule1">Смена</label>
                    </div>
                    <div>
                        <input type='radio' name='schedule' id='schedule2' required/>
                        <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="schedule2">Вахта</label>
                    </div>
                </div>
            </div>
            <div className={styles.control_div}>
                <p>Расчетная стоимотсть от <span style={{textDecoration: 'underline', fontWeight: 'bold'}}>NUM</span> руб.</p>
                <button className={styles.black_btn}>Отправить</button>
            </div>
            
        </form>
    </div>
}

export default ApplicationFrom