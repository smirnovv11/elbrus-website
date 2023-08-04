import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Menu from '../menu/Menu'
import Info from '../info/Info'

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
                <Info isDetailed={false} isColored={true}/>
                <Menu isColored={true}/>
            </div>
        </div>
    )
}

export default Header