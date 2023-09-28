import styles from './Contacts.module.css'
import { INFORMATION } from '../../../../components/info/Info'
import Socials from '../../../../components/socials/Socials'
import MapComponent from '../map/MapComponent'

const Contacts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>НАШИ КОНТАКТЫ</h1>
            <div className={styles.contacts}>
                <MapComponent/>
                <div className={styles.info}>
                        <h2>Адрес: </h2>
                        <p>{INFORMATION.adress}</p>
                        <hr/>
                        <h2>Телефоны для связи: </h2>
                        <p>МТС: <a href={`tel:${INFORMATION.mtc}`}><span style={{textDecoration: 'underline'}}>{INFORMATION.mtc}</span></a></p>
                        <p>Tele2: <a href={`tel:${INFORMATION.tele2}`}><span style={{textDecoration: 'underline'}}>{INFORMATION.tele2}</span></a></p>
                        <hr/>
                        <h2>Эл. почта: </h2>
                        <p><a href={`mailto:${INFORMATION.email}`}>{INFORMATION.email}</a></p>
                        <hr/>
                        <h2>Мессенджеры: </h2>
                        <Socials/>
                </div>
            </div>
        </div>
    )
}

export default Contacts