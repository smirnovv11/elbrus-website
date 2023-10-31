import { useRef } from 'react';
import styles from './EmplForm.module.css'
import emailjs from '@emailjs/browser';
import { useAlert } from '../../../components/alert/AlertContext';

const EmplForm = () => {

    const form = useRef();
    const alert = useAlert()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eqbemnn', 'template_fo137dr', form.current, '8VrACJdCdG9bli8F3')
        .then((result) => {
            alert.sendAlert()
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    const handlePhoneChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');

        if (input.length <= 11) {
            event.target.value = (formatPhoneNumber(input));
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
        <div className={styles.main_div}>
            <div className={styles.container}>
                <h1>Оформление заявки</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>ФИО: </label>
                        <input type="text" name="fullname" required/>
                        <label>Телефон: </label>
                        <input type="tel" name='phone' required onChange={handlePhoneChange} maxLength={18} placeholder="+7 (XXX) XXX-XX-XX" autoComplete='false'/> 
                    <div>
                    </div>
                        <label>Email: </label>
                        <input type="email" name="email" required/>
                        <label>Возраст: </label>
                        <input type="number" name="age" min={18} max={80}/>
                    </div>
                    <div className={styles.exp_div}>
                        <label>Опыт работы: </label>
                        <input type="number" name="exp" min={0} max={70}/>
                        <label>Сфера работы: </label>
                        <input type="text" name="area"/>
                    </div>
                    <div>
                        <label htmlFor='certificate' className={styles.exp_title}>Наличие удостоверения охранника: </label>
                        <input type="checkbox" id='certificate' name="certificate"/>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}

export default EmplForm