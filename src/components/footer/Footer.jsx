import Info from '../info/Info'
import Menu from '../menu/Menu'
import Socials from '../socials/Socials'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.top_container}>
                <div className={styles.left}>
                    <div className={styles.logo}></div>
                    <div className={styles.title_container}>
                        <h1 className={styles.title}>ЭЛЬБРУС</h1>
                        <p className={styles.subtitle}>Охранная Организация</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.soc_info}>
                        <Socials isAdaptive={true}/>
                        <Info isDetailed={true} isColored={false}/>
                    </div>
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