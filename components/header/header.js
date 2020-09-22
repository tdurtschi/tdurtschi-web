import styles from './Header.module.scss'
import Link from "next/link"

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="/" className={styles["link"]}>tdurtschi.com</a>
            <Link href="/about" as="/about.html">
                <a className={styles["link"]} >about</a>
            </Link>
            <Link href="/blog" as="/blog.html">
                <a className={styles["link"]} >blog</a>
            </Link>
        </div >
    )
}