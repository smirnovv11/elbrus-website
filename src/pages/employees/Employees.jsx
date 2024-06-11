import styles from './Employees.module.css'
import EmplForm from './emplForm/EmplForm'
import Alert from '../../components/alert/Alert'

const Employees = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src='/images/group.png'></img>
                        Сплоченный коллектив;
                    </div>
                    <div className={styles.card}>
                        <img src='/images/shirt.png'></img>
                        Обеспечение всем необходимым оборудованием и экипировкой;
                    </div>
                    <div className={styles.card}>
                        <img src='/images/money.png'></img>
                        Своевременная оплата труда;
                    </div>
                    <div className={styles.card}>
                        <img src='/images/star.png'></img>
                        Премиальные выплаты и компенсационные выплаты;
                    </div>
                    <div className={styles.card}>
                    <img src='/images/cutlery.png'></img>
                        Питание;
                    </div>
                    <div className={styles.card}>
                        <img src='/images/briefcase.png'></img>
                        Курсы повышения квалификации;
                    </div>
                    <div className={styles.card}>
                        <img src='/images/moscow.png'></img>
                        Оказания охранных услуг на всей территории Российской Федерации.
                    </div>
                </div>
            </div>
            <EmplForm/>
            <Alert/>
        </>
    )
}

export default Employees