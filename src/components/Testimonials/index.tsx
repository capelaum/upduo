import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
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

interface TestimonialsProps {
  id?: string
}

export function Testimonials({ id }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
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
    created(slider) {
      setLoaded(true)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

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
        <SliderArrow onClick={() => instanceRef.current?.prev()}>
          <TbChevronLeft size={48} color="#fff" />
        </SliderArrow>

        <SlidesContainer ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <SlideItem key={index} className="keen-slider__slide">
              <Image src={testimonial.img} alt={testimonial.name} />

              <h2>{testimonial.name}</h2>

              <p>{testimonial.comment}</p>
            </SlideItem>
          ))}
        </SlidesContainer>

        <SliderArrow onClick={() => instanceRef.current?.next()}>
          <TbChevronRight size={48} color="#fff" />
        </SliderArrow>
      </SliderContainer>
    </TestimonialsContainer>
  )
}
