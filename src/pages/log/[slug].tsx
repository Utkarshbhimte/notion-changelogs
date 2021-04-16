import Image from 'next/image'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import { HomeLayout } from 'src/components/HomeLayout'
import { PageMetadata, Post } from 'src/contracts/app'
import { db } from 'src/libs/db'
import { getAbsoluteURL } from 'src/libs/getAbsoluteUrl'
import { getPostsList } from 'src/libs/notion'

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
import { generateOgImage } from 'src/libs/generateOgImage'


export const getStaticProps = async (context) => {
    const notion = new NotionAPI()

    const { slug } = context.params

    const metadata: PageMetadata = await db.get(`metadata`)
    const postMetadata: Post = await db.get(`post::${slug}`)
    const data = await notion.getPage(postMetadata.id)


    // generating 
    const dir = path.resolve('public', 'og');
    const filepath = path.resolve(dir, `${slug}.png`);

    // check if directory doesn't exist, if it doesn't, we create it
    if (!existsSync(dir)) {
        mkdirSync(dir);
    }

    // check if the image already exists, if it does we don't need to generate it again
    if (!existsSync(filepath)) {
        const imgBuffer = await generateOgImage(postMetadata.slug)
        writeFileSync(filepath, imgBuffer);
    }

    const image = getAbsoluteURL(`/og/${postMetadata.slug}.png`)

    return {
        props: {
            postMetadata,
            data,
            metadata,
            meta: {
                title: postMetadata.title,
                image
            }
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const posts = await getPostsList()

    return {
        paths: posts.map(post => '/log/' + post.slug),
        fallback: false,
    }
}

interface ChangelogPageProps {
    postMetadata: Post;
    data: ExtendedRecordMap;
    metadata: PageMetadata
}
const ChangelogPage: React.FC<ChangelogPageProps> = ({ postMetadata, data }) => {

    return <div className="min-h-screen">
        <div className="container mx-auto my-8">
            {/* <div
                className="text-gray-500 cursor-pointer flex mb-12"
            >
                <Link href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
                <span className="ml-4 block">Back to Homepage</span>
            </div> */}
            <div className="relative md:h-96 my-6 shadow-lg rounded-2xl text-gray-500 flex items-center justify-center overflow-hidden" style={{ background: 'url(/gradient-background.jpg)' }}>
                <div className="md:translate-y-12 transform">
                    <Image
                        className="block rounded-2xl"
                        objectFit="cover"
                        width={650}
                        height={350}
                        src={postMetadata.thumbnail}
                        alt="Banner"
                    />
                </div>
            </div>
            <h1 className="md:text-6xl text-4xl font-bold">{postMetadata.title}</h1>
            <div className="my-4">
                <span className="uppercase text-sm text-brand-800 font-bold tracking-wide">{postMetadata.tag}</span>
                <span className="text-sm text-gray-500 ml-4 pl-4 border-l border-gray-500 tracking-wide">
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    }).format(new Date(postMetadata.created))}
                </span>
            </div>

            <div className="max-w-3xl mx-auto md:my-16 my-6">
                {/* Add animate presence here */}
                <NotionRenderer recordMap={data} fullPage={false} darkMode={false} />

            </div>
        </div>
    </div>
}

export default ChangelogPage


// @ts-ignore
ChangelogPage.layoutProps = {
    meta: {
        title: 'Course Page',
    },
    Layout: HomeLayout
}