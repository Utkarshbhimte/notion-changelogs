import { MapImageUrl } from "notion-types"
import slugify from "slugify"
import { PageMetadata, Post } from "src/contracts/app"
import { NotionResponse, NotionSection } from "src/contracts/notion"
import { getDataFromNotion } from "./getNotionData"

const getCollectionByHeading = (currHeading: string, notionPage: NotionResponse): NotionSection => {
    return Object.keys(notionPage).map(a => notionPage[a])?.find(section => section.collection?.title.join(' ').toLowerCase() === currHeading.toLowerCase())
}


const MetadataTitle = 'Metadata'
export const getMetaData = async (): Promise<PageMetadata> => {
    const notionData = await getDataFromNotion("6c34d08c16dd4c3f9535215c5fb5dfce")
    const metaDataCollection = getCollectionByHeading(MetadataTitle, notionData)

    const [notionMetadata] = Object.values(notionData)
    const app_name = notionMetadata.value.properties?.title?.join(' ')
    const icon = notionMetadata.value?.format?.page_icon

    const collectionData = metaDataCollection.collection.data
    const tableKeys = collectionData
        .reduce(
            (total, curr) => ({
                ...total, [curr['Key'].join(' ')]: curr['Value'].join(' ')
            }), {})

    return {
        primary_button_text: tableKeys['PrimaryButtonText'],
        primary_button_link: tableKeys['PrimaryButtonLink'],
        heading: tableKeys['Heading'],
        subheading: tableKeys['SubHeading'],
        icon, app_name
    }
}

const ContentTitle = 'Content'
export const getPostsList = async (): Promise<Post[]> => {

    const notionData = await getDataFromNotion('6c34d08c16dd4c3f9535215c5fb5dfce')

    const metaDataCollection = getCollectionByHeading(ContentTitle, notionData)
    const collectionData = metaDataCollection.collection.data;




    const posts: Post[] = collectionData.map(a => {
        const [, , thumbnailUrl] = a['Thumbnail'].join(' ').split(',')
        const title = a['Title'].join(' ')

        return ({
            id: a.id as string,
            title,
            thumbnail: defaultMapImageUrl(thumbnailUrl, a.id as string),
            tag: a['Tag'].join(' '),
            slug: slugify(title)?.toLowerCase(),
            created: a['PublishedDate'].join(' ')
        })
    })

    return posts;
}

export const defaultMapImageUrl = (image: string, id: string): string => {
    const url = new URL(
        `https://www.notion.so${image.startsWith("/image") ? image : `/image/${encodeURIComponent(image)}`
        }`
    );

    if (!image.includes("/images/page-cover/")) {
        url.searchParams.set("table", "block");
        url.searchParams.set("id", id);
        url.searchParams.set("cache", "v2");
    }

    return url.toString();
};