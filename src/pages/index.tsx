import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeContainer } from 'styles/pages/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UpDuo Comunicação</title>
      </Head>
      <Header />

      <HomeContainer>
        <Hero />
      </HomeContainer>
    </>
  )
}

export default Home
