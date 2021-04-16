import { Description, Meta, Title } from '@/components'
import ProgressBar from '@badrap/bar-of-progress'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import React from 'react'
import Banner from 'src/components/seo/Banner'
import { AnimatePresence } from "framer-motion"

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import 'react-notion-x/src/styles.css'

const progress = new ProgressBar({
  size: 2,
  color: process.env.NEXT_PUBLIC_LOADER_COLOR || '#22D3EE',
  className: 'bar-of-progress',
  delay: 100,
})

if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', () => {
  progress.finish()

  // Will not work if scroll is not on <html>
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layoutProps?.Layout || React.Fragment
  const layoutProps = (Component as any).layoutProps?.Layout
    ? { layoutProps: (Component as any).layoutProps }
    : {}
  const meta = (Component as any).layoutProps?.meta || {}

  const description =
    pageProps.meta?.description ||
    meta.description ||
    process.env.NEXT_PUBLIC_DEFAULT_DESC ||
    `Discover new updates and improvements to ${process.env.NEXT_PUBLIC_APP_NAME}`

  return (
    <>
      <Title>{pageProps.meta?.title || meta.title}</Title>
      <Description>{description}</Description>
      <Banner url={pageProps.meta?.image || meta.image} />
      <Meta />
      <AnimatePresence exitBeforeEnter>
        <Layout {...layoutProps} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}

export default MyApp
