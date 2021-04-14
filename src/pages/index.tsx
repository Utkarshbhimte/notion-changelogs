import Image from 'next/image'
import { HomeLayout } from 'src/components/HomeLayout'
import { PageMetadata, Post } from 'src/contracts/app'
import Link from "next/link"
import { db } from 'src/libs/db'

interface PostCardProps {
  post: Post
}
const PostCard: React.FC<PostCardProps> = ({ post }) => {


  return <Link href={`/log/${post.slug}`}>
    <div className="cursor-pointer hover-trigger">
      <div className="relative h-72 mb-4">
        <Image
          className="rounded-2xl shadow-md block"
          layout="fill"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1611095786283-c2f965646ef1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
          alt={post.thumbnail}
        />
      </div>

      <div className="px-4 flex justify-between items-center">
        <div>
          <div>
            <span className="uppercase text-sm text-brand-500 font-bold tracking-wide">{post.tag}</span>
            <span className="text-sm text-gray-500 ml-4 pl-4 border-l border-gray-500 tracking-wide">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              }).format(new Date(post.created))}
            </span>
          </div>
          <h3 className="text-xl font-bold mt-2">{post.title}</h3>
        </div>

        <div className="text-brand-600 opacity-0 transition ease-in-out duration-300 -translate-x-4 transform show-on-hover">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

    </div>
  </Link>
}

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
  meta: {
    title: 'Home',
  },
  Layout: HomeLayout,
}
