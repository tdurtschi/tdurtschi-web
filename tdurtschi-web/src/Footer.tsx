import { ReactNode } from 'react'
import './Footer.css'

export default function Footer(props: { children: ReactNode }) {
    return (
        <footer className={`noselect`} >
            {props.children}
        </footer>
    )
}