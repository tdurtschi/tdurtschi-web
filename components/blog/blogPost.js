import styles from "../../styles/Blog.module.scss"

export function PostHeader({ postData }) {
    return (
        <>
            <div className={styles["post-header"]}>
                <p>
                    <button className="link" onClick={() => window.history.back()}>{"<- go back"}</button>
                </p>
                <div className={styles["post-date"]}>
                    {postData.date}
                </div>
            </div>
        </>
    )
}

export function PostBody({ postData }) {
    return (
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    )
}

export default function BlogPost({ postData }) {
    return (
        <div className="container">
            <PostHeader postData={postData} />
            <hr />
            <h1 className={styles["post-title"]}>{postData.title}</h1>
            <PostBody postData={postData} />
        </div>
    )
}