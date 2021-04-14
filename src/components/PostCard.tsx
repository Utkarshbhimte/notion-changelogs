import React from "react"
import { Post } from "src/contracts/app"
import Link from "next/link"
import Image from "next/image"

interface PostCardProps {
    post: Post
}
export const PostCard: React.FC<PostCardProps> = ({ post }) => {


    return <Link href={`/log/${post.slug}`}>
        <div className="cursor-pointer hover-trigger">
            <div className="relative h-72 mb-4">
                <Image
                    className="rounded-2xl shadow-md block"
                    layout="fill"
                    objectFit="cover"
                    // src="https://images.unsplash.com/photo-1611095786283-c2f965646ef1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                    src={post.thumbnail}
                // alt={post.thumbnail}
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
