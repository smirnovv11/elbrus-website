import { scroller } from 'react-scroll';
import styles from './ApplicationFrom.module.css'
import { useState } from 'react';
import ApplicationFormProvider, { useForm } from './ApplicationFormContext';
import { useAlert } from '../alert/AlertContext';

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
        if (input.length == 4) {
            event.target.setSelectionRange(7, 7)
        }
        if (input.length <= 11) {
            form.changeData({...form.data, phone: formatPhoneNumber(input)});
        }
    };

    const formatPhoneNumber = (value) => {
        const matches = value.match(/^(\d{0,1})(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?$/);
        console.log(matches)
        console.log(value)
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
                <section>
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
                    <div className={styles.client_info}>
                        <div className={styles.line_div}>
                            <label>Вид объекта:</label>
                            <input type='text' value={form.data.object} onChange={handleInputChange} maxLength={'200'} autoComplete='false' name='object' required placeholder='Объект'/>
                        </div>
                        <div className={styles.line_div}>
                            <label>Компания:</label>
                            <input type='text' value={form.data.comp} onChange={handleInputChange} maxLength={'100'} autoComplete='false' name='comp' required placeholder='Компания'/>
                        </div>
                        <div className={styles.line_div}>
                            <label>Должность:</label>
                            <input type='text' value={form.data.pos} onChange={handleInputChange} maxLength={'100'} autoComplete='false' name='pos' required placeholder='Должность'/>
                        </div>
                    </div>
                </section>
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