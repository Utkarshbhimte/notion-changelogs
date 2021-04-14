import React from 'react'
import { HomeLayout } from 'src/components/HomeLayout'
import { PostCard } from 'src/components/PostCard'
import { PageMetadata, Post } from 'src/contracts/app'
import { db } from 'src/libs/db'

export const getStaticProps = async (context) => {

  const metadata: PageMetadata = await db.get(`metadata`)
  const postRequest = await fetch(`http://localhost:3000/api/post`)
  const posts = await postRequest.json()

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
                href={metadata.primary_button_link}
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium  text-brand-600 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:text-brand-700"
              >
                Checkout updates
              </a>
              <a
                href={metadata.primary_button_link}
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-brand-600 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:bg-brand-700"
              >
                {metadata.primary_button_text}
              </a>
            </div>
          }

        </div>

        <div className="grid gap-8 grid-cols-2 max-w-5xl mx-auto mt-12 pb-24">
          {posts?.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  )
}

export default Home

Home.layoutProps = {
  Layout: HomeLayout,
}
