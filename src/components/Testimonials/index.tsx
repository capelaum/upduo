import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

import {
  Description,
  SlideItem,
  SliderArrow,
  SliderArrowContainer,
  SliderContainer,
  TestimonialsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'
import { Testimonial } from 'types/home'

interface TestimonialsProps {
  id?: string
  testimonials: Testimonial[]
}

export function Testimonials({ id, testimonials }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  // console.log('🚀 ~ currentSlide', currentSlide)

  const [loaded, setLoaded] = useState(false)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'snap',
    drag: true,
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
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
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

      <SliderContainer ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial) => (
          <SlideItem key={testimonial.id} className="keen-slider__slide">
            <Image
              src={testimonial.photo.url}
              width={50}
              height={50}
              alt={testimonial.photo.alt}
            />
            <h2>{testimonial.author}</h2>
            <p>{testimonial.content}</p>
          </SlideItem>
        ))}
      </SliderContainer>

      {loaded && slider.current && (
        <SliderArrowContainer>
          <SliderArrow
            direction="left"
            onClick={(e: any) => e.stopPropagation() || slider.current?.prev()}
          >
            <TbChevronLeft size={48} color="#fff" />
          </SliderArrow>

          <SliderArrow
            direction="right"
            onClick={(e: any) => e.stopPropagation() || slider.current?.next()}
          >
            <TbChevronRight size={48} color="#fff" />
          </SliderArrow>
        </SliderArrowContainer>
      )}
    </TestimonialsContainer>
  )
}
