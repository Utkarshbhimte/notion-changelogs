import React from 'react'
import { Post } from 'src/contracts/app'
import { db } from 'src/libs/db'
import { getPostsList } from 'src/libs/notion'

export const getServerSideProps = async (context) => {
    const { slug } = context.query

    const postMetadata: Post = await db.get(`post::${slug}`)

    return {
        props: {
            post: postMetadata,
        },
    }
}

interface PostImageProps {
    post: Post
}
const PostImage: React.FC<PostImageProps> = ({ post }) => {

    if (!post)
        return <div className="h-screen w-screen flex items-center justify-center direction-column">
            <h1>Nothing here</h1>
        </div>

    return (
        <div className="h-screen w-screen overflow-hidden bg-cover relative" style={{ background: 'url(/gradient-background.jpg)', height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <div
                className="flex items-center justify-center my-10">
                <svg
                    width={274}
                    height={150}
                    viewBox="0 0 174 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M56.186 79.323c1.84 0 3.04-1.12 3.04-3.52v-31.92c0-4.88 1.44-5.36 2.64-5.36 1.28 0 2.24 1.12 2.24 4.24v33.04c0 2.4 1.04 3.52 3.04 3.52 1.92 0 3.04-1.12 3.04-3.52v-33.04c0-6-1.76-9.12-5.92-9.12-3.04 0-4.88 2.08-5.04 6.48l-.16-3.28c-.08-2-1.2-3.04-3.04-3.04s-2.96 1.12-2.96 3.52v38.48c0 2.4 1.12 3.52 3.12 3.52zm27.617.16c5.12 0 8.56-3.36 8.56-10.64v-24.56c0-7.2-3.36-10.72-8.56-10.72-5.04 0-8.56 3.36-8.56 10.72v24.56c0 7.2 3.44 10.64 8.56 10.64zm0-4.8c-1.44 0-2.4-.96-2.4-4.08v-28c0-3.12.96-4.24 2.4-4.24 1.6 0 2.48 1.12 2.48 4.24v28c0 2.88-.8 4.08-2.48 4.08zm27.635-40.88c-1.84 0-2.96 1.04-3.04 3.04l-.16 3.28c-.24-4.16-2.08-6.48-5.12-6.48-4.08 0-6 3.12-6 9.12v26.32c0 6 1.92 9.12 6 9.12 2.88 0 4.64-1.92 5.04-5.76v4.56c0 3.92-1.2 6.16-5.12 6.16h-1.04c-2.24 0-3.04 1.12-3.04 2.64 0 1.44 1.12 2.88 4.32 2.88h.16c7.12 0 10.88-4.08 10.88-12.56v-38.8c0-2.4-1.12-3.52-2.88-3.52zm-5.84 39.76c-1.28 0-2.32-1.12-2.32-4.24v-26.56c0-3.12 1.04-4.24 2.32-4.24 1.12 0 2.56.48 2.56 5.36v24.32c0 4.88-1.44 5.36-2.56 5.36zm27.871-39.76c-1.84 0-2.96 1.04-3.04 3.04l-.16 3.28c-.24-4.16-2.08-6.48-5.12-6.48-4.08 0-6 3.12-6 9.12v26.32c0 6 1.92 9.12 6 9.12 2.88 0 4.64-1.92 5.04-5.76v4.56c0 3.92-1.2 6.16-5.12 6.16h-1.04c-2.24 0-3.04 1.12-3.04 2.64 0 1.44 1.12 2.88 4.32 2.88h.16c7.12 0 10.88-4.08 10.88-12.56v-38.8c0-2.4-1.12-3.52-2.88-3.52zm-5.84 39.76c-1.28 0-2.32-1.12-2.32-4.24v-26.56c0-3.12 1.04-4.24 2.32-4.24 1.12 0 2.56.48 2.56 5.36v24.32c0 4.88-1.44 5.36-2.56 5.36zm17.151-43.12c1.92 0 3.04-1.12 3.04-3.04v-2c0-2-1.2-3.2-3.04-3.2-2 0-3.12 1.2-3.12 3.2v2c0 1.92 1.12 3.04 3.12 3.04zm0 48.88c1.92 0 3.04-1.12 3.04-3.52v-38.48c0-2.4-1.2-3.52-3.04-3.52-2 0-3.12 1.12-3.12 3.52v38.48c0 2.4 1.12 3.52 3.12 3.52zm11.563 0c1.84 0 3.04-1.12 3.04-3.52v-31.92c0-4.88 1.44-5.36 2.64-5.36 1.28 0 2.24 1.12 2.24 4.24v33.04c0 2.4 1.04 3.52 3.04 3.52 1.92 0 3.04-1.12 3.04-3.52v-33.04c0-6-1.76-9.12-5.92-9.12-3.04 0-4.88 2.08-5.04 6.48l-.16-3.28c-.08-2-1.2-3.04-3.04-3.04s-2.96 1.12-2.96 3.52v38.48c0 2.4 1.12 3.52 3.12 3.52z"
                        fill="#1E403B"
                    />
                    <rect
                        x={-2.25}
                        y={2.25}
                        width={24.036}
                        height={51.685}
                        rx={12.018}
                        transform="matrix(-1 0 0 1 35.846 22.156)"
                        stroke="#1E403B"
                        strokeWidth={4.5}
                    />
                    <rect
                        x={-2.25}
                        y={2.25}
                        width={24.036}
                        height={51.685}
                        rx={12.018}
                        transform="matrix(-1 0 0 1 24.788 32.12)"
                        stroke="#1E403B"
                        strokeWidth={4.5}
                    />
                    <rect
                        width={5}
                        height={15.538}
                        rx={2.5}
                        transform="scale(1 -1) rotate(-75.479 -22.801 -29.955)"
                        fill="#1E403B"
                    />
                    <rect
                        width={5}
                        height={15.393}
                        rx={2.5}
                        transform="scale(1 -1) rotate(-85.343 -28.163 -39.12)"
                        fill="#1E403B"
                    />
                    <rect
                        width={5}
                        height={18.061}
                        rx={2.5}
                        transform="scale(1 -1) rotate(-60 -44.474 -38.547)"
                        fill="#1E403B"
                    />
                </svg>
            </div>
            <img style={{ width: '80vw', transform: 'translate(-50%, -20%)' }} className="rounded-3xl transform absolute left-1/2 top-1/2 shadow-xl" src={post?.thumbnail} alt="" />
        </div>
    )
}

export default PostImage
