import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { db } from "src/libs/db";
import { defaultMapImageUrl, getMetaData, getPostsList } from "src/libs/notion";

const metadataHandler: NextApiHandler = async (
    _req: NextApiRequest,
    res: NextApiResponse
) => {

    const metadata = await getMetaData()
    await db.put({ ...metadata, key: `metadata` })


    const posts = await getPostsList()
    const detaResponse = await Promise.all(
        posts.map(post => db.put({
            ...post,
            key: `post::${post.slug}`,
            thumbnail: defaultMapImageUrl(post.thumbnail, post.id)
        }))
    )

    const response = {
        posts: posts.reduce((total, curr) => ({ ...total, [curr.slug]: curr }), {}),
        detaResponse
    }

    return res.send(response)
}

export default metadataHandler