import styles from '../Card/Card.module.css'

export const Card = (props: any) => {
    return (
        <div className={styles.wrap}>
            {/* <div className={styles.card_container}> */}
            <p>{props.cardObj.carName}</p>
            <div className={styles.description}>
                <p>&#36;{props.cardObj.price}.00/ <span>day</span></p>
                <button className=""> Rent Now</button>
                {/* </div> */}
            </div>
        </div>
    )
}