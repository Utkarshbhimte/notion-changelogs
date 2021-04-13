import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getMetaData } from 'src/libs/notion'

const metadataHnadler: NextApiHandler = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.send(getMetaData())
}

export default metadataHnadler