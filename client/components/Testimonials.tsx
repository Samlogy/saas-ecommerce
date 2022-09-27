import { Box, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { Rating, SectionWrapper } from '../components'
import { IconReview } from '../public/icons'

import Slider from 'react-slick'
// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function Testimonials({ data }: { data: any }) {
  return (
    <SectionWrapper title="Customer Reviews">
      <Carousel data={data} />
    </SectionWrapper>
  )
}

const SlickArrowLeft = ({ onClick }: { onClick: any }) => {
  return (
    <IconButton
      aria-label="previous-slide"
      icon={<RiArrowLeftSLine size={24} />}
      onClick={onClick}
      pos="absolute"
      left="0"
      top="11rem"
      zIndex="100"
      borderRadius="50%"
      bg={'transparent'}
    />
  )
}

const SlickArrowRight = ({ onClick }: { onClick: any }) => {
  return (
    <IconButton
      aria-label="next-slide"
      icon={<RiArrowRightSLine size={24} />}
      onClick={onClick}
      pos="absolute"
      right="0"
      top="11rem"
      zIndex="100"
      borderRadius="50%"
      bg={'transparent'}
    />
  )
}

function Carousel({ data }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 0,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    appendDots: dots => (
      <Box>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </Box>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <Slider {...settings}>
        {data.length > 0 &&
          data.map((el: any, idx: number) => (
            <Flex
              key={idx}
              flexDir={'column'}
              justifyContent="space-between"
              alignItems={'center'}
              boxShadow={'md'}
              w="15rem"
              maxH="24rem"
              borderRadius={'10px'}
              p="1.5rem"
              m={'1rem .5rem'}
              bg={bgColor}
            >
              <Box mr="auto">
                <IconReview color="#38a169" />
              </Box>
              <Text my=".75rem" fontStyle={'italic'} textAlign="center" fontSize=".9rem">
                {el?.review}
              </Text>
              <Flex justify={'center'}>
                <Rating initRate={el?.rate} readOnly />
              </Flex>
              <Image
                src={el?.avatar}
                alt={el?.name}
                boxSize="100px"
                fallbackSrc="https://via.placeholder.com/100"
                borderRadius={'full'}
                my=".75rem"
                mx="auto"
              />
              <Text fontSize=".9rem" textAlign={'center'} textTransform={'uppercase'}>
                {el?.name}
              </Text>
              <Text fontSize=".8rem" textAlign={'center'} fontStyle="italic">
                {el?.position}
              </Text>
            </Flex>
          ))}
      </Slider>
    </>
  )
}
