
import { useEffect } from 'react'
import Footer from "../components/footer/footer"
import styles from '../styles/Bug.module.scss'

export default function Bug() {
    useEffect(() => {
        const { Game } = require("@tdurtschi/bug");
        window.b = Game("#root");
        b.game.start();
        console.log(b);
        window.addBug = function () {
            var bug = b.game.bugFactory.build();
            b.game.entityManager.addEntity(bug);
        }

        window.addPlant = function () {
            var plant = b.game.plantFactory.build();
            b.game.entityManager.addEntity(plant);
        }
        console.log(b.game.entityManager);
        if (b.game.entityManager.getEntities().length < 3) {
            function* newEntityGen() {
                yield addBug();
                yield addBug();
                yield addPlant();
                yield addBug();
                yield addPlant();
                yield addPlant();
            }
            const newEntity = newEntityGen();

            setTimeout(() => newEntity.next(), 500);
            setTimeout(() => newEntity.next(), 1000);
            setTimeout(() => newEntity.next(), 1500);
            setTimeout(() => newEntity.next(), 2000);
            setTimeout(() => newEntity.next(), 2500);
            setTimeout(() => newEntity.next(), 3000);
        }
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
