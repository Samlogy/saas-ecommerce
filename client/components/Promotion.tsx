import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Countdown } from '../components'
import heroImage from '../public/images/home.png'

export default function Promotion() {
  return (
    <Flex
      flexDir={['column', '', 'row', '']}
      justifyContent={['center', '', 'space-evenly', '']}
      mt="1.5rem"
      p="2.5rem 1.5rem"
    >
      <Flex flexDir={'column'} justifyContent="center" alignItems="flex-start">
        <Heading
          fontSize="24px"
          mb="1rem"
          textTransform="uppercase"
          w={['15rem', '', '24rem', '']}
          wordBreak={'keep-all'}
          textAlign={'left'}
        >
          Deal of The Day
        </Heading>
        <Text mb="1rem" textAlign={'left'} w={['15rem', '', '24rem', '']} fontSize={'.9rem'}>
          With our app you can view the route of your order, from our local headquarters to the
          place where you are. Look for the app now!{' '}
        </Text>

        <Countdown initYear={new Date().getFullYear()} dueDay={new Date('2022-07-10')} />

        <Button
          bg={'accent_3'}
          _hover={{ bg: 'accent_2' }}
          color={'white'}
          borderRadius="20px"
          fontSize=".9rem"
        >
          Get The Deal
        </Button>
      </Flex>

      <Image
        src={heroImage.src}
        boxSize={['180px', '', '', '']}
        mx={['auto', '', '0', '0']}
        mt={['2rem', '', '0', '']}
      />
    </Flex>
  )
}
