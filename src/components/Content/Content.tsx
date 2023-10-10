import { ContentTitle } from "../ContentTitle/ContentTitle"
import { Tab } from "../Tab/Tab"
import { TabName } from "./TabName/TabName"
import styles from './Content.module.css'

export const Content =(props:any) => {
    const mapTabContent = props.tabObj.map((tabItem: any) =>{
        return <Tab tabObj = {tabItem}/>
    });
    const mapTab = props.tabNameObj.map((tabNameItem: any) =>{
        return <TabName tabNameItem = {tabNameItem}/>
    });


    return(
        <div className={styles.content_container}>
        <ContentTitle/>
        <div className={styles.tabs_container}>
            
        </div>
        </div>
        
    )
}