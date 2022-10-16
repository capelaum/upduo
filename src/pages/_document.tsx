import { Favicon } from 'components/Head/Favicon'
import { Seo } from 'components/Head/Seo'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'styles/stiches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
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
            title="UpDuo Comunicação"
            url="https://upduo.vercel.app"
            description="Design e Estratégias de marketing para escalar seu negócio!"
          />

          <Favicon />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
