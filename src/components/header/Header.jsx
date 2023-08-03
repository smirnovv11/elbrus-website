import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const setActive = ({isActive}) => ({
    backgroundColor: isActive ? '#ffe94d' : '#000',
    color: isActive ? '#000' : '#ffe32e'
})

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.left}>
                <NavLink to='/'><div className={styles.logo}></div></NavLink>
                <div>
                    <h1 className={styles.title}>ЭЛЬБРУС</h1>
                    <h2 className={styles.subtitle}>Охранная организация</h2>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.head_contacts}>
                    <p>МТС: +7 911 ХХХ-ХХ-ХХ</p>
                    <p>Tele2: +7 911 ХХХ-ХХ-ХХ</p>
                    <hr/>
                    <p>Адрес: ул. Пушкина</p>
                </div>
                <div className={styles.head_controls}>
                    <NavLink to='/' style={setActive}>Главная</NavLink>
                    <NavLink to='/services' style={setActive}>Наши услуги</NavLink>
                    <NavLink to='/about' style={setActive}>О компании</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header