import styles from './Instructions.module.css'

export const Instructions = (props: any) => {
    return (
        <div className={styles.container}>
            <img src={props.howItWorkObj.icon}/>
            <h1> {props.howItWorkObj.heading}</h1>
            <p> {props.howItWorkObj.paragraph}</p>
        </div>
    )
}