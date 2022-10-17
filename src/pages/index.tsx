import { CallToAction } from 'components/CallToAction'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { Portfolio } from 'components/Portfolio'
import { Services } from 'components/Services'
import { ServicesInfoItems } from 'components/ServicesInfoItems'
import { Solutions } from 'components/Solutions'
import { Testimonials } from 'components/Testimonials'
import { DatoCmsRequest } from 'graphql/datocms'
import { GET_HOME } from 'graphql/queries/getHome'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { HomeContainer, HomeContent } from 'styles/pages/home'
import { Testimonial } from 'types/home'

interface HomeProps {
  testimonials: Testimonial[]
}

export default function Home({ testimonials }: HomeProps) {
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
          <Testimonials id="testimonials" testimonials={testimonials} />
          <Portfolio id="portfolio" />
          <CallToAction />
          <Footer />
        </HomeContent>
      </HomeContainer>
    </>
  )
}

interface ResponseDataProps {
  allDepoimentos: Testimonial[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { allDepoimentos: testimonials }: ResponseDataProps =
    await DatoCmsRequest({ query: GET_HOME })

  return {
    props: {
      testimonials,
    },
    revalidate: 60, // 1 minute
  }
}
