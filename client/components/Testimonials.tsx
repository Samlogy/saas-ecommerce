import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { Rating, SectionWrapper } from '../components'
import { IconReview } from '../public/icons'
import productImage from '../public/images/product.png'

export default function Testimonials({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <SectionWrapper title="Customer Reviews">
      <Flex flexDir="row" flexWrap="wrap" justifyContent={['center', 'space-between']}>
        {data.length > 0 &&
          data.map((el: any, idx: number) => (
            <Flex
              key={idx}
              flexDir={'column'}
              justifyContent="space-between"
              alignItems={'center'}
              boxShadow={'md'}
              w="15rem"
              borderRadius={'10px'}
              p="1.5rem"
              m={'1rem .5rem'}
              bg={bgColor}
            >
              <Box mr="auto">
                <IconReview color="#38a169" />
              </Box>
              <Text my=".75rem" fontStyle={'italic'} textAlign="center" fontSize=".9rem">
                {el.review}{' '}
              </Text>
              <Rating initRate={el?.rate} readOnly />
              <Image
                src={el.avatar}
                alt={el.name}
                boxSize="100px"
                fallbackSrc="https://via.placeholder.com/100"
                borderRadius={'full'}
                my=".75rem"
              />
              <Text fontSize=".9rem" textTransform={'uppercase'}>
                {el.name}{' '}
              </Text>
            </Flex>
          ))}
      </Flex>
    </SectionWrapper>
  )
}
