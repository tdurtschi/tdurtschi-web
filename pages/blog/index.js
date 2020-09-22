import { getSortedPosts } from "../../helpers/posts"
import Link from "next/link"

export default function Blog(props) {
    return (
        <>
            <div className="container">
                <ul>
                    {props.allPosts.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/blog/${id}`} as={`/blog/${id}.html`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getSortedPosts()
    return {
        props: {
            allPosts
        }
    }
}