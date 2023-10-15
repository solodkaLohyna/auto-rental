import styles from './TabName.module.css'

export const TabName = (props:any) => {
    return (
            <div className={styles.tab}>
                <h2> {props.tabNameObj.tabName} </h2>
                <div className={styles.underline}> </div>
            </div>        
    )
}