import styles from "./Article.module.css"

export const Article = (props:any) => {
    return (
        <div className={styles.container}>
            <img src={props.articleObj.icon} alt="" />
            <div className={styles.text_info}> 
                <h1>{props.articleObj.title}</h1>
                <p>{props.articleObj.description}</p>
            </div>
           
        </div>
    )
} 