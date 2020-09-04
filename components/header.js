import styles from '../styles/Header.module.scss'
import Link from "next/link"

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="/" className={styles["logo-text"]}>tdurtschi.com</a>
            <Link href="/about" as="/about.html">
                <a className={styles["link"]} >About</a>
            </Link>
        </div >
    )
}