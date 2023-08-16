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
        <form className={styles.form}>
            <div className={styles.client_info}>
                <div>
                    <label>Имя:</label>
                    <input type='text' maxLength={'30'} autoComplete='false' name='name' required/>
                </div>
                <div>
                    <label>Фамилия:</label>
                    <input type='text' maxLength={'30'} autoComplete='false' name='surname' required/>
                </div>
                <div>
                    <label>Телефон:</label>
                    <input type="tel" value={phoneNumber} onChange={handleInputChange} placeholder="+7 (XXX) XXX-XX-XX" autoComplete='false'/>
                </div>
            </div>
            <div className={styles.service_customize}>
                <div>
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
                <div>
                    <label>Режим охраны:</label>
                    <div className={styles.radio_div}>
                        <input type='radio' name='time' id='time1' required/>
                        <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="time1">12 часов</label>
                        <input type='radio' name='time' id='time2' required/>
                        <label style={{fontWeight: 'normal', textDecoration: 'underline'}} htmlFor="time2">24 часа</label>
                    </div>
                </div>
            </div>
            
        </form>
    </div>
}

export default ApplicationFrom