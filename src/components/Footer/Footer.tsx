import styles from "./Footer.module.css"

import { socials } from '@/src/components/socials'
import { sections } from "@/src/components/footer-sections"
import { Section } from "../Section/Section"
import { GeneralInformation } from "../GeneralInformation/GeneralInformation"

export const Footer = () => {
    const mapSection = sections.map((sectionItem: any) => {
        return <Section sectionObj={sectionItem} />
    });

    return (
        <footer className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.container}>
                    <GeneralInformation socialsObj={socials} />
                    <div className={styles.sections_container}>
                        {mapSection}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>©2023 Auto Fast. All rights reserved</p>
                    <div className={styles.rights}>
                        <p>Privacy & Policy</p>
                        <p>Terms & Condition</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}