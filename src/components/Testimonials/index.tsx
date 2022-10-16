import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { testimonials } from './data'

import 'keen-slider/keen-slider.min.css'

import {
  Description,
  SlideItem,
  SliderArrow,
  SliderContainer,
  TestimonialsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

interface TestimonialsProps {
  id?: string
}

export function Testimonials({ id }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [numberOfSliderPerView, setNumberOfSlidesPerView] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    // loop: true,
    mode: 'snap',
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      setLoaded(true)
      console.log(slider)
      setNumberOfSlidesPerView(
        (
          slider.options.slides as {
            perView: number
          }
        ).perView
      )
    },
  })

  // if (instanceRef.current) {
  //   console.log('🚀 ~ instanceRef.current', instanceRef.current)

  //   console.log('🚀 ~ currentSlide', currentSlide)
  // }

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

      <SliderContainer ref={sliderRef} className="keen-slider">
        {loaded && instanceRef.current && (
          <SliderArrow
            direction="left"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          >
            <TbChevronLeft size={48} color="#fff" />
          </SliderArrow>
        )}

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

        {loaded && instanceRef.current && (
          <SliderArrow
            direction="right"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length -
                numberOfSliderPerView
            }
          >
            <TbChevronRight size={48} color="#fff" />
          </SliderArrow>
        )}
      </SliderContainer>
    </TestimonialsContainer>
  )
}
