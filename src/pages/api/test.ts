import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import data from "../../../data.json"

const metadataHnadler: NextApiHandler = async (
    _req: NextApiRequest,
    res: NextApiResponse
) => {
    return res.send(data)
}

export default metadataHnadler