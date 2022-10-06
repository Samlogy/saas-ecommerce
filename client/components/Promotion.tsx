import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Countdown } from '../components'

export default function Promotion({ data }: { data: any }) {
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      justify={['center', '', 'space-evenly', '']}
      mt="1.5rem"
      p="2.5rem 1.5rem"
    >
      <Flex flexDir={'column'} justify="center" alignItems={['center', '', 'flex-start']}>
        <Heading
          fontSize="24px"
          mb="1rem"
          textTransform="uppercase"
          w={['15rem', '', '24rem', '']}
          wordBreak={'keep-all'}
          textAlign={'left'}
        >
          {data?.title}
        </Heading>
        <Text mb="1rem" textAlign={'left'} w={['15rem', '', '24rem', '']} fontSize={'.9rem'}>
          {data?.text}
        </Text>

        <Countdown dueDay={new Date(data?.dueDate)} />

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
        src={data?.image}
        boxSize={['180px', '', '', '']}
        mx={['auto', '', '0', '0']}
        mt={['2rem', '', '0', '']}
      />
    </Flex>
  )
}
