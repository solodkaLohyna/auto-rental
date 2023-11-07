import styles from './Working.module.css'
import { Instructions } from '../Instructions/Instructions';

export const Working = (props: any) => {
    const mapInstruction = props.howItWorkObj.map((instructionItem: any) =>{
        return <Instructions howItWorkObj = {instructionItem}/>
    });
    return(
        <section className={styles.wrap} id='working'>
            <div className={styles.container}>
                <div className={styles.inscription}>
                    <h1>How it work</h1>
                    <p>A high-performing web-based car rental system for any rent-a-car company and website</p>
                </div>
                <div className={styles.illustration}>
                    {mapInstruction}
                </div>
            </div>
        </section>
    )
}