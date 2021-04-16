import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head >
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-2GQ108D672"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window?.dataLayer.push(arguments)}
                gtag('js', new Date());
    
                gtag('config', 'G-2GQ108D672');
              `,
            }}
          />

        </Head >
        <body className="overflow-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
