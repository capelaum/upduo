import type { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
