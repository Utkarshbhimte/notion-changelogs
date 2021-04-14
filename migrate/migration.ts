const fetch = require('node-fetch');
const fs = require('fs').promises;
const { getMetaData, getPostsList } = require("./src/libs/notion");

const MAIN_NOTION_ID = '6c34d08c16dd4c3f9535215c5fb5dfce'

const migrate = async () => {
    const mainNotion = await fetch(`https://notion-api.splitbee.io/v1/page/${MAIN_NOTION_ID}`)
        .then(res => res.json())

    const metadata = await getMetaData(mainNotion)
    const posts = await getPostsList(mainNotion)
    const result = {
        metadata,
        posts: posts.reduce((total, curr) => {
            return {
                ...total,
                [curr.slug]: curr
            }
        }, {})
    }

    await fs.writeFile('data.json', JSON.stringify(result))
}

migrate()