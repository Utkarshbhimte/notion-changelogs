import React from 'react'
import { HomeLayout } from 'src/components/HomeLayout'
import { PostCard } from 'src/components/PostCard'
import { PageMetadata, Post } from 'src/contracts/app'
import { db } from 'src/libs/db'
import { getPostsList } from 'src/libs/notion'

export const getStaticProps = async () => {

  const metadata: PageMetadata = await db.get(`metadata`)
  const posts = await getPostsList()

  return {
    props: {
      metadata, posts,
    },
    revalidate: 10
  }
}

interface HomeProps {
  metadata: PageMetadata;
  posts: Post[]
}

const Home: React.FC<HomeProps> = ({ metadata, posts }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto ">
        <div className="header-section h-96 flex items-center justify-center flex-col text-center">
          <h1 className="text-6xl font-bold mb-6">{metadata.heading}</h1>
          <p className="text-gray-600 text-lg">{metadata.subheading}</p>

          {
            metadata.primary_button_text && <div className="flex items-center justify-center mt-12">
              <a
                href="#updates-wrap"
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium  text-brand-800 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:text-brand-900"
              >
                Checkout updates
              </a>
              <a
                href={metadata.primary_button_link}
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-brand-800 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:bg-brand-900"
              >
                {metadata.primary_button_text}
              </a>
            </div>
          }

        </div>

        <div
          id="updates-wrap"
          className="grid gap-8 md:grid-cols-2 grid-cols-1 mx-auto mt-12 pb-24">
          {posts?.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  )
}

export default Home

// @ts-ignore
Home.layoutProps = {
  Layout: HomeLayout,
}
