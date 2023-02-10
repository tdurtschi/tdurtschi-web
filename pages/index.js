
import { useEffect } from 'react'
import Footer from "../components/footer/footer"
import styles from '../styles/Bug.module.scss'

export default function Bug() {
    useEffect(() => {
        const { Game } = require("@tdurtschi/bug");
        window.b = Game("#root");
        b.game.start();

        window.addBug = function () {
            b.game.addBug();
        }

        window.addPlant = function () {
            b.game.addPlant();
        }
        console.log(b.game.entityManager);
        if(b.game.entityManager.getEntities().length <3 ){
            function* newEntityGen() {
                yield addBug();
                yield addBug();
                yield addPlant();
                yield addBug();
            }
            const newEntity = newEntityGen();

            setTimeout(() => newEntity.next(), 500);
            setTimeout(() => newEntity.next(), 1000);
            setTimeout(() => newEntity.next(), 1500);
            setTimeout(() => newEntity.next(), 2000);
        }
    }, [])

    return (
        <>
            <div id="root" className={styles.root} />
            <div className={styles.earth} />
            <Footer>
                <p>
                    <a onClick={() => window.addBug()} href="#">Add Bug</a>
                    <span>|</span>
                    Last update: Feb 2023 
                </p>
            </Footer>
        </>
    )
}
