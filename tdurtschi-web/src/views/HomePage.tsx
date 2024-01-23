import { useCallback, useEffect } from "react";
import Footer from "../Footer";
import "./HomePage.css";
import { Game } from "@tdurtschi/bug";
import { GameEngine } from "@tdurtschi/bug/dist/src/core/game-engine";

declare global {
  interface Window {
    b: {
      game: GameEngine;
    };
    addBug: () => any;
    addPlant: () => any;
  }
}

export default function Bug() {
  useEffect(() => {
    window.b = Game("#game-root");
    window.b.game.start();

    window.addBug = function () {
      window.b.game.addBug();
    };

    window.addPlant = function () {
      window.b.game.addPlant();
    };

    if (window.b.game.entityManager.getEntities().length < 3) {
      function* newEntityGen() {
        yield window.addBug();
        yield window.addBug();
        yield window.addPlant();
        yield window.addBug();
      }
      const newEntity = newEntityGen();

      setTimeout(() => newEntity.next(), 500);
      setTimeout(() => newEntity.next(), 1000);
      setTimeout(() => newEntity.next(), 1500);
      setTimeout(() => newEntity.next(), 2000);
    }
  }, []);

  return (
    <>
      <div id="game-root" className={"game-root"} />
      <div className={"earth"} />
      <Footer>
        <p>
          <a onClick={() => window.addBug()} href="#">
            Add Bug
          </a>
        </p>
      </Footer>
    </>
  );
}
