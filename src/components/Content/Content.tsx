import { Card } from "../Card/Card";
import { ContentTitle } from "../ContentTitle/ContentTitle"
// import { Tab } from "../Tab/Tab"
import { TabName } from "../TabName/TabName"
import styles from './Content.module.css'

export const Content =(props:any) => {
    const mapCard = props.cardObj.map((cardItem: any) =>{
        return <Card cardObj = {cardItem}/>
    });
    const mapTab = props.tabNameObj.map((tabNameItem: any) =>{
        return <TabName tabNameObj = {tabNameItem}/>
    });


    return(
        <div className={styles.content_container}>
            <ContentTitle/>
            <div className={styles.gallery_container}>
                <div className={styles.tabs_container}>
                    {mapTab}
                </div>
                <div className={styles.gallery}>
                    {mapCard}
                </div>
                
                <button className={styles.dont_click}>Don't click me =:C</button>
            </div>

        </div>    
    )
}