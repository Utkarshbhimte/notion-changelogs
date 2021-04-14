import { NotionResponse } from "src/contracts/notion";

export const getDataFromNotion = async (notionId: string): Promise<NotionResponse> => {

    const response = fetch(`https://notion-api.splitbee.io/v1/page/${notionId}`)
        .then(a => a.json())

    return response
}

