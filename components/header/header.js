import styles from './Header.module.scss'
import Link from "next/link"
import { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
export default function Header() {
    const links = [
        {
            href: "/about",
            as: "/about.html",
            linkText: "about"
        },
        {
            href: "/blog",
            as: "/blog.html",
            linkText: "blog"
        }
    ]

    return (
        <header className={styles.header}>
            <a href="/" className={styles["link"]}>tdurtschi.com</a>
            <div className={styles["desktop-links"]}>
                {links.map(DesktopLink)}
            </div>
            <HamburgerNav links={links} />
        </header >
    )
}

const HamburgerNav = function (props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = function () {
        setIsOpen(!isOpen);
    }

    const multi = (...classes) => classes.reduce((prev, curr) => `${prev} ${curr}`, "");

    return (
        <>
            <div className={styles['hamburger-button']}>
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={handleClick}
                    width={16}
                    height={12}
                    strokeWidth={2}
                    rotate={0}
                    color='#085050'
                    borderRadius={0}
                    animationDuration={0.1}
                />
                {isOpen &&
                    <div className={multi(styles['mobile-links-container'], 'test')}>
                        {props.links.map((link) => <MobileLink link={link} handleClick={handleClick} />)}
                    </div>}
            </div>
        </>
    )
}

const DesktopLink = (props) =>
    <Link href={props.href} as={props.as}>
        <a className={styles["link"]} >{props.linkText}</a>
    </Link>

const MobileLink = (props) =>
    <Link href={props.link.href} as={props.link.as}>
        <a onClick={props.handleClick} className={styles["link"]} >{props.link.linkText}</a>
    </Link>
