import { useMemo } from 'react'
import styles from './Info.module.css'

export const INFORMATION = {
    mtc: '+7 (916) 024-47-16',
    tele2: '+7 (910) 764-73-49',
    adress: 'Ткацкая улица, 17',
    email: 'elbrusinfo@internet.ru'
}

const fillPColor = (isColored) => { 
    if (!isColored) {
        return { color: '#9fa39e' }
    }
    return { }
}
const fillHrColor = (isColored) => { 
    if (!isColored) {
        return { backgroundColor: '#646464' }
    }
    return { }
}

const Info = ({isDetailed, isColored}) => {

    return (
        <div className={styles.head_contacts}>
            <p>МТС 1: <a href={`tel:${INFORMATION.mtc}`}><span style={fillPColor(isColored)}>{INFORMATION.mtc}</span></a></p>
            <p>MTC 2: <a href={`tel:${INFORMATION.tele2}`}><span style={fillPColor(isColored)}>{INFORMATION.tele2}</span></a></p>
            <hr style={fillHrColor(isColored)}/> 
            <p>Адрес: <span style={fillPColor(isColored)}>{INFORMATION.adress}</span></p>
            {isDetailed ? (
            <>
                <hr style={fillHrColor(isColored)}/> 
                <p>E-mail: <a href={`mailto:${INFORMATION.email}`}><span style={fillPColor(isColored)}>{INFORMATION.email}</span></a></p>
            </>
            ) : (<></>)}
        </div>
    )
}

export default Info