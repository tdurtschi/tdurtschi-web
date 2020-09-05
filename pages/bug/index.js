
import { useEffect } from 'react'
import Footer from "../../components/footer/footer"
import styles from '../../styles/Bug.module.scss'
import useScript from '../../helpers/useScript'

export default function Bug() {
    useScript("/bugjs.bundle.js", "bundle");

    useEffect(() => {
        document.getElementById("bundle").addEventListener("load", () => {
            window.b = Game("#root");
            b.game.start();

            window.addBug = function () {
                var bug = b.bugFactory.build();
                b.game.addEntity(bug);
            }

            window.addPlant = function () {
                var plant = b.plantFactory.build();
                b.game.addEntity(plant);
            }
        })
    }, [])

    return (
        <>
            <div id="root" className={styles.root} />
            <div className={styles.earth} />
            <Footer>
                <p>
                    Last updated May 2020 <br />
                    <a onClick={() => window.addBug()} href="#">Add Bug</a>
                    <span>|</span>
                    <a onClick={() => window.addPlant()} href="#">Add Plant</a>
                    <span>|</span>
                    <a href="/">Go Back</a>
                </p>
            </Footer>
        </>
    )
}
