import styles from '../styles/About.module.scss'
import Footer from "../components/footer"
const githubUrl = "https://github.com/tdurtschi/tdurtschi-web"

export default function About() {
    return (
        <>
            <div className={styles.about}>
                <h2>About This Site</h2>
                <p>This is the personal website for Teagan Durtschi, software engineer. This website is built with Next.js.</p>
                <p><a href={githubUrl}>It's open source!</a></p>
                <h2>Contact</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Email:</strong>
                            </td>
                            <td>
                                <a href="mailto:teagan@teaganmatthewdurtschi.com">teagan@tdurtschi.com</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>LinkedIn:</strong>
                            </td>
                            <td>
                                <a
                                    href="https://www.linkedin.com/in/teagandurtschi/">https://www.linkedin.com/in/teagandurtschi/</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>GitHub:</strong>
                            </td>
                            <td>
                                <a href="https://github.com/tdurtschi">https://github.com/tdurtschi</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>StackOverflow:</strong>
                            </td>
                            <td>
                                <a
                                    href="https://stackoverflow.com/users/story/5099555">https://stackoverflow.com/users/story/5099555</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer>
                <p>
                    Last Updated May 2020
                </p>
            </Footer>
        </>
    )
}