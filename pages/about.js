import styles from "../styles/About.module.scss";
const githubUrl = "https://github.com/tdurtschi/tdurtschi-web";

export default function About() {
  return (
    <>
      <div className="container about">
        <h2>About</h2>
        <p>
          My name is Teagan Durtschi. Here, you can see some of the software projects I've been working on. Thanks for visiting!
        </p>
        <p>
          This website is built with Next.js.&nbsp;
          <a href={githubUrl}>It's open source!</a>
        </p>
        <h2>Project Gallery</h2>
        <p>
          <a href="//tdurtschi.com/block-game">- Block Game</a>
        </p>
        <p>
          <a href="https://www.gregorymathieu.com/">- Gregory Mathieu Portfolio</a>
        </p>
        <p>
          <a href="https://tdurtschi.github.io/rocksolid-archived/">- Rock Solid Landscaping (archived)</a>
        </p>
        <p>
          <a href="https://github.com/vmware-tanzu-labs/git-story">- git-story (contributor)</a> 
        </p>
        <h2>Contact Info</h2>
        <p className={styles.contact}>
          <strong>Email: </strong>
          <a href="mailto:teagan@tdurtschi.com">teagan@tdurtschi.com</a>
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
        <br/>
        <p>Last update: Feb 2023</p>
      </div>
    </>
  );
}
