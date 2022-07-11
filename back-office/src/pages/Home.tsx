import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Link as ChakraLink
} from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi'
import { FiEdit, FiTrash } from 'react-icons/fi'

import { CustomAccordion, CustomMenu, InputField, Layout, TextField } from 'components'
import img from '../assets/images/home.png'

const data = [
  {
    color: 'warning',
    onclick: () => console.log('edit'),
    label: 'Edit',
    icon: <FiEdit color="warning" size="18" />
  },
  {
    color: 'gray_4',
    onclick: () => console.log('Disable'),
    label: 'Disable',
    icon: <AiOutlineClose color="disable" size="18" />
  },
  {
    color: 'error',
    onclick: () => console.log('delete'),
    label: 'Delete',
    icon: <FiTrash color="error" size="18" />
  },
  {
    color: 'info',
    onclick: () => console.log('details'),
    label: 'Details',
    icon: <BiDetail color="info" size="18" />
  }
]

// add: components --> details - delete - edit/add - disable (same as product logic)
export default function Home() {
  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Home
      </Heading>

      <MiniMap />

      <CustomAccordion title="services" body={<Services />} />
      <CustomAccordion title="questions & answers" body={<QuestionsAnswersListing />} />
      <CustomAccordion title="about" body={<About mode="add" />} />
      <CustomAccordion title="deal" body={<Deal mode="add" />} />
    </Layout>
  )
}

function About({ mode }: { mode: string }) {
  // load about data from db
  // add validation + react hook form

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  const [avatar, setAvatar] = useState<any>({
    isLoading: false,
    error: '',
    img: ''
  })

  // image
  const handleImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setAvatar({ ...avatar, img: imgPreview })
  }
  return (
    <Flex flexDir={'column'} mx="auto" w={['full', '30rem']}>
      <InputField
        name="title"
        label="Title"
        placeholder="Title"
        bg={inputColor}
        w={['full', '30rem']}
      />
      <TextField
        name="description"
        placeholder="Description"
        label="Description"
        bg={inputColor}
        w={['full', '30rem']}
      />
      <InputField
        type="file"
        accept="image/*"
        name="images"
        label="images"
        placeholder="images"
        onChange={handleImage}
        w={['full', '30rem']}
        px="0"
        border="none"
      />
      <Button
        type="submit"
        bg="accent_3"
        color="white"
        mt="1rem"
        ml="auto"
        _hover={{ bg: 'accent_2' }}
      >
        {mode === 'add' ? 'Create' : 'Edit'}
      </Button>
    </Flex>
  )
}

function Deal({ mode }: { mode: string }) {
  // load about data from db
  // add validation + react hook form

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  const [avatar, setAvatar] = useState<any>({
    isLoading: false,
    error: '',
    img: ''
  })

  // image
  const handleImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setAvatar({ ...avatar, img: imgPreview })
  }
  return (
    <Flex flexDir={'column'} mx="auto" w={['full', '30rem']}>
      <InputField
        name="title"
        label="Title"
        placeholder="Title"
        bg={inputColor}
        w={['full', '30rem']}
      />
      <TextField
        name="description"
        placeholder="Description"
        label="Description"
        bg={inputColor}
        w={['full', '30rem']}
      />
      <InputField
        type="date"
        name="dueDate"
        label="Due Date"
        placeholder="Due Date"
        bg={inputColor}
        w={['full', '30rem']}
      />
      <InputField
        type="file"
        accept="image/*"
        name="image"
        label="image"
        placeholder="image"
        onChange={handleImage}
        w={['full', '30rem']}
        px="0"
        border="none"
      />
      <Button
        type="submit"
        bg="accent_3"
        color="white"
        mt="1rem"
        ml="auto"
        _hover={{ bg: 'accent_2' }}
      >
        {mode === 'add' ? 'Create' : 'Edit'}
      </Button>
    </Flex>
  )
}

function QuestionsAnswersListing() {
  // load about data from db
  const qaData = [
    {
      question:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      answer:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?'
    },
    {
      question:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      answer:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?'
    },
    {
      question:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      answer:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?'
    }
  ]
  // add validation + react hook form

  return (
    <>
      {qaData.map(el => (
        <Flex justify={'space-between'} align="center">
          <Flex flexDir="column" p=".5rem 1rem" borderBottom="1px solid" borderColor="gray_6">
            <Box>
              Question:
              <Text color="gray_3" mb=".75rem">
                {el.question}
              </Text>
            </Box>
            <Box>
              Answer:
              <Text color="gray_3" mb=".75rem">
                {el.answer}
              </Text>
            </Box>
          </Flex>
          <CustomMenu data={data} />
        </Flex>
      ))}
    </>
  )
}

function Services() {
  // load about data from db
  const servicesData = [
    {
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    }
  ]
  // add validation + react hook form

  return (
    <>
      {servicesData.map((el: any) => (
        <Flex justify={'space-between'} align="center">
          <Flex flexDir="column" p=".5rem 1rem" borderBottom="1px solid" borderColor="gray_6">
            <Image src={el?.image} alt="" borderRadius="10px" w="5rem" h="5rem" />
            <Box>
              Name:
              <Text color="gray_3" mb=".75rem">
                {el.name}
              </Text>
            </Box>
            <Box>
              Description:
              <Text color="gray_3" mb=".75rem">
                {el.description}
              </Text>
            </Box>
          </Flex>
          <CustomMenu data={data} />
        </Flex>
      ))}
    </>
  )
}

function MiniMap() {
  const data = [
    {
      link: '#services',
      label: 'Services'
    },
    {
      link: '#questionsAnswers',
      label: 'QuestionsAnswers'
    },
    {
      link: '#deal',
      label: 'Deal'
    },
    {
      link: '#about',
      label: 'About'
    }
  ]
  return (
    <Flex
      flexDir={'column'}
      w="12rem"
      h="fit-content"
      border="1px solid"
      borderColor={'gray_8'}
      bg={'gray_9'}
      color="gray_2"
      p=".5rem"
      borderRadius={'10px'}
      pos="fixed"
      right="5%"
      opacity={0.95}
      zIndex={100}
    >
      {data.map((el, idx) => (
        <ChakraLink key={idx} href={el.link} _hover={{ color: 'accent_3' }}>
          {el.label}
        </ChakraLink>
      ))}
    </Flex>
  )
}
