import { Flex, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'

import img from '../assets/images/home.png'

// load about data from db
const homeData = {
  services: [
    {
      id: 1,
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    },
    {
      id: 2,
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    },
    {
      id: 3,
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    }
  ],
  questionsAnswers: [
    {
      id: 1,
      question:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      answer:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?'
    },
    {
      id: 2,
      question:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      answer:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?'
    },
    {
      id: 3,
      question:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      answer:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?'
    }
  ],
  about: {
    title: 'about ...',
    description: 'lorem stuff and something ....',
    image: img
  },
  deal: {
    title: 'about ...',
    description: 'lorem stuff and something ....',
    dueDate: '2022-07-12T22:18',
    image: img
  }
}

export default function MiniMap({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('gray_3', 'gray_9')
  return (
    <Flex
      flexDir={'column'}
      w="12rem"
      h="fit-content"
      border="1px solid"
      borderColor={bgColor}
      bg={bgColor}
      color={textColor}
      p=".5rem"
      borderRadius={'10px'}
      flexBasis={['20%', '', '', '10%']}
      display={['none', '', 'flex']}
    >
      {data.map((el: any, idx: number) => (
        <ChakraLink
          key={idx}
          href={el.link}
          _hover={{ color: 'accent_3', textDecor: 'underline' }}
          mb=".25rem"
        >
          {el.label}
        </ChakraLink>
      ))}
    </Flex>
  )
}
