import { Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { SectionWrapper } from '../components'

export default function About({ data }: { data: any }) {
  const textColor = useColorModeValue('gray_4', 'gray_8')
  const titleColor = useColorModeValue('accent_5', 'accent_6')
  return (
    <SectionWrapper title="WHY CHOOSE US ?">
      <Flex flexWrap="wrap" justifyContent={'space-evenly'}>
        <Image src={data?.image} alt="about image" boxSize="250px" borderRadius={'10px'} />

        <Flex flexDir="column" w={['80%', '', '40%', '']} mt={['1.5rem', '', '0rem', '']}>
          <Heading fontSize="1.8rem" fontWeight="700" mb="1rem" color={titleColor}>
            {data?.title}
          </Heading>
          <Text fontSize=".9rem" color={textColor}>
            {data?.text}
          </Text>
          <Button
            color={titleColor}
            bg="transparent"
            w="100px"
            borderRadius={'10px'}
            mt="1rem"
            fontSize=".9rem"
            transition={'.25s'}
            _hover={{ bg: 'transparent', border: '2px solid', borerColor: {titleColor} }}
          >
            Shop Now
          </Button>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}
