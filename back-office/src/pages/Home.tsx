import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  IconButton,
  useColorModeValue,
  Link as ChakraLink
} from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi'
import { FiEdit, FiTrash } from 'react-icons/fi'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import {
  CustomAccordion,
  CustomMenu,
  InputField,
  Layout,
  TextField,
  View,
  CustomModal,
  DisplayRowData
} from 'components'
import {
  dealFormSchema,
  aboutFormSchema,
  questionAnswerFormSchema,
  serviceFormSchema
} from 'lib/validation'
import { useHomeStore } from 'store'
import img from '../assets/images/home.png'

// load about data from db
const homeData = {
  services: [
    {
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    },
    {
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    },
    {
      name: 'provide some sort of IT service',
      description:
        'tempore numquam perferendis consectetur eum praesentium fuga maiores nostrum doloribus accusamus sit at voluptates aliquam ad? Distinctio?',
      image: img
    }
  ],
  questionsAnswers: [
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

// add: components --> details - delete - edit/add - disable (same as product logic)
export default function Home() {
  const actions = useHomeStore((state: any) => state.actions)
  const setAction = useHomeStore((state: any) => state.setAction)

  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Home
      </Heading>

      <View cond={actions.add}>
        <AddEditService
          isOpen={actions.add}
          onClose={() => setAction({ ...actions, add: false })}
        />
        <AddEditQuestionAnswer
          isOpen={actions.add}
          onClose={() => setAction({ ...actions, add: false })}
        />
      </View>

      <View cond={actions.edit}>
        <AddEditService
          isOpen={actions.edit}
          onClose={() => setAction({ ...actions, edit: false })}
        />
        <AddEditQuestionAnswer
          isOpen={actions.edit}
          onClose={() => setAction({ ...actions, edit: false })}
        />
      </View>

      <View cond={actions.delete}>
        <ActionBox
          mode="delete"
          isOpen={actions.delete}
          onClose={() => setAction({ ...actions, delete: false })}
        />
      </View>

      <View cond={actions.disable}>
        <ActionBox
          mode="disable"
          isOpen={actions.disable}
          onClose={() => setAction({ ...actions, disable: false })}
        />
      </View>

      <Flex flexDir="row" justify="space-between">
        <Flex flexDir="column" flexBasis={['full', '', '70%', '80%']}>
          <CustomAccordion title="services" body={<Services data={homeData.services} />} />
          <CustomAccordion
            title="questions & answers"
            body={<QuestionsAnswersListing data={homeData.questionsAnswers} />}
          />
          <CustomAccordion title="about" body={<About data={homeData.about} />} />
          <CustomAccordion title="deal" body={<Deal data={homeData.deal} />} />
        </Flex>

        <MiniMap />
      </Flex>
    </Layout>
  )
}

function About({ data }: { data: any }) {
  const formOptions = {
    resolver: yupResolver(aboutFormSchema),
    defaultValues: data ? data : {}
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(about: any) {
    console.log(about)
    return !data ? create(data) : update(data.id, about)
  }

  function create(about: any) {
    console.log('create: ', about)
  }

  function update(id: number, about: any) {
    console.log('update: ', id, about)
  }

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          errors={errors}
          register={register}
          name="title"
          label="Title"
          placeholder="Title"
          bg={inputColor}
          w={['full', '30rem']}
        />
        <TextField
          errors={errors}
          register={register}
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
          label="image"
          placeholder="image"
          onChange={handleImage}
          w={['full', '30rem']}
          px="0"
          border="none"
        />
        <Button
          type="submit"
          isLoading={isSubmitting}
          bg="accent_3"
          color="white"
          mt="1rem"
          ml="auto"
          _hover={{ bg: 'accent_2' }}
        >
          {data ? 'Edit' : 'Create'}
        </Button>
      </form>
    </Flex>
  )
}

function Deal({ data }: { data: any }) {
  const formOptions = {
    resolver: yupResolver(dealFormSchema),
    defaultValues: data ? data : {}
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(deal: any) {
    console.log(deal)
    return !data ? create(data) : update(data.id, deal)
  }

  function create(deal: any) {
    console.log('create: ', deal)
  }

  function update(id: number, deal: any) {
    console.log('update: ', id, deal)
  }

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  const [avatar, setAvatar] = useState<any>({
    isLoading: false,
    error: '',
    img: data?.image || ''
  })

  // image
  const handleImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setAvatar({ ...avatar, img: imgPreview })
  }
  return (
    <Flex flexDir={'column'} mx="auto" w={['full', '30rem']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          errors={errors}
          register={register}
          name="title"
          label="Title"
          placeholder="Title"
          bg={inputColor}
          w={['full', '30rem']}
        />
        <TextField
          errors={errors}
          register={register}
          name="description"
          placeholder="Description"
          label="Description"
          bg={inputColor}
          w={['full', '30rem']}
        />
        <InputField
          errors={errors}
          register={register}
          type="datetime-local"
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
          isLoading={isSubmitting}
          type="submit"
          bg="accent_3"
          color="white"
          mt="1rem"
          ml="auto"
          _hover={{ bg: 'accent_2' }}
        >
          {!data ? 'Create' : 'Edit'}
        </Button>
      </form>
    </Flex>
  )
}

function QuestionsAnswersListing({ data }: { data: any }) {
  const setAction = useHomeStore((state: any) => state.setAction)
  const actions = useHomeStore((state: any) => state.actions)
  const setSingleData = useHomeStore((state: any) => state.setSingleData)

  const menuData = [
    {
      color: 'warning',
      onclick: () => {
        setAction({ edit: true })
        setSingleData(data[0])
      },
      label: 'Edit',
      icon: <FiEdit color="warning" size="18" />
    },
    {
      color: 'gray_4',
      onclick: () => setAction({ disable: true }),
      label: 'Disable',
      icon: <AiOutlineClose color="disable" size="18" />
    },
    {
      color: 'error',
      onclick: () => setAction({ delete: true }),
      label: 'Delete',
      icon: <FiTrash color="error" size="18" />
    }
  ]
  return (
    <>
      <IconButton
        colorScheme="green"
        aria-label="add-item"
        size="md"
        icon={<AiOutlinePlus size={28} />}
        ml="auto"
        display={'flex'}
        onClick={() => setAction({ ...actions, add: true })}
      />
      {data.map((el: any) => (
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
          <CustomMenu data={menuData} />
        </Flex>
      ))}
    </>
  )
}

function Services({ data }: { data: any }) {
  const setAction = useHomeStore((state: any) => state.setAction)
  const actions = useHomeStore((state: any) => state.actions)
  const setSingleData = useHomeStore((state: any) => state.setSingleData)

  const menuData = [
    {
      color: 'warning',
      onclick: () => {
        setAction({ edit: true })
        setSingleData(data)
      },
      label: 'Edit',
      icon: <FiEdit color="warning" size="18" />
    },
    {
      color: 'gray_4',
      onclick: () => setAction({ disable: true }),
      label: 'Disable',
      icon: <AiOutlineClose color="disable" size="18" />
    },
    {
      color: 'error',
      onclick: () => setAction({ delete: true }),
      label: 'Delete',
      icon: <FiTrash color="error" size="18" />
    }
  ]

  return (
    <>
      <IconButton
        colorScheme="green"
        aria-label="add-item"
        size="md"
        icon={<AiOutlinePlus size={28} />}
        ml="auto"
        display={'flex'}
        onClick={() => setAction({ ...actions, add: true })}
      />
      {data.map((el: any) => (
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
          <CustomMenu data={menuData} />
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
      flexBasis={['20%', '', '', '10%']}
      display={['none', '', 'flex']}
    >
      {data.map((el, idx) => (
        <ChakraLink key={idx} href={el.link} _hover={{ color: 'accent_3' }}>
          {el.label}
        </ChakraLink>
      ))}
    </Flex>
  )
}

interface IActionBox {
  isOpen: boolean
  onClose: () => void
  mode: string
}
function ActionBox({ isOpen, onClose, mode }: IActionBox) {
  const singleData = useHomeStore((state: any) => state.singleData)
  const setAction = useHomeStore((state: any) => state.setAction)

  const body = mode === 'delete' ? 'Delete Product ?' : 'Disable Product ?'
  const footer = (
    <>
      <Button
        colorScheme="red"
        onClick={
          mode === 'delete' ? () => onDelete(singleData?.id) : () => onDisable(singleData?.id)
        }
      >
        Yes
      </Button>
      <Button onClick={onClose} bg="gray_3" color="white" _hover={{ bg: 'gray_4' }} ml={3}>
        No
      </Button>
    </>
  )

  const onDelete = (id: number) => {
    console.log('delete product: ', id)
    setAction({ delete: false })
  }

  const onDisable = (id: number) => {
    console.log('disable product: ', id)
    setAction({ disable: false })
  }
  return <CustomModal onClose={onClose} isOpen={isOpen} body={body} footer={footer} />
}

interface IAddEditForm {
  isOpen: boolean
  onClose: () => void
}
function AddEditService({ isOpen, onClose }: IAddEditForm) {
  const singleData = useHomeStore((state: any) => state.singleData)
  const formOptions = {
    resolver: yupResolver(serviceFormSchema),
    defaultValues: singleData ? singleData : {}
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(data: any) {
    return !singleData ? create(data) : update(singleData.id, data)
  }

  function create(data: any) {
    console.log('create product: ', data)
    // api call
  }

  function update(id: number, data: any) {
    console.log('update product: ', id, data)
  }
  // edit/create fct - form - schema - title
  const title = !singleData ? 'Add Service' : 'Edit Service'

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
  const Form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="file"
        accept="image/*"
        name="images"
        label="image"
        placeholder="image"
        onChange={handleImage}
        w={['full', '30rem']}
        px="0"
        border="none"
      />
      <InputField
        errors={errors}
        register={register}
        name="name"
        placeholder="Name"
        label="Name"
        bg={inputColor}
        w="full"
      />

      <TextField
        errors={errors}
        register={register}
        name="description"
        placeholder="Description"
        label="Description"
        bg={inputColor}
        w="full"
      />

      <Flex flexDir="row">
        <Button
          type="submit"
          isLoading={isSubmitting}
          bg="accent_3"
          color="white"
          mt="1rem"
          ml="auto"
          display={'flex'}
          justifyContent="flex-end"
          _hover={{ bg: 'accent_2' }}
        >
          {!singleData ? 'Create' : 'Edit'}
        </Button>
        <Button
          type="reset"
          bg="gray_3"
          color="white"
          mt="1rem"
          ml="1rem"
          display={'flex'}
          justifyContent="flex-end"
          _hover={{ bg: 'gray_4' }}
          onClick={() => (!singleData ? {} : reset(formOptions.defaultValues))}
        >
          Reset
        </Button>
      </Flex>
    </form>
  )
  return <CustomModal title={title} isOpen={isOpen} onClose={onClose} body={Form} />
}

function AddEditQuestionAnswer({ isOpen, onClose }: IAddEditForm) {
  const singleData = useHomeStore((state: any) => state.singleData)
  const formOptions = {
    resolver: yupResolver(questionAnswerFormSchema),
    defaultValues: singleData ? singleData : {}
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(data: any) {
    console.log(data)
    return !singleData ? create(data) : update(singleData.id, data)
  }

  function create(data: any) {
    console.log('create product: ', data)
    // api call
  }

  function update(id: number, data: any) {
    console.log('update product: ', id, data)
  }
  // edit/create fct - form - schema - title
  const title = !singleData ? 'Add Questions & Answer' : 'Edit Questions & Answer'

  const inputColor = useColorModeValue('gray_9', 'gray_3')
  const Form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        errors={errors}
        register={register}
        name="question"
        placeholder="Question"
        label="Question"
        bg={inputColor}
        w="full"
      />

      <TextField
        errors={errors}
        register={register}
        name="answer"
        placeholder="Answer"
        label="Answer"
        bg={inputColor}
        w="full"
      />

      <Flex flexDir="row">
        <Button
          type="submit"
          isLoading={isSubmitting}
          bg="accent_3"
          color="white"
          mt="1rem"
          ml="auto"
          display={'flex'}
          justifyContent="flex-end"
          _hover={{ bg: 'accent_2' }}
        >
          {!singleData ? 'Create' : 'Edit'}
        </Button>
        <Button
          type="reset"
          bg="gray_3"
          color="white"
          mt="1rem"
          ml="1rem"
          display={'flex'}
          justifyContent="flex-end"
          _hover={{ bg: 'gray_4' }}
          onClick={() => (!singleData ? {} : reset(formOptions.defaultValues))}
        >
          Reset
        </Button>
      </Flex>
    </form>
  )
  return <CustomModal title={title} isOpen={isOpen} onClose={onClose} body={Form} />
}
