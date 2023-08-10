import styles from './Socials.module.css'

const handleStyle = (isAdaptive) => {
    if (isAdaptive) return styles.socials_media
    else return ''
}

const Socials = ({isAdaptive}) => {
    return (
        <div className={`${styles.socials} ${handleStyle(isAdaptive)}`}>
            <a href='https://www.viber.com/ru/' target='_blank'><img src='/images/viber.png'/></a>
            <a href='https://www.whatsapp.com' target='_blank'><img src='/images/whatsapp.png'/></a>
            <a href='https://www.telegram.org' target='_blank'><img src='/images/telegram.png'/></a>
        </div>
    )
}

export default Socials