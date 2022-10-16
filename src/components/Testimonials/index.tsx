import { KeenSliderInstance, useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import { testimonials } from './data'

import 'keen-slider/keen-slider.min.css'

import {
  Description,
  SlideItem,
  SliderArrow,
  SliderContainer,
  SlidesContainer,
  TestimonialsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

interface TestimonialsProps {
  id?: string
}

export function Testimonials({ id }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [options, setOptions] = useState({})
  const [numberOfSliderPerView, setNumberOfSlidesPerView] = useState(0)
  const [sliderRef, slider] = useKeenSlider(options)

  useEffect(() => {
    setOptions({
      slidesPerView: 3,
      mode: 'free-snap',
      centered: true,
      loop: true,
      initial: 0,
      slides: {
        perView: 3,
        spacing: 20,
      },
      breakpoints: {
        '(max-width: 1200px)': {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
        '(max-width: 768px)': {
          slides: {
            perView: 1,
            spacing: 16,
          },
        },
      },
      slideChanged(slider: KeenSliderInstance) {
        setCurrentSlide(slider.track.details.rel)
      },
      created(slider: KeenSliderInstance) {
        setNumberOfSlidesPerView(
          (
            slider.options.slides as {
              perView: number
            }
          ).perView
        )
      },
    })
  }, [])

  return (
    <TestimonialsContainer id={id}>
      <h1>Depoimentos</h1>

      <Image
        src={lead_line}
        alt="Linha pontilhada irregular branca e grossa."
      />

      <Description>
        Confira o que alguns de nossos clientes tem a dizer.
      </Description>

      <SliderContainer>
        {slider.current && (
          <SliderArrow
            // direction="left"
            onClick={(e: any) => e.stopPropagation() || slider.current?.prev()}
            // disabled={currentSlide === 0}
          >
            <TbChevronLeft size={48} color="#fff" />
          </SliderArrow>
        )}

        <SlidesContainer ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <SlideItem
              key={index}
              className={`keen-slider__slide number-slide${index}`}
            >
              <Image src={testimonial.img} alt={testimonial.name} />

              <h2>{testimonial.name}</h2>

              <p>{testimonial.comment}</p>
            </SlideItem>
          ))}
        </SlidesContainer>

        {slider.current && (
          <SliderArrow
            // direction="right"
            onClick={(e: any) => e.stopPropagation() || slider.current?.next()}
            // disabled={
            //   currentSlide ===
            //   slider.current.track.details.slides.length - numberOfSliderPerView
            // }
          >
            <TbChevronRight size={48} color="#fff" />
          </SliderArrow>
        )}
      </SliderContainer>
    </TestimonialsContainer>
  )
}
