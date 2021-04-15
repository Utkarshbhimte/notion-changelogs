import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { signUrl } from "src/libs/notion";

const metadataHandler: NextApiHandler = async (
    _req: NextApiRequest,
    res: NextApiResponse
) => {

    return res.send(
        await signUrl(
            "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d9af93-3ddb-4dce-983d-2870b78a1a9b/baburao.jpeg",
            'e166e73a-2f34-48d2-bc2e-a2eb66ef9bd5'
        )
    )
}

export default metadataHandler