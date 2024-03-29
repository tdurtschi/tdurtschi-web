import "./AboutPage.css";
const githubUrl = "https://github.com/tdurtschi/tdurtschi-web";

export default function About() {
  return (
    <>
      <div className="container about">
        <h2>About</h2>
        <p>
          My name is Teagan Durtschi. Here, you can see some of the software
          projects I've been working on. Thanks for visiting!
        </p>
        <p>
          This website is built with React.js.&nbsp;
          <a href={githubUrl}>It's open source!</a>
        </p>
        <h2>Personal Projects</h2>
        <p>
          <a href="https://tdurtschi.github.io/block-game/">- Block Game</a>
        </p>
        <p>
          <a href="https://github.com/tdurtschi/bug">- Bug</a>
        </p>
        <p>
          <a href="https://github.com/vmware-tanzu-labs/git-story">
            - git-story (contributor)
          </a>
        </p>
        <h2>Business</h2>
        <p>
          For professional inquiries, please visit&nbsp;
          <a href="https://lakewingrasoftware.azureedge.net">
            Lake Wingra Software
          </a>
        </p>
        <h2>Contact Info</h2>
        <p className={"contact"}>
          <strong>Email: </strong>
          <a href="mailto:teagan@tdurtschi.com">teagan@tdurtschi.com</a>
        </p>
        <p className={"contact"}>
          <strong>GitHub: </strong>
          <a href="https://github.com/tdurtschi">
            https://github.com/tdurtschi
          </a>
        </p>
        <p className={"contact"}>
          <strong>LinkedIn: </strong>
          <a href="https://www.linkedin.com/in/teagandurtschi/">
            https://www.linkedin.com/in/teagandurtschi/
          </a>
        </p>
        <br />
        <p>Last update: June 2023</p>
      </div>
    </>
  );
}
