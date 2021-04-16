import React from 'react'
import Head from "next/head"
import { getAbsoluteURL } from 'src/libs/getAbsoluteUrl'

interface BannerProps {
    url?: string
}
const Banner: React.FC<BannerProps> = ({ url }) => {
    const imageUrl = url || getAbsoluteURL('/default-banner.jpeg')
    return (
        <Head>
            <meta property="og:image" content={imageUrl} />
            <meta property="twitter:image" content={imageUrl} />
        </Head>
    )
}

export default Banner
