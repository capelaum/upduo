import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useState } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

import {
  Description,
  SlideItem,
  SliderArrow,
  SliderContainer,
  SlidesContainer,
  TestimonialsContainer,
} from './styles'

import 'keen-slider/keen-slider.min.css'

import lead_line from 'assets/lead_line.svg'
import isa from 'assets/testimonials/isa.png'
import lu from 'assets/testimonials/lu.png'
import lucas from 'assets/testimonials/lucas.png'

const testimonials = [
  {
    name: 'Isabela Castelli',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    img: isa,
  },
  {
    name: 'Lucas Rodrigues',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.',
    img: lucas,
  },
  {
    name: 'Luciane Capelletto',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    img: lu,
  },
  {
    name: 'Isabela Castelli',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    img: isa,
  },
  {
    name: 'Lucas Rodrigues',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    img: lucas,
  },
  {
    name: 'Luciane Capelletto',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.',
    img: lu,
  },
]

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 1200px)': {
        slides: {
          perView: 2,
          spacing: 24,
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
    <TestimonialsContainer>
      <h1>Depoimentos</h1>

      <Image
        src={lead_line}
        alt="Linha pontilhada irregular branca e grossa."
      />

      <Description>
        Confira o que alguns de nossos clientes tem a dizer
      </Description>

      <SliderContainer>
        <SliderArrow onClick={(e) => instanceRef.current?.prev()}>
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

        {loaded && instanceRef.current && (
          <SliderArrow onClick={(e) => instanceRef.current?.next()}>
            <TbChevronRight size={48} color="#fff" />
          </SliderArrow>
        )}
      </SliderContainer>
    </TestimonialsContainer>
  )
}
