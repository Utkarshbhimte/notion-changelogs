import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getMetaData } from 'src/libs/notion'

const metadataHandler: NextApiHandler = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.send(await getMetaData())
}

export default metadataHandler