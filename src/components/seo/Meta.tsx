import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAbsoluteURL } from 'src/libs/getAbsoluteUrl'

export default function Meta() {
  const router = useRouter()
  return (
    <Head>
      <meta charSet="utf-8" key="charSet" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={process.env.NEXT_PUBLIC_TWITTER_USERNAME} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={process.env.NEXT_PUBLIC_TWITTER_USERNAME}
      />
      <meta
        key="og:url"
        property="og:url"
        content={getAbsoluteURL(router.pathname)}
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="preload"
        href="/fonts/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={getAbsoluteURL('/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href={getAbsoluteURL('/favicon-196.png')}
      />

      <link rel="manifest" href="/manifest.json" />

      <meta name="theme-color" content="#ffffff" />

      <link rel="apple-touch-icon" href="apple-icon-180.png" />

      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link rel="apple-touch-startup-image" href="apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2732-2048.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2388-1668.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2048-1536.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2224-1668.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2160-1620.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2778-1284.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2532-1170.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2436-1125.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2688-1242.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1792-828.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-2208-1242.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1334-750.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />
      <link rel="apple-touch-startup-image" href="apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="apple-splash-1136-640.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" />

    </Head>
  )
}
