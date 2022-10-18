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
import { useCallback, useState } from 'react'
import { HomeContainer, HomeContent } from 'styles/pages/home'
import { Project, Testimonial } from 'types/home'

interface HomeProps {
  allTestimonials: Testimonial[]
  homeProjects: Project[]
}

export default function Home({ allTestimonials, homeProjects }: HomeProps) {
  const [isServicesInView, setIsServicesInView] = useState(false)
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false)
  const [isPortfolioInView, setIsPortfolioInView] = useState(false)

  const setServicesInView = useCallback((state: boolean) => {
    setIsServicesInView(state)
  }, [])

  const setTestimonialsInView = useCallback((state: boolean) => {
    setIsTestimonialsInView(state)
  }, [])

  const setPortfolioInView = useCallback((state: boolean) => {
    setIsPortfolioInView(state)
  }, [])

  return (
    <>
      <Head>
        <title>UpDuo Comunicação</title>
      </Head>

      <Header
        sectionsInView={{
          isServicesInView,
          isTestimonialsInView,
          isPortfolioInView,
        }}
      />

      <HomeContainer>
        <HomeContent>
          <Hero />
          <ServicesInfoItems />
          <Solutions />
          <Services id="services" setServicesInView={setServicesInView} />
          <Testimonials
            id="testimonials"
            testimonials={allTestimonials}
            setTestimonialsInView={setTestimonialsInView}
          />
          <Portfolio
            id="portfolio"
            homeProjects={homeProjects}
            setPortfolioInView={setPortfolioInView}
          />
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
  try {
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
  } catch (error) {
    console.log('🚀 ~ error', error)

    return {
      notFound: true,
    }
  }
}
