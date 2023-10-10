import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles.head}>
        <div className={styles.header}>
            <div className={styles.logo_text}>
                <div className="logo"><img src="" /></div>
                <div className={styles.text}>
                    <p>Enterprise</p>
                    <p>rent-a-car</p>
                </div>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.page_navigation}>
                    <a href="">Home</a>
                    <a href="">How it Work</a>
                    <a href="">Rental Details</a>
                    <a href="">Why Choose Us</a>
                    <a href="">Testimonial</a>
                </div>
                <p>|</p>
                <div className={styles.account}>
                    <button className={styles.register}>Register</button>
                    <button className={styles.login}>Log In</button>
                </div>

            </nav>
        </div>
        </header>
    )
}