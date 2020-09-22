import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../helpers/posts'
import styles from "../../styles/Blog.module.scss"

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="container">
                <div className={styles["post-header"]}>
                    <div className={styles["post-title"]}>{postData.title}</div>
                    <div className={styles["post-date"]}>
                        {postData.date}
                    </div>
                </div>
                <p>
                    <button class="link" onClick={() => window.history.back()}>{"<- go back"}</button>
                </p>
                <article>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}