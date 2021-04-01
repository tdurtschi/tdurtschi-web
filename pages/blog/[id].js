import Head from 'next/head'
import { useEffect } from 'react'
import { getAllPostIds, getPostData } from '../../helpers/posts'
import styles from "../../styles/Blog.module.scss"
import BlogPost from "../../components/blog/blogPost"

export default function Post({ postData }) {
    useEffect(() => {
        hljs.initHighlighting();
    });

    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className="flex-center">
                <div className={styles["post-container"]}>
                    <BlogPost postData={postData}></BlogPost>
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