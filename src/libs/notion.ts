import { PageMetadata, Post } from "src/contracts/app"
import { NotionResponse, NotionSection } from "src/contracts/notion"

const demoData: NotionResponse = {
    "6c34d08c-16dd-4c3f-9535-215c5fb5dfce": {
        "role": "reader",
        "value": {
            "id": "6c34d08c-16dd-4c3f-9535-215c5fb5dfce",
            "version": 93,
            "type": "page",
            "properties": {
                "title": [
                    [
                        "Changelog Template"
                    ]
                ]
            },
            "content": [
                "e33547a2-1142-457b-990c-2f26976b827b",
                "7123632c-f406-4f13-84f2-8bbf6c0927da",
                "393cff8a-2682-48b7-b878-8ba01bc5edb7"
            ],
            "permissions": [
                {
                    "role": "editor",
                    "type": "user_permission",
                    "user_id": "1324161c-2c32-4f9a-815c-551877158425"
                },
                {
                    "role": "reader",
                    "type": "public_permission"
                }
            ],
            "created_time": 1618302960000,
            "last_edited_time": 1618311660000,
            "parent_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c",
            "parent_table": "space",
            "alive": true,
            "created_by_table": "notion_user",
            "created_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "last_edited_by_table": "notion_user",
            "last_edited_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "space_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c"
        }
    },
    "e33547a2-1142-457b-990c-2f26976b827b": {
        "role": "reader",
        "value": {
            "id": "e33547a2-1142-457b-990c-2f26976b827b",
            "version": 10,
            "type": "collection_view",
            "view_ids": [
                "5b3e1c79-782e-412f-a32c-637681453339"
            ],
            "collection_id": "cb421fd3-c8e7-4b5a-92de-3c1dd177e91c",
            "created_time": 1618303801492,
            "last_edited_time": 1618309560000,
            "parent_id": "6c34d08c-16dd-4c3f-9535-215c5fb5dfce",
            "parent_table": "block",
            "alive": true,
            "created_by_table": "notion_user",
            "created_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "last_edited_by_table": "notion_user",
            "last_edited_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "space_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c"
        },
        "collection": {
            "title": [
                [
                    "Metadata"
                ]
            ],
            "schema": {
                "vVM;": {
                    "name": "Value",
                    "type": "text"
                },
                "title": {
                    "name": "Key",
                    "type": "title"
                }
            },
            "types": [
                {
                    "id": "5b3e1c79-782e-412f-a32c-637681453339",
                    "version": 4,
                    "type": "table",
                    "name": "Default view",
                    "format": {
                        "table_wrap": true,
                        "table_properties": [
                            {
                                "width": 276,
                                "visible": true,
                                "property": "title"
                            },
                            {
                                "visible": true,
                                "property": "vVM;"
                            }
                        ]
                    },
                    "parent_id": "e33547a2-1142-457b-990c-2f26976b827b",
                    "parent_table": "block",
                    "alive": true,
                    "page_sort": [
                        "42efc065-ebe2-4604-ba2e-a9e643a9017b",
                        "e8b36b60-7921-4033-8416-4ec08bb01a2b",
                        "c5e12183-2b1f-4492-86ca-a1a5328ae0e5",
                        "eb02e7d9-4abc-47c3-95ec-00b22abd4169",
                        "3b887893-26c4-4713-a232-54f62920b2f2",
                        "6f5c946f-4464-45b9-926f-5af51ad70274"
                    ],
                    "space_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c"
                }
            ],
            "data": [
                {
                    "id": "e8b36b60-7921-4033-8416-4ec08bb01a2b",
                    "Value": [
                        [
                            "Test text"
                        ]
                    ],
                    "Key": [
                        [
                            "PrimaryButtonText"
                        ]
                    ]
                },
                {
                    "id": "c5e12183-2b1f-4492-86ca-a1a5328ae0e5",
                    "Value": [
                        [
                            "Test Link"
                        ]
                    ],
                    "Key": [
                        [
                            "PrimaryButtonLink"
                        ]
                    ]
                },
                {
                    "id": "eb02e7d9-4abc-47c3-95ec-00b22abd4169",
                    "Value": [
                        [
                            "Changelogs"
                        ]
                    ],
                    "Key": [
                        [
                            "Heading"
                        ]
                    ]
                },
                {
                    "id": "3b887893-26c4-4713-a232-54f62920b2f2",
                    "Value": [
                        [
                            "Test Subheading"
                        ]
                    ],
                    "Key": [
                        [
                            "SubHeading"
                        ]
                    ]
                }
            ]
        }
    },
    "7123632c-f406-4f13-84f2-8bbf6c0927da": {
        "role": "reader",
        "value": {
            "id": "7123632c-f406-4f13-84f2-8bbf6c0927da",
            "version": 14,
            "type": "collection_view",
            "view_ids": [
                "68b6816a-ed42-48a1-af3d-5a2821b178e4"
            ],
            "collection_id": "4ead9822-13b0-4163-9879-98f61b8dde06",
            "created_time": 1618303034083,
            "last_edited_time": 1618313040000,
            "parent_id": "6c34d08c-16dd-4c3f-9535-215c5fb5dfce",
            "parent_table": "block",
            "alive": true,
            "created_by_table": "notion_user",
            "created_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "last_edited_by_table": "notion_user",
            "last_edited_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "space_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c"
        },
        "collection": {
            "title": [
                [
                    "Content"
                ]
            ],
            "schema": {
                ":H\\D": {
                    "name": "Thumbnail",
                    "type": "file"
                },
                "ZZk=": {
                    "name": "PublishedDate",
                    "type": "text"
                },
                "Zrls": {
                    "name": "Tag",
                    "type": "select",
                    "options": [
                        {
                            "id": "776b889c-c21a-48fe-86f4-757f2cf518a0",
                            "color": "default",
                            "value": "Feature"
                        }
                    ]
                },
                "title": {
                    "name": "Title",
                    "type": "title"
                }
            },
            "types": [
                {
                    "id": "68b6816a-ed42-48a1-af3d-5a2821b178e4",
                    "version": 4,
                    "type": "table",
                    "name": "Default view",
                    "format": {
                        "table_wrap": true,
                        "table_properties": [
                            {
                                "width": 276,
                                "visible": true,
                                "property": "title"
                            },
                            {
                                "width": 200,
                                "visible": true,
                                "property": "Zrls"
                            },
                            {
                                "width": 200,
                                "visible": true,
                                "property": ":H\\D"
                            },
                            {
                                "visible": true,
                                "property": "ZZk="
                            }
                        ]
                    },
                    "parent_id": "7123632c-f406-4f13-84f2-8bbf6c0927da",
                    "parent_table": "block",
                    "alive": true,
                    "page_sort": [
                        "96defe87-0144-4f07-82cc-9b428929c79a",
                        "e166e73a-2f34-48d2-bc2e-a2eb66ef9bd5",
                        "fbc9f767-387d-43af-92d8-e54c93e1d6c5",
                        "11c60047-a949-428f-91b1-4b375cebbb5e"
                    ],
                    "space_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c"
                }
            ],
            "data": [
                {
                    "id": "96defe87-0144-4f07-82cc-9b428929c79a",
                    "Thumbnail": [
                        [
                            "baburao.jpeg",
                            [
                                [
                                    "a",
                                    "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d9af93-3ddb-4dce-983d-2870b78a1a9b/baburao.jpeg"
                                ]
                            ]
                        ]
                    ],
                    "PublishedDate": [
                        [
                            "2021-02-01"
                        ]
                    ],
                    "Tag": [
                        [
                            "Feature"
                        ]
                    ],
                    "Title": [
                        [
                            "Hello world 👋"
                        ]
                    ]
                },
                {
                    "id": "e166e73a-2f34-48d2-bc2e-a2eb66ef9bd5",
                    "Thumbnail": [
                        [
                            "baburao.jpeg",
                            [
                                [
                                    "a",
                                    "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7d9af93-3ddb-4dce-983d-2870b78a1a9b/baburao.jpeg"
                                ]
                            ]
                        ]
                    ],
                    "PublishedDate": [
                        [
                            "2021-02-02"
                        ]
                    ],
                    "Tag": [
                        [
                            "Feature"
                        ]
                    ],
                    "Title": [
                        [
                            "Another Update"
                        ]
                    ]
                }
            ]
        }
    },
    "393cff8a-2682-48b7-b878-8ba01bc5edb7": {
        "role": "reader",
        "value": {
            "id": "393cff8a-2682-48b7-b878-8ba01bc5edb7",
            "version": 15,
            "type": "text",
            "created_time": 1618311660000,
            "last_edited_time": 1618311660000,
            "parent_id": "6c34d08c-16dd-4c3f-9535-215c5fb5dfce",
            "parent_table": "block",
            "alive": true,
            "created_by_table": "notion_user",
            "created_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "last_edited_by_table": "notion_user",
            "last_edited_by_id": "1324161c-2c32-4f9a-815c-551877158425",
            "space_id": "96d8f71c-d8ba-4a21-bd27-3b0e67160e6c"
        }
    }
}



const getNotionSectionData = (sectionId: string) => demoData[sectionId]

const getCollectionByHeading = (currHeading: string, notionPage: NotionResponse): NotionSection => {
    return Object.keys(notionPage).map(a => notionPage[a])?.find(section => section.collection?.title.join(' ').toLowerCase() === currHeading.toLowerCase())
}


const MetadataTitle = 'Metadata'
export const getMetaData = (): PageMetadata => {
    const metaDataCollection = getCollectionByHeading(MetadataTitle, demoData)

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
        subheading: tableKeys['SubHeading']
    }
}

const ContentTitle = 'Content'

export const getPostsList = (): Post[] => {
    const metaDataCollection = getCollectionByHeading(ContentTitle, demoData)
    const collectionData = metaDataCollection.collection.data;
    const posts: Post[] = collectionData.map(a => {
        const [, , thumbnailUrl] = a['Thumbnail'].join(' ').split(',')
        return ({
            id: a.id,
            title: a['Title'].join(' '),
            thumbnail: thumbnailUrl,
            tag: a['Tag'].join(' '),
            created: a['PublishedDate'].join(' ')
        })
    })

    return posts;
}