import styles from './Footer.module.scss'

export default function Footer({ children }) {
    return (
        <footer className={`noselect ${styles.footer}`} >
            {children}
        </footer>
    )
}