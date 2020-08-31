import Head from 'next/head'
import styles from '../styles/About.module.scss'

export default function About() {
    return (
        <>
            <div className={styles.about}>
                <h2>About This Site</h2>
                <p>This is the personal website for Teagan Durtschi, software engineer.</p>

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
            <footer class="noselect">
                <p>
                    Last Updated May 2020
                </p>
            </footer>
        </>
    )
}