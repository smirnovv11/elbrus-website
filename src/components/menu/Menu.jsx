import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
import { useEffect, useMemo } from 'react';

const MAIN_COLOR = '#fbcb00';
const SUB_COLOR = '#fbcb00'
const GREY_COLOR = '#545454';
const SUBGREY_COLOR = '#333333';

const Menu = ({isColored}) => {

    const setActive = useMemo(() => {
        if (isColored) {
            return ({isActive}) => ({
                backgroundColor: isActive ? SUB_COLOR : '#000',
                color: isActive ? '#000' : MAIN_COLOR
            });
        }
        else {
            return ({isActive}) => ({
                backgroundColor: isActive ? SUBGREY_COLOR : '#000',
                color: isActive ? '#a3a3a3' : GREY_COLOR
            });
        }
    }, [])
    const mainStyle = useMemo(() => {
        if (isColored) {
            return styles.head_controls
        }
        else {
            return `${styles.head_controls} ${styles.head_controls_footer}`
        }
    }, [])

    return (
        <div className={mainStyle}>
                    <NavLink to='/' style={setActive}>Главная</NavLink>
                    <NavLink to='/services' style={setActive}>Наши услуги</NavLink>
                    <NavLink to='/about' style={setActive}>О компании</NavLink>
        </div>
    )
}

export default Menu