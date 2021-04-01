import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPosts() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(filename => {
        const id = filename.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, `${id}.md`)
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

function getPreview(fileContents, previewLength) {
    let preview = fileContents
        .substr(0, previewLength)
    preview = preview.substr(0, preview.lastIndexOf(" "));
    return preview + "...";
}

export async function getPostPreviewData(idOrName) {
    const id = idOrName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(getPreview(matterResult.content, matterResult.data.previewLength))
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

export async function getPostData(idOrName) {
    const id = idOrName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}
