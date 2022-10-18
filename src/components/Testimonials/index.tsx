import Image from 'next/future/image'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { CustomArrowProps, Settings } from 'react-slick'
import { Testimonial } from 'types/home'

import {
  Description,
  SliderArrow,
  SliderContainer,
  TestimonialsContainer,
} from './styles'

import lead_line from 'assets/lead_line.svg'

interface TestimonialsProps {
  id?: string
  testimonials: Testimonial[]
}

export function Testimonials({ id, testimonials }: TestimonialsProps) {
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    initialSlide: 0,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

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

      <SliderContainer {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Image
              src={testimonial.photo.url}
              width={50}
              height={50}
              alt={testimonial.photo.alt}
            />
            <h2>{testimonial.author}</h2>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </SliderContainer>

      {/* <SliderArrowContainer>
        <SliderArrow direction="left" onClick={() => slider?.slickPrev()}>
          <TbChevronLeft size={48} color="#fff" />
        </SliderArrow>

        <SliderArrow direction="right" onClick={() => slider?.slickNext()}>
          <TbChevronRight size={48} color="#fff" />
        </SliderArrow>
      </SliderArrowContainer> */}
    </TestimonialsContainer>
  )
}

interface SliderArrowProps extends CustomArrowProps {
  direction: 'left' | 'right'
}

export const CustoArrow = ({ direction, ...props }: SliderArrowProps) => {
  const { onClick } = props

  return (
    <SliderArrow
      // {...props}
      direction={direction}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <TbChevronLeft size={48} color="#fff" />
      ) : (
        <TbChevronRight size={48} color="#fff" />
      )}
    </SliderArrow>
  )
}
