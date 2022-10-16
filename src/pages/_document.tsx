import { Favicon } from 'components/Head/Favicon'
import { Seo } from 'components/Head/Seo'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />

          <Seo
            title="UpDuos Comunicação"
            url="https://upduo.vercel.app"
            description="Design e Estratégias de marketing para escalar seu negócio!"
          />

          <Favicon />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
