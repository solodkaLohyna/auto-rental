import styles from './WhyChooseUs.module.css'
import { Article } from '../Article/Article'

export const WhyChooseUs = (props: any) => {
    const mapArticle = props.articleObj.map((articleItem: any) => {
        return <Article articleObj={articleItem} />
    });

    return (
        <div className={styles.container}>
            <div className={styles.text_info}>
                <h1 className={styles.title}> Why choose us</h1>
                <p className={styles.description}>A high-performing web-based car rental system for any rent-a-car company and website</p>
            </div>
            <div className={styles.content}>
                <img src="/istockphoto-970371780-612x612.jpeg" alt="" />
                <div className={styles.description}>
                    {mapArticle}
                </div>
            </div>

        </div>
    )
}