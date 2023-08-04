import Info from '../info/Info'
import Menu from '../menu/Menu'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.top_container}>
                <div className={styles.left}>
                    <div className={styles.logo}></div>
                    <div>
                        <h1>Эльбрус</h1>
                        <p>Охранная Организация</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.socials}>
                        <a href='https://www.viber.com/ru/' target='_blank'><img src='/images/viber.png'/></a>
                        <a href='https://www.whatsapp.com' target='_blank'><img src='/images/whatsapp.png'/></a>
                        <a href='https://www.telegram.org' target='_blank'><img src='/images/telegram.png'/></a>
                    </div>
                    <Info isDetailed={true} isColored={false}/>
                    <Menu isColored={false}/>
                </div>
            </div>
            <p className={styles.footer_text}>[Эльбрус - это мagnam illo quasi, exercitationem quibusdam libero at laudantium eius, nihil atque beatae est asperiores soluta. Mollitia omnis neque consequatur ab odit, quia possimus repellat, est veritatis excepturi itaque iste aut autem tempora sed.]</p>
            <hr/>
            <p className={styles.bottom_p}>© 2023 ООО ЧОО "Эльбус"</p>
        </div>
    )
}

export default Footer