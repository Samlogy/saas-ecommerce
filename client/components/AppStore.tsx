import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { SectionWrapper } from '../components'
import heroImage from '../public/images/home.png'

export default function AppStore() {
  return (
    <SectionWrapper title="Watch Your Delivery At Any Time">
      <Flex
        flexDir={['column', '', 'row-reverse', '']}
        justifyContent={['center', '', 'space-evenly', '']}
        mt="1.5rem"
      >
        <Flex flexDir={'column'} justifyContent="center" alignItems="center">
          <Text mb="1rem" textAlign={'center'} maxW="24rem" fontSize={'.9rem'}>
            With our app you can view the route of your order, from our local headquarters to the
            place where you are. Look for the app now!{' '}
          </Text>

          <Flex mb="2rem">
            <Button
              bg={'accent_3'}
              _hover={{ bg: 'accent_2' }}
              color={'white'}
              borderRadius="20px"
              mx=".5rem"
              fontSize=".9rem"
            >
              App Store{' '}
            </Button>
            <Button
              bg={'accent_3'}
              _hover={{ bg: 'accent_2' }}
              color={'white'}
              borderRadius="20px"
              mx=".5rem"
              fontSize=".9rem"
            >
              Google Play{' '}
            </Button>
          </Flex>
        </Flex>

        <Image src={heroImage.src} boxSize={['180px', '', '', '']} mx={['auto', '', '0', '0']} />
      </Flex>
    </SectionWrapper>
  )
}
