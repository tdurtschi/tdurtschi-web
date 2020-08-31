import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
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
            <footer className={`noselect ${styles["footer"]}`} >
                <p>
                    Last updated May 2020 <br />
                    <a onClick={() => window.addBug()} href="#">Add Bug</a>
                    <span>|</span>
                    <a href="/bug">Bug 2.0</a>
                </p>
            </footer>
        </>
    )
}
