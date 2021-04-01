import Head from 'next/head'
import { getSortedPosts, getPostPreviewData } from "../../helpers/posts"
import styles from "../../styles/Blog.module.scss"
import Link from "next/link"
import { PostBody } from "../../components/blog/blogPost"
import React, { useEffect } from 'react'

function BlogPostsList({ posts }) {
    return (
        <div className={styles["blog-post-list"]}>
            <h1>All blog posts</h1>
            <ul>
                {posts.map(({ id, date, title }) => (
                    <li key={id}>
                        <Link href={`/blog/${id}`} as={`/blog/${id}.html`}>
                            <a data-post-link>{title}</a>
                        </Link>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Blog(props) {
    useEffect(() => {
        hljs.initHighlighting();
    });

    return (
        <>
            <div className="flex-center">
                <div className="flex-center-column">
                    {props.postData.map((post, idx) => {
                        return (
                            <div className={`${styles["post-container"]} container`} key={idx}>
                                <h1>{post.title}</h1>
                                <p style={{ marginTop: "-14px" }}>(Published {post.date})</p>
                                <PostBody postData={post} />
                                <Link href={`/blog/${post.id}`} as={`/blog/${post.id}.html`}>
                                    <a className="link" data-post-link>Continue reading -&gt;</a>
                                </Link>
                            </div>
                        )
                    })}
                    <div className={`${styles["post-container"]}`}>
                        <BlogPostsList posts={props.postData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getSortedPosts()
    const getAllPostsData = async () => Promise.all(allPosts.map(post => getPostPreviewData(post.id)))

    const postData = await getAllPostsData();
    return {
        props: {
            postData
        }
    }
}