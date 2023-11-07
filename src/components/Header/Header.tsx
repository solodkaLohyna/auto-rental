import Link from 'next/link'
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
                        <ul className={styles.page_navigation}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#working">How it works</Link></li>
                            <li><Link href="#content">Renta Details</Link></li>
                            <li><Link href="#whychooseus">Why Choose Us</Link></li>
                        </ul>
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