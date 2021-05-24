import { motion } from 'framer-motion'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import Image from 'next/image'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import path from 'path'
import React from 'react'
import { CollectionRow, NotionRenderer } from 'react-notion-x'
import { HomeLayout } from 'src/components/HomeLayout'
import { PageMetadata, Post } from 'src/contracts/app'
import { generateOgImage } from 'src/libs/generateOgImage'
import { getAbsoluteURL } from 'src/libs/getAbsoluteUrl'
import { getMetaData, getPostsList } from 'src/libs/notion'

export const getStaticProps = async (context) => {
  const notion = new NotionAPI()

  const { slug } = context.params

  const metadata = await getMetaData()

  const posts = await getPostsList()
  const postMetadata = posts.find((p) => p.slug === slug)
  const data = await notion.getPage(postMetadata.id)

  // generating
  const dir = path.resolve('public', 'og')
  const filepath = path.resolve(dir, `${slug}.png`)

  // check if directory doesn't exist, if it doesn't, we create it
  if (!existsSync(dir)) {
    mkdirSync(dir)
  }

  // check if the image already exists, if it does we don't need to generate it again
  if (!existsSync(filepath)) {
    const imgBuffer = await generateOgImage(postMetadata.slug)
    writeFileSync(filepath, imgBuffer)
  }

  const image = getAbsoluteURL(`/og/${postMetadata.slug}.png`)

  return {
    props: {
      postMetadata,
      data,
      metadata,
      meta: {
        title: postMetadata.title,
        image,
      },
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const posts = await getPostsList()

  return {
    paths: posts.map((post) => '/log/' + post.slug),
    fallback: 'blocking',
  }
}

interface ChangelogPageProps {
  postMetadata: Post
  data: ExtendedRecordMap
  metadata: PageMetadata
}
const ChangelogPage: React.FC<ChangelogPageProps> = ({
  postMetadata,
  data,
}) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto my-8">
        <div
          className="relative md:h-96 my-6 shadow-lg rounded-2xl text-gray-500 flex items-center justify-center overflow-hidden"
          style={{ background: 'url(/gradient-background.jpg)' }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 40, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="md:translate-y-12 transform"
          >
            <Image
              className="rounded-2xl block"
              layout="fixed"
              objectFit="cover"
              width={650}
              height={350}
              src={postMetadata.thumbnail}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <h1 className="md:text-6xl text-4xl font-bold">
            {postMetadata.title}
          </h1>
          <div className="my-4">
            <span className="uppercase text-sm text-brand-800 font-bold tracking-wide">
              {postMetadata.tag}
            </span>
            <span className="text-sm text-gray-500 ml-4 pl-4 border-l border-gray-500 tracking-wide">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(postMetadata.created))}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-3xl mx-auto md:my-16 my-6"
        >
          {/* Add animate presence here */}
          <NotionRenderer
            recordMap={data}
            fullPage={false}
            darkMode={false}
            components={{ collectionRow: CollectionRow }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ChangelogPage

// @ts-ignore
ChangelogPage.layoutProps = {
  meta: {
    title: 'Course Page',
  },
  Layout: HomeLayout,
}
