import styles from './Employees.module.css'
import EmplForm from './emplForm/EmplForm'
import Alert from '../../components/alert/Alert'

const Employees = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Станьте членом команды</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src='/images/group.png'></img>
                        Сплоченный и поддерживающий коллектив;
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
                        Дополнительные и премиальные выплаты за добросовествый труд;
                    </div>
                    <div className={styles.card}>
                        <img src='/images/office.png'></img>
                        Различные охраняемые объекты (предприятия, офисы и др.);
                    </div>
                    <div className={styles.card}>
                        <img src='/images/moscow.png'></img>
                        Охрана объектов по Москве и Московской области;
                    </div>
                </div>
                <p className={styles.optional_text}>Руководство "Эльбрус" ценит труд сотрудников и готовы помогать различными способами.</p>
                <EmplForm/>
                <Alert/>
            </div>
        </>
    )
}

export default Employees