import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { ServicesInfoItems } from 'components/ServicesInfoItems'
import { Solutions } from 'components/Solutions'
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
        <ServicesInfoItems />
        <Solutions />
      </HomeContainer>
    </>
  )
}

export default Home
