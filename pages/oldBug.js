import Head from 'next/head'
import styles from '../styles/OldBug.module.scss'
import Footer from "../components/footer/footer"
import { useEffect } from 'react'

export default function OldBug() {
    useEffect(() => {
        window.PAUSE = false

        return () => {
            window.PAUSE = true
        }
    })

    return (
        <>
            <Head>
                <script type="text/javascript" src="/Scripts/util.js"></script>
                <script type="text/javascript" src="/Scripts/Environment.js"></script>
                <script type="text/javascript" src="/Scripts/Bug.js"></script>
                <script type="text/javascript" src="/Scripts/Grass.js"></script>
            </Head>
            <div className="container body-content">
                <div className={styles["earth"]}></div>
                <canvas className={styles["canvas-nature"]} id="canvas-nature"> </canvas>
                <script type="text/javascript" src="/Scripts/nature.js"></script>
            </div>
            <Footer>
                <p>
                    Last updated June 2021 <br />
                    <a onClick={() => window.addBug()} href="#">Add Bug</a>
                    <span>|</span>
                    <a href="/">Home</a>
                </p>
            </Footer>
        </>
    )
}
