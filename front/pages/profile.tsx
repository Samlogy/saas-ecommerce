// import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Layout, View, StepForm } from '../components'
import profileImage from '../public/images/profile.jpg'

const form_1 = (
  <Flex
    flexDir="column"
    alignItems={'center'}
    m="2rem auto"
    p={4}
    w="400px"
    rounded={'xl'}
    boxShadow={'lg'}
  >
    <FormControl id="username" mb=".5rem">
      <FormLabel> username </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray.500' }}
        // isInvalid={errors.username ? true : false}
        errorBorderColor="error"
        borderColor="gray.300"
        borderRadius="4px"
        // {...register('username')}
      />
      {/* {errors.username && <ErrorMessage error={errors.username.message} />} */}
    </FormControl>

    <FormControl id="email" mb=".5rem">
      <FormLabel> Email Address </FormLabel>
      <Input
        type="email"
        placeholder="your-email@example.com"
        _placeholder={{ color: 'gray.500' }}
        // isInvalid={errors.email ? true : false}
        errorBorderColor="error"
        borderColor="gray.300"
        borderRadius="4px"
        // {...register('email')}
      />
      {/* {errors.email && <ErrorMessage error={errors.email.message} />} */}
    </FormControl>
  </Flex>
)

const form_2 = (
  <Flex
    flexDir="column"
    alignItems={'center'}
    m="2rem auto"
    p={4}
    w="400px"
    rounded={'xl'}
    boxShadow={'lg'}
  >
    <FormControl id="fullName" mb=".5rem">
      <FormLabel> fullName </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray.500' }}
        // isInvalid={errors.fullName ? true : false}
        errorBorderColor="error"
        borderColor="gray.300"
        borderRadius="4px"
        // {...register('fullName')}
      />
      {/* {errors.fullName && <ErrorMessage error={errors.fullName.message} />} */}
    </FormControl>

    <FormControl id="email" mb=".5rem">
      <FormLabel> address </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray.500' }}
        // isInvalid={errors.address ? true : false}
        errorBorderColor="error"
        borderColor="gray.300"
        borderRadius="4px"
        // {...register('address')}
      />
      {/* {errors.address && <ErrorMessage error={errors.address.message} />} */}
    </FormControl>
  </Flex>
)

const form_3 = (
  <Flex
    flexDir="column"
    alignItems={'center'}
    m="2rem auto"
    p={4}
    w="400px"
    rounded={'xl'}
    boxShadow={'lg'}
  >
    <FormControl id="age" mb=".5rem">
      <FormLabel> age </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray.500' }}
        // isInvalid={errors.age ? true : false}
        errorBorderColor="error"
        borderColor="gray.300"
        borderRadius="4px"
        // {...register('age')}
      />
      {/* {errors.age && <ErrorMessage error={errors.age.message} />} */}
    </FormControl>
  </Flex>
)

const steps = [
  { label: 'Form 1', content: form_1, icon: AiOutlineMail, description: 'desc 1' },
  { label: 'Form 2', content: form_2, icon: BsCalendarDate, description: 'desc 2' },
  { label: 'Form 3', content: form_3, icon: HiOutlineLocationMarker, description: 'desc 3' }
]

function Profile(props: any) {
  const user = { avatar: profileImage.src } // super tokens
  const userExtends = props.userExtends // our db
  const shipping = props.shipping // our db

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading as="h1" fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
          Profile
        </Heading>

        {/* <StepForm steps={steps} /> */}

        <Flex flexDir={'column'} w={['20rem', '', '40rem', '']} mx="auto">
          <DisplayUserData data={user} />

          <Button
            bg={'accent_3'}
            color={'white'}
            w="10rem"
            mb="2rem"
            mx="auto"
            _hover={{ bg: 'accent_4' }}
          >
            <Link href="/edit-profile"> Edit My Profile </Link>
          </Button>

          <DisplayMoreData data={shipping} />
        </Flex>
      </View>
    </Layout>
  )
}

export default Profile

const DisplayUserData = ({ data }: { data: any }) => {
  return (
    <Flex
      flexDir={'column'}
      boxShadow="md"
      p="1rem"
      borderRadius={'10px'}
      alignItems="flex-start"
      justifyContent={'center'}
      mb="2rem"
    >
      <Heading fontSize="1.2rem" mb="1rem" textTransform={'uppercase'}>
        {' '}
        My Personal Informations{' '}
      </Heading>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={data?.avatar}
        alt="avatar image"
        fallbackSrc="https://via.placeholder.com/150"
      />

      <Flex flexDir="column" mt=".5rem">
        <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} />
        <BoxData data={data?.address} icon={<HiOutlineLocationMarker size={24} />} />
        <BoxData data={data?.createdAt} icon={<BsCalendarDate size={24} />} />
      </Flex>
    </Flex>
  )
}

const DisplayMoreData = ({ data }: { data: any }) => {
  return (
    <Flex
      flexDir={'column'}
      boxShadow="md"
      p="1rem"
      borderRadius={'10px'}
      alignItems="flex-start"
      justifyContent={'center'}
      mb="2rem"
    >
      <Heading fontSize="1.2rem" mb="1rem" textTransform={'uppercase'}>
        {' '}
        My Shipping Informations{' '}
      </Heading>

      <Flex flexDir="column" mt=".5rem">
        <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} />
        <BoxData data={data?.address} icon={<HiOutlineLocationMarker size={24} />} />
        <BoxData data={data?.createdAt} icon={<BsCalendarDate size={24} />} />
      </Flex>
    </Flex>
  )
}

const BoxData = ({ data, icon }: { data: any; icon: any }) => {
  return (
    <Flex alignItems={'center'} mb=".5rem">
      {icon}
      <Box as="span" fontSize="1rem" fontWeight="500" ml=".25rem">
        {' '}
        Email Address:{' '}
      </Box>
      {data ? (
        <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem">
          {' '}
          {data}{' '}
        </Box>
      ) : (
        <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem" color="gray.500">
          {' '}
          ---{' '}
        </Box>
      )}
    </Flex>
  )
}

export async function getStaticProps() {
  // api call
  const userExtend = {}
  const shipping = {}

  return {
    props: {
      userExtend,
      shipping
    },
    revalidate: 10
  }
}
