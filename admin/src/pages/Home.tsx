import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { FaEllipsisV } from 'react-icons/fa'
import { FiEdit, FiTrash } from 'react-icons/fi'

import { IAvatar } from '../lib/interfaces'
import {
  CustomAccordion,
  CustomModal,
  InputField,
  Layout,
  TextField,
  View,
  MiniMap,
  HandleImage,
  FeedBack
} from '../components'
import {
  aboutFormSchema,
  dealFormSchema,
  questionAnswerFormSchema,
  serviceFormSchema
} from '../lib/validation'
import { useHomeStore } from '../store'
import { isEmpty } from '../lib/utils/functions'
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
    dueDate: '2022-07-12T22:18',
    image: [img]
  },
  deal: {}
}
const miniMapData = [
  {
    link: '#services',
    label: 'Services'
  },
  {
    link: '#qa',
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

export default function Home() {
  const actions = useHomeStore((state: any) => state.actions)
  const setAction = useHomeStore((state: any) => state.setAction)
  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Home
      </Heading>

      <View cond={actions.add && actions.type === 'qa'}>
        <AddEditQuestionAnswer
          mode="add"
          isOpen={actions.add}
          onClose={() => setAction({ ...actions, add: false, type: '' })}
        />
      </View>
      <View cond={actions.add && actions.type === 'service'}>
        <AddEditService
          mode="add"
          isOpen={actions.add}
          onClose={() => setAction({ ...actions, add: false, type: '' })}
        />
      </View>

      <View cond={actions.edit && actions.type === 'qa'}>
        <AddEditQuestionAnswer
          mode="edit"
          isOpen={actions.edit}
          onClose={() => setAction({ ...actions, edit: false, type: '' })}
        />
      </View>
      <View cond={actions.edit && actions.type === 'service'}>
        <AddEditService
          mode="edit"
          isOpen={actions.edit}
          onClose={() => setAction({ ...actions, edit: false, type: '' })}
        />
      </View>

      <View cond={actions.delete && actions.type === 'service'}>
        <ActionBox
          mode="delete"
          isOpen={actions.delete}
          onClose={() => setAction({ ...actions, delete: false, type: '' })}
        />
      </View>
      <View cond={actions.delete && actions.type === 'qa'}>
        <ActionBox
          mode="delete"
          isOpen={actions.delete}
          onClose={() => setAction({ ...actions, delete: false, type: '' })}
        />
      </View>

      <View cond={actions.disable && actions.type === 'qa'}>
        <ActionBox
          mode="disable"
          isOpen={actions.disable}
          onClose={() => setAction({ ...actions, disable: false, type: '' })}
        />
      </View>
      <View cond={actions.disable && actions.type === 'service'}>
        <ActionBox
          mode="disable"
          isOpen={actions.disable}
          onClose={() => setAction({ ...actions, disable: false, type: '' })}
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

        <MiniMap data={miniMapData} />
      </Flex>
    </Layout>
  )
}

function About({ data }: { data: any }) {
  const isEditing = !isEmpty(data)
  const formOptions = {
    resolver: yupResolver(aboutFormSchema),
    defaultValues: isEditing ? data : {}
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(about: any) {
    console.log(about)
    isEditing ? create(about) : update(data.id, about)
  }

  function create(about: any) {
    console.log('create: ', about)
    setOpen(true)
  }

  function update(id: number, about: any) {
    console.log('update: ', id, about)
    setOpen(true)
  }

  const inputColor = useColorModeValue('white', 'gray_3')

  const [avatar, setAvatar] = useState<IAvatar>({
    isLoading: false,
    error: '',
    previews: data.images ? data?.images : [],
    images: data?.images || []
  })
  const [isOpen, setOpen] = useState(false)

  return (
    <Flex id="#about" flexDir={'column'} mx="auto" w={['full', '30rem']}>
      <FeedBack isOpen={isOpen} status="success" onClose={() => setOpen(false)} />
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
        <Flex flexDir="column-reverse">
          <HandleImage
            isEdit
            avatar={avatar}
            setAvatar={setAvatar}
            isMultiple={true}
            isPreview={true}
            label="Images"
          />
          <HandleImage avatar={avatar} setAvatar={setAvatar} isMultiple={true} isPreview={true} />
        </Flex>
        <Button
          type="submit"
          isLoading={isSubmitting}
          bg="accent_3"
          color="white"
          mt="1rem"
          ml="auto"
          _hover={{ bg: 'accent_2' }}
        >
          {isEditing ? 'Edit' : 'Add'}
        </Button>
      </form>
    </Flex>
  )
}

function Deal({ data }: { data: any }) {
  const isEditing = !isEmpty(data)
  const formOptions = {
    resolver: yupResolver(dealFormSchema),
    defaultValues: data ? data : {}
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(deal: any) {
    console.log(deal)
    isEditing ? update(data.id, deal) : create(deal)
  }

  function create(deal: any) {
    console.log('create: ', deal)
    setOpen(true)
  }

  function update(id: number, deal: any) {
    console.log('update: ', id, deal)
    setOpen(true)
  }

  const inputColor = useColorModeValue('white', 'gray_3')

  const [avatar, setAvatar] = useState<IAvatar>({
    isLoading: false,
    error: '',
    previews: data?.images || [],
    images: data?.images || []
  })
  const [isOpen, setOpen] = useState(false)

  return (
    <Flex id="deal" flexDir={'column'} mx="auto" w={['full', '30rem']}>
      <FeedBack isOpen={isOpen} status="success" onClose={() => setOpen(false)} />

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
        <Flex flexDir="column-reverse">
          <HandleImage
            isEdit
            avatar={avatar}
            setAvatar={setAvatar}
            isPreview={true}
            label="Images"
          />
          <HandleImage avatar={avatar} setAvatar={setAvatar} isPreview={true} />
        </Flex>
        <Button
          isLoading={isSubmitting}
          type="submit"
          bg="accent_3"
          color="white"
          mt="1rem"
          ml="auto"
          _hover={{ bg: 'accent_2' }}
        >
          {isEditing ? 'Edit' : 'Add'}
        </Button>
      </form>
    </Flex>
  )
}

function QuestionsAnswersListing({ data }: { data: any }) {
  const setAction = useHomeStore((state: any) => state.setAction)
  const actions = useHomeStore((state: any) => state.actions)
  const setSingleData = useHomeStore((state: any) => state.setSingleData)

  const textColor = useColorModeValue('gray_2', 'gray_7')
  const titleColor = useColorModeValue('black', 'white')

  function onAdd() {
    setSingleData({})
    setAction({ ...actions, add: true, type: 'service' })
  }

  return (
    <Box id="qa">
      <Button
        colorScheme="green"
        variant={'solid'}
        leftIcon={<AiOutlinePlus size={28} />}
        ml="auto"
        display={'flex'}
        onClick={() => onAdd()}
      >
        Q&A
      </Button>
      {data.map((el: any, idx: number) => (
        <Flex key={idx} justify={'space-between'} align="center">
          <Flex flexDir="column" p=".5rem 1rem" borderBottom="1px solid" borderColor="gray_6">
            <Box>
              <Box as="span" color={titleColor}>
                Question:
              </Box>
              <Text color={textColor} mb=".75rem">
                {el.question}
              </Text>
            </Box>
            <Box>
              <Box as="span" color={titleColor}>
                Answer:
              </Box>
              <Text color={textColor} mb=".75rem">
                {el.answer}
              </Text>
            </Box>
          </Flex>
          <ActionsMenu type="qa" data={el} setAction={setAction} />
        </Flex>
      ))}
    </Box>
  )
}

function Services({ data }: { data: any }) {
  const setAction = useHomeStore((state: any) => state.setAction)
  const actions = useHomeStore((state: any) => state.actions)
  const setSingleData = useHomeStore((state: any) => state.setSingleData)

  const textColor = useColorModeValue('gray_2', 'gray_7')
  const titleColor = useColorModeValue('black', 'white')

  function onAdd() {
    setSingleData({})
    setAction({ ...actions, add: true, type: 'service' })
  }

  return (
    <Box id="services">
      <Button
        colorScheme="green"
        variant={'solid'}
        leftIcon={<AiOutlinePlus size={28} />}
        ml="auto"
        display={'flex'}
        onClick={() => onAdd()}
      >
        Service
      </Button>
      {data.map((el: any, idx: number) => (
        <Flex key={idx} justify={'space-between'} align="center">
          <Flex flexDir="column" p=".5rem 1rem" borderBottom="1px solid" borderColor="gray_6">
            <Image src={el?.image} alt="" borderRadius="10px" w="5rem" h="5rem" />
            <Box>
              <Box as="span" color={titleColor}>
                Name:
              </Box>
              <Text color={textColor} mb=".75rem">
                {el.name}
              </Text>
            </Box>
            <Box>
              <Box as="span" color={titleColor}>
                Description:
              </Box>
              <Text color={textColor} mb=".75rem">
                {el.description}
              </Text>
            </Box>
          </Flex>
          <ActionsMenu type="service" data={el} setAction={setAction} />
        </Flex>
      ))}
    </Box>
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
  const actions = useHomeStore((state: any) => state.actions)

  const body =
    mode === 'delete'
      ? `Delete ${actions.type === 'qa' ? 'Q&A' : actions.type} ?`
      : `Disable ${actions.type === 'qa' ? 'Q&A' : actions.type} ?`
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
    console.log('delete: ', id)
    setAction({ delete: false })
  }

  const onDisable = (id: number) => {
    console.log('disable: ', id)
    setAction({ disable: false })
  }
  return <CustomModal onClose={onClose} isOpen={isOpen} body={body} footer={footer} />
}

interface IAddEditForm {
  isOpen: boolean
  mode: string
  onClose: () => void
}
function AddEditService({ mode, isOpen, onClose }: IAddEditForm) {
  const singleData = useHomeStore((state: any) => state.singleData)
  const formOptions = {
    resolver: yupResolver(serviceFormSchema),
    defaultValues: mode === 'add' ? {} : singleData
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(data: any) {
    console.log(data)
    mode === 'add' ? create(data) : update(singleData.id, data)
  }

  function create(data: any) {
    console.log('create: ', data)
    // api call
    setVisible(true)
    // onClose() // close modal pop up
  }

  function update(id: number, data: any) {
    console.log('update: ', id, data)
    onClose() // close modal pop up
    setVisible(true)
  }
  // edit/create fct - form - schema - title
  const title = mode === 'add' ? 'Add Service' : 'Edit Service'

  const inputColor = useColorModeValue('gray_9', 'gray_3')
  const [avatar, setAvatar] = useState<IAvatar>({
    isLoading: false,
    error: '',
    images: [],
    previews: []
  })
  const [isVisible, setVisible] = useState(false)

  const Form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column-reverse">
        <HandleImage
          isEdit
          avatar={avatar}
          setAvatar={setAvatar}
          isMultiple={true}
          isPreview={true}
          label="Images"
        />
        <HandleImage avatar={avatar} setAvatar={setAvatar} isMultiple={true} isPreview={true} />
      </Flex>
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
          {mode === 'add' ? 'Create' : 'Edit'}
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
          onClick={() => (mode === 'add' ? {} : reset(formOptions.defaultValues))}
        >
          Reset
        </Button>
      </Flex>
    </form>
  )
  return (
    <>
      <FeedBack isOpen={isVisible} status="success" onClose={() => setVisible(false)} />
      <CustomModal title={title} isOpen={isOpen} onClose={onClose} body={Form} />
    </>
  )
}

function AddEditQuestionAnswer({ mode, isOpen, onClose }: IAddEditForm) {
  const singleData = useHomeStore((state: any) => state.singleData)

  const formOptions = {
    resolver: yupResolver(questionAnswerFormSchema),
    defaultValues: mode === 'add' ? {} : singleData
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(data: any) {
    mode === 'add' ? create(data) : update(singleData.id, data)
  }

  function create(data: any) {
    console.log('create: ', data)
    // api call
  }

  function update(id: number, data: any) {
    console.log('update: ', id, data)
  }
  // edit/create fct - form - schema - title
  const title = mode === 'add' ? 'Add Questions & Answer' : 'Edit Questions & Answer'

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
          {mode === 'add' ? 'Create' : 'Edit'}
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
          onClick={() => (mode === 'add' ? {} : reset(formOptions.defaultValues))}
        >
          Reset
        </Button>
      </Flex>
    </form>
  )
  return <CustomModal title={title} isOpen={isOpen} onClose={onClose} body={Form} />
}

interface IActionMenu {
  type: string
  data: any
  setAction: any
}

function ActionsMenu({ type, data, setAction }: IActionMenu) {
  const setSingleData = useHomeStore((state: any) => state.setSingleData)

  const onEdit = (data: any) => {
    setAction({ edit: true, type: type })
    setSingleData(data)
  }
  const onDelete = (id: number) => {
    setAction({ delete: true, type: type })
    setSingleData(id)
  }
  const onDisable = (id: number) => {
    setAction({ disable: true, type: type })
    setSingleData(id)
  }

  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FaEllipsisV />}></MenuButton>
      <MenuList>
        <MenuItem
          color={'warning'}
          icon={<FiEdit color="warning" size="18" />}
          onClick={() => onEdit(data)}
        >
          Edit
        </MenuItem>
        <MenuItem
          color={'error'}
          icon={<FiTrash color="error" size="18" />}
          onClick={() => onDelete(data?.id)}
        >
          Delete
        </MenuItem>
        <MenuItem
          color={'gray_4'}
          icon={<AiOutlineClose color="disable" size="18" />}
          onClick={() => onDisable(data?.id)}
        >
          Disable
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
