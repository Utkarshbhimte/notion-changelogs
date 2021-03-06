import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getPostsList } from 'src/libs/notion'

const GetPostHandler: NextApiHandler = async (
    _req: NextApiRequest,
    res: NextApiResponse
) => {
    return res.send(await getPostsList())
}

export default GetPostHandler