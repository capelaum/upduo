import { CallToAction } from 'components/CallToAction'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { Portfolio } from 'components/Portfolio'
import { Services } from 'components/Services'
import { ServicesInfoItems } from 'components/ServicesInfoItems'
import { Solutions } from 'components/Solutions'
import { Testimonials } from 'components/Testimonials'
import 'keen-slider/keen-slider.min.css'
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

      <HomeContainer>
        <HomeContent>
          <Hero />
          <ServicesInfoItems />
          <Solutions />
          <Services id="services" />
          <Testimonials id="testimonials" />
          <Portfolio id="portfolio" />
          <CallToAction />
          <Footer />
        </HomeContent>
      </HomeContainer>
    </>
  )
}

export default Home
