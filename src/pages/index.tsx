import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { Services } from 'components/Services'
import { ServicesInfoItems } from 'components/ServicesInfoItems'
import { Solutions } from 'components/Solutions'
import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeContainer, HomeContent } from 'styles/pages/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UpDuo Comunicação</title>
      </Head>

      <Header />

      <HomeContent>
        <HomeContainer>
          <Hero />
          <ServicesInfoItems />
          <Solutions />
          <Services />
        </HomeContainer>
      </HomeContent>
    </>
  )
}

export default Home
