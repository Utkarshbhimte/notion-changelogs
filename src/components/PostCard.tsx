import React from "react"
import { Post } from "src/contracts/app"
import Link from "next/link"
import Image from "next/image"

interface PostCardProps {
    post: Post
}
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    console.log("🚀 ~ file: PostCard.tsx ~ line 19 ~ post.thumbnail", post.thumbnail)
    return <Link prefetch href={`/log/${post.slug}`}>
        <div className="cursor-pointer hover-trigger">
            <div className="relative h-72 mb-4 thumbnail-back">
                <Image
                    className="rounded-2xl shadow-md block"
                    layout="fill"
                    objectFit="cover"
                    src={post.thumbnail}
                />
            </div>

            <div className="px-4 flex justify-between items-center">
                <div>
                    <div>
                        <span className="uppercase text-sm text-brand-800 font-bold tracking-wide">{post.tag}</span>
                        <span className="text-sm text-gray-500 ml-4 pl-4 border-l border-gray-500 tracking-wide">
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric', month: 'long', day: 'numeric'
                            }).format(new Date(post.created))}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mt-2">{post.title}</h3>
                </div>

                <div className="text-brand-800 opacity-0 transition ease-in-out duration-300 -translate-x-4 transform show-on-hover">
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
