import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { CarouselTemplate, Rating, SectionWrapper } from '../components'
import { IconReview } from '../public/icons'

export default function Testimonials({ data }: { data: any }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 0,
    lazyLoad: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }
  return (
    <SectionWrapper title="Customer Reviews">
      <Box w="90%" mx="auto">
        <CarouselTemplate settings={settings}>
          {data.length > 0 &&
            data.map((el: any, idx: number) => (
              <Flex
                key={idx}
                flexDir={'column'}
                justifyContent="space-between"
                alignItems={'center'}
                w="15rem"
                maxH="24rem"
                borderRadius={'10px'}
                p="1.5rem"
                m={'1rem .5rem'}
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
        </CarouselTemplate>
      </Box>
    </SectionWrapper>
  )
}

const SlickArrowLeft = props => {
  return (
    <IconButton
      aria-label="previous-slide"
      icon={<RiArrowLeftSLine size={24} />}
      onClick={props?.onClick}
      pos="absolute"
      left="0"
      top="11rem"
      zIndex="100"
      borderRadius="50%"
      bg={'transparent'}
      _focus={{ outline: 'none' }}
    />
  )
}

const SlickArrowRight = props => {
  return (
    <IconButton
      aria-label="next-slide"
      icon={<RiArrowRightSLine size={24} />}
      onClick={props?.onClick}
      pos="absolute"
      right="0"
      top="11rem"
      zIndex="100"
      borderRadius="50%"
      bg={'transparent'}
      _focus={{ outline: 'none' }}
    />
  )
}
