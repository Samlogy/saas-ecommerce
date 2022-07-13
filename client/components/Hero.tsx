import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import heroImage from '../public/images/home.png'

export default function Hero() {
  return (
    <Flex
      flexDir="row"
      flexWrap={'wrap-reverse'}
      justifyContent={['center', '', 'space-between', '']}
      my="2rem"
    >
      <Flex
        flexDir={'column'}
        alignItems="center"
        justifyContent={'center'}
        w={['30rem', '', '25rem', '']}
      >
        <Heading mb="1.5rem"> Plants will make your life better </Heading>
        <Text mb="1.5rem">
          Create incredible plant design for your offices or apastaments. Add fresness to your new
          ideas.
        </Text>
        <Button
          w="120px"
          m={['0 auto 0 auto', '', '0 0 0 auto', '']}
          bg={'accent_3'}
          _hover={{ bg: 'accent_2' }}
          color={'white'}
        >
          Explore
        </Button>
      </Flex>
      <Image
        src={heroImage.src}
        boxSize={['18rem', '', '20rem', '']}
        mx={['auto', '', '0', '']}
        mb={['1rem', '', '0', '']}
      />
    </Flex>
  )
}
