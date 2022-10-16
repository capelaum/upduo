import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { testimonials } from './data'

import 'keen-slider/keen-slider.min.css'

import {
  Description,
  SlideItem,
  SliderContainer,
  TestimonialsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'

interface TestimonialsProps {
  id?: string
}

export function Testimonials({ id }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: 'free-snap',
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
        {/* {loaded && instanceRef.current && (
          <SliderArrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
          >
            <TbChevronLeft size={48} color="#fff" />
          </SliderArrow>
        )} */}

        {testimonials.map((testimonial, index) => (
          <SlideItem key={index} className="keen-slider__slide">
            <Image src={testimonial.img} alt={testimonial.name} />

            <h2>{testimonial.name}</h2>

            <p>{testimonial.comment}</p>
          </SlideItem>
        ))}

        {/* {loaded && instanceRef.current && (
          <SliderArrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
          >
            <TbChevronRight size={48} color="#fff" />
          </SliderArrow>
        )} */}
      </SliderContainer>
    </TestimonialsContainer>
  )
}
