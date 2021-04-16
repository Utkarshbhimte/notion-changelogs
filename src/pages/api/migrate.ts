import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { db } from "src/libs/db";
import { defaultMapImageUrl, getMetaData, getPostsList } from "src/libs/notion";

const metadataHandler: NextApiHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {

    try {
        if (process.env.NODE_ENV !== 'development') {

            // Implement simple password protection for cloud migrations
            if (!process.env.NEXT_PUBLIC_DEPLOY_PASSWORD) {
                throw new Error("The password is not set yet, you have to add it to your vercel project as NEXT_PUBLIC_DEPLOY_PASSWORD")
            }

            if (!req.query.password) {
                throw new Error("You have to pass the password in the query params as well with password as key, Refer the docs for more info")
            }
        }

        const metadata = await getMetaData()
        await db.put({ ...metadata, key: `metadata` })


        const posts = await getPostsList()
        const detaResponse = await Promise.all(
            posts.map(post => db.put({
                ...post,
                key: `post::${post.slug}`,
                thumbnail: post.thumbnail
            }))
        )

        const response = {
            posts: posts.reduce((total, curr) => ({ ...total, [curr.slug]: curr }), {}),
            detaResponse
        }

        return res.send(response)
    } catch (error) {
        console.error(error)
        return res.status(500).send({ error: error.message })
    }
}

export default metadataHandler