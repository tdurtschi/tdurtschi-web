import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts')

export function getSortedPosts() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(POSTS_DIRECTORY)
    const allPostsData = fileNames.map(filename => {
        const id = filename.replace(/\.md$/, '')
        const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)


        // Combine the data with the id and contentHtml
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

function loadAndParsePost(id) {
    const fullPath = path.join(POSTS_DIRECTORY, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return matter(fileContents)
}

function getPreview(fileContents, previewLength) {
    let preview = fileContents
        .substr(0, previewLength)
    preview = preview.substr(0, preview.lastIndexOf(" "));
    return preview + "...";
}

export async function getPostPreviewData(idOrName) {
    const id = idOrName.replace(/\.md$/, '')
    const markdownDocument = loadAndParsePost(id)

    const renderedMarkdown = await remark()
        .use(html)
        .process(getPreview(markdownDocument.content, markdownDocument.data.previewLength))
    const contentHtml = renderedMarkdown.toString()

    return {
        id,
        contentHtml,
        ...markdownDocument.data
    }
}

export async function getPostData(idOrName) {
    const id = idOrName.replace(/\.md$/, '')
    const markdownDocument = loadAndParsePost(id)

    const renderedMarkdown = await remark()
        .use(html)
        .process(markdownDocument.content)
    const contentHtml = renderedMarkdown.toString()

    return {
        id,
        contentHtml,
        ...markdownDocument.data
    }
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}
