import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Slider from 'react-slick'

// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface ICarouselTemplate {
  children: ReactNode
  settings: any
}
export default function CarouselTemplate({ children, settings }: ICarouselTemplate) {
  return (
    <Flex flexDir="column">
      <Slider {...settings}>{children}</Slider>
    </Flex>
  )
}
