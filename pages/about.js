import styles from "../styles/About.module.scss";
import Footer from "../components/footer/footer";
import Link from "next/link";
const githubUrl = "https://github.com/tdurtschi/tdurtschi-web";

export default function About() {
  return (
    <>
      <div className="container">
        <h2>About This Site</h2>
        <p>
          This is the personal website for Teagan Durtschi, software engineer.{" "}
        </p>
        <p>This website is built with Next.js.&nbsp;
          <a href={githubUrl}>It's open source!</a>
        </p>
        <h2>Other Projects</h2>
        <p>
        <a href="//tdurtschi.com/block-game">- Block Game</a>
        </p>
        <h2>Contact Info</h2>
        <p className={styles.contact}>
          <strong>Email: </strong>
          <a href="mailto:teagan@tdurtschi.com">
            teagan@tdurtschi.com
          </a>
        </p>
        <p className={styles.contact}>
          <strong>GitHub: </strong>
          <a href="https://github.com/tdurtschi">
            https://github.com/tdurtschi
          </a>
        </p>
        <p className={styles.contact}>
          <strong>LinkedIn: </strong>
          <a href="https://www.linkedin.com/in/teagandurtschi/">
            https://www.linkedin.com/in/teagandurtschi/
          </a>
        </p>
      </div>
      <Footer>
        <p>Last Updated June 2021</p>
      </Footer>
    </>
  );
}
