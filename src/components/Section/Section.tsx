import styles from "./Section.module.css"

export const Section = (props: any) => {
    const mapRegularText = props.sectionObj.regularText.map((regularTextItem: any) => {
        return <p>{regularTextItem.text}</p>
    })
    return (
        <div className={styles.container}>
            <p style={{fontWeight: "bold", fontSize: "20px"}}>{props.sectionObj.boldText}</p>
            {mapRegularText}
        </div>
    )
}