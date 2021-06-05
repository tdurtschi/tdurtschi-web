
import { useEffect } from 'react'
import Footer from "../components/footer/footer"
import styles from '../styles/Bug.module.scss'

export default function Bug() {
    useEffect(() => {
        const { Game } = require("@tdurtschi/bug");
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

        addBug();
        addBug();
        addBug();
        setTimeout(() => {
            addPlant();
            addPlant();
            addPlant();
        }, 1000);
    }, [])

    return (
        <>
            <div id="root" className={styles.root} />
            <div className={styles.earth} />
            <Footer>
                <p>
                    Last updated June 2021 <br />
                    <a onClick={() => window.addBug()} href="#">Add Bug</a>
                    <span>|</span>
                    <a onClick={() => window.addPlant()} href="#">Add Plant</a>
                </p>
            </Footer>
        </>
    )
}
