import styles from './GeneralInformation.module.css'

export const GeneralInformation = (props:any) => {
    const mapSocials = props.socialsObj.map((socailItem: any) => {
        return <img src= {socailItem.socialMediaIcon} alt = " "/>});

    return (
        <div className={styles.container}>
            <img src="./Logo.png" alt="Rent-a-car-logo" />
            <p>Our vision is to provide convenience and help increase your sales business.</p>
            <div className={styles.socials_container}>
                {mapSocials}
            </div>
        </div>
    )
}