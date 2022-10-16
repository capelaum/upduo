import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { testimonials } from './data'

import {
  Description,
  SlideItem,
  SliderArrow,
  SliderArrowContainer,
  SliderContainer,
  TestimonialsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'
import { KeenSliderInstance } from 'keen-slider'

interface TestimonialsProps {
  id?: string
}

export function Testimonials({ id }: TestimonialsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  console.log('🚀 ~ currentSlide', currentSlide)
  const [loaded, setLoaded] = useState(false)
  const [options, setOptions] = useState({})
  const [sliderRef, slider] = useKeenSlider(options)

  useEffect(() => {
    setOptions({
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
      slideChanged(slider: KeenSliderInstance) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
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

      <SliderContainer ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <SlideItem key={index} className="keen-slider__slide">
            <Image src={testimonial.img} alt={testimonial.name} />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.comment}</p>
          </SlideItem>
        ))}
      </SliderContainer>

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
    </TestimonialsContainer>
  )
}
