import styles from '../styles/Header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="/" className={styles["logo-text"]}>tdurtschi.com</a>
            <a className={styles["link"]} href="/about">About</a>
        </div>
    )
}