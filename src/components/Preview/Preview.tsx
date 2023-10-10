import styles from "./Preview.module.css";

export const Preview = () => {
    return (
        <div className={styles.text_wrap}>
            <div className={styles.text}>
                <p className={styles.inscription}>100% Trusted Car rentel platform in the Bangladesh </p>
                <h1 className={styles.title}>Fast And Easy Way To  Rent A Car</h1>
                <p className={styles.description}>Our Car Rental  online booking system designed to meet the specific needs of car rental business owners. This easy-to-use car rental software will let you manage.</p>
            </div>
            <button className={styles.booking}>Booking Now</button>
        </div>
    ) 
}