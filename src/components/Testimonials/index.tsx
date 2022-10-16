import { KeenSliderInstance } from 'keen-slider'
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

const sliderAutoPlay = (slider: KeenSliderInstance) => {
  let timeout: any
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)

    if (mouseOver) return

    timeout = setTimeout(() => {
      slider.next()
    }, 2000)
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })
  slider.on('dragStarted', clearNextTimeout)
  slider.on('animationEnded', nextTimeout)
  slider.on('updated', nextTimeout)
}

interface TestimonialsProps {
  id?: string
}

export function Testimonials({ id }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      renderMode: 'performance',
      slides: {
        perView: 3,
        spacing: 20,
        origin: 'center',
        number: testimonials.length,
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
    },
    [(slider) => sliderAutoPlay(slider)]
  )

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
