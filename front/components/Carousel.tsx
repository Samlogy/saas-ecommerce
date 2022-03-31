import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Carousel = ({ slides }: { slides: any }) => {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    bg: 'green.300',
    _hover: {
      bg: 'green.400'
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesCount = slides.length

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1))
  }
  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1))
  }
  const setSlide = slide => {
    setCurrentSlide(slide)
  }
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`
  }

  return (
    <Flex>
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="5px 8px"
                pos="absolute"
                top="0"
                left="0"
                bg="green.300"
                borderRadius={'5px'}
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide}
                borderRadius={'5px'}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>

        <Text {...arrowStyles} left="0" onClick={prevSlide} borderRadius={'5px'}>
          &#10094;
        </Text>

        <Text {...arrowStyles} right="0" onClick={nextSlide} borderRadius={'5px'}>
          &#10095;
        </Text>

        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={['7px', , '15px']}
              m="0 2px"
              bg={currentSlide === slide ? 'green.600' : 'green.300'}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: 'green.600' }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}
export default Carousel
