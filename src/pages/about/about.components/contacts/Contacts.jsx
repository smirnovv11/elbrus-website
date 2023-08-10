import styles from './Contacts.module.css'
import { INFORMATION } from '../../../../components/info/Info'
import Socials from '../../../../components/socials/Socials'

const Contacts = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>НАШИ КОНТАКТЫ</h1>
            <div className={styles.contacts}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.6198515641914!2d37.623363261466!3d55.733800393459404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b0360aab955%3A0xcfadbdf5f177e68d!2z0YPQuy4g0JHQvtC70YzRiNCw0Y8g0J7RgNC00YvQvdC60LAsIDU2INGB0YLRgNC-0LXQvdC40LUgOCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExOTAxNw!5e0!3m2!1sru!2sby!4v1691658456342!5m2!1sru!2sby"></iframe>
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