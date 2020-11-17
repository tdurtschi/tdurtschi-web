import Head from 'next/head'
import { useEffect } from 'react'
import { getAllPostIds, getPostData } from '../../helpers/posts'
import styles from "../../styles/Blog.module.scss"

export default function Post({ postData }) {
    useEffect(() => {
        hljs.initHighlighting();
    });

    return (
        <>
            <Head>
                <link rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/default.min.css" />
                <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>
                <title>{postData.title}</title>
            </Head>
            <div className="flex-center">
                <div className={styles["post-container"]}>
                    <div className="container">
                        <h1 className={styles["post-title"]}>{postData.title}</h1>
                        <div className={styles["post-header"]}>
                            <p>
                                <button className="link" onClick={() => window.history.back()}>{"<- go back"}</button>
                            </p>
                            <div className={styles["post-date"]}>
                                {postData.date}
                            </div>
                        </div>
                        <hr />
                        <article>
                            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                        </article>
                    </div>
                </div>
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