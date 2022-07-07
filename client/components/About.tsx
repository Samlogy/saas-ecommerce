import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { SectionWrapper } from '../components'

export default function About({ data }: { data: any }) {
  return (
    <SectionWrapper title="WHY CHOOSE US ?">
      <Flex flexWrap="wrap" justifyContent={'space-evenly'}>
        <Image src={data?.image} alt="about image" boxSize="250px" borderRadius={'5px'} />

        <Flex flexDir="column" w={['80%', '', '40%', '']} mt={['1.5rem', '', '0rem', '']}>
          <Heading fontSize="1.8rem" fontWeight="700" mb="1rem" color="accent_4">
            {data?.title}
          </Heading>
          <Text fontSize=".9rem" color="gray_3">
            {data?.text}
          </Text>
          <Button
            color="accent_3"
            bg="transparent"
            w="100px"
            borderRadius={'10px'}
            mt="1rem"
            fontSize=".9rem"
            transition={'.25s'}
            _hover={{ bg: 'transparent', border: '2px solid', borerColor: 'accent_4' }}
          >
            Shop Now
          </Button>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}
