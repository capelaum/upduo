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
import { Project, Testimonial } from 'types/home'

interface HomeProps {
  allTestimonials: Testimonial[]
  homeProjects: Project[]
}

export default function Home({ allTestimonials, homeProjects }: HomeProps) {
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
          <Testimonials id="testimonials" testimonials={allTestimonials} />
          <Portfolio id="portfolio" homeProjects={homeProjects} />
          <CallToAction />
          <Footer />
        </HomeContent>
      </HomeContainer>
    </>
  )
}

interface ResponseDataProps {
  allTestimonials: Testimonial[]
  allProjects: Project[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { allTestimonials, allProjects: homeProjects }: ResponseDataProps =
    await DatoCmsRequest({
      query: GET_HOME,
      variables: {
        first: 3,
      },
    })

  return {
    props: {
      allTestimonials,
      homeProjects,
    },
    revalidate: 30,
  }
}
