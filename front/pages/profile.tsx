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
  Text,
  useColorModeValue
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
    <FormControl id="username" mb="1rem">
      <FormLabel> username </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray_4' }}
        // isInvalid={errors.username ? true : false}
        errorBorderColor="error"
        borderColor="gray_6"
        borderRadius="4px"
        // {...register('username')}
      />
      {/* {errors.username && <ErrorMessage error={errors.username.message} />} */}
    </FormControl>

    <FormControl id="email" mb="1rem">
      <FormLabel> Email Address </FormLabel>
      <Input
        type="email"
        placeholder="your-email@example.com"
        _placeholder={{ color: 'gray_4' }}
        // isInvalid={errors.email ? true : false}
        errorBorderColor="error"
        borderColor="gray_6"
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
    <FormControl id="fullName" mb="1rem">
      <FormLabel> fullName </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray_4' }}
        // isInvalid={errors.fullName ? true : false}
        errorBorderColor="error"
        borderColor="gray_6"
        borderRadius="4px"
        // {...register('fullName')}
      />
      {/* {errors.fullName && <ErrorMessage error={errors.fullName.message} />} */}
    </FormControl>

    <FormControl id="email" mb="1rem">
      <FormLabel> address </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray_4' }}
        // isInvalid={errors.address ? true : false}
        errorBorderColor="error"
        borderColor="gray_6"
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
    <FormControl id="age" mb="1rem">
      <FormLabel> age </FormLabel>
      <Input
        type="text"
        placeholder=""
        _placeholder={{ color: 'gray_4' }}
        // isInvalid={errors.age ? true : false}
        errorBorderColor="error"
        borderColor="gray_6"
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
  const user = {} // super tokens
  const userExtends = props.userExtends // our db
  const shipping = props.shipping // our db
  const vendor = props.vendor // our db

  const labelData = {
    email: 'Email Address',
    createdAt: 'Creation Date',
    address: 'Localition'
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
          Profile
        </Heading>

        {/* <StepForm steps={steps} /> */}

        <Flex flexDir={'column'} w={['20rem', '', '40rem', '']} mx="auto">
          <DisplayUserData data={user} labelData={labelData} />

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

          <View cond={userExtends?.type === 'customer'}>
            <DisplayShippingData data={shipping} labelData={labelData} />
          </View>

          <View cond={userExtends?.type === 'vendor'}>
            <DisplayVendorData data={vendor} labelData={labelData} />
          </View>
        </Flex>
      </View>
    </Layout>
  )
}

export default Profile

const DisplayUserData = ({ data, labelData }: { data: any; labelData: any }) => {
  return (
    <TemplateDataDisplay title="My Personal Informations">
      <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} label={labelData?.email} />
      <BoxData
        data={data?.address}
        icon={<HiOutlineLocationMarker size={24} />}
        label={labelData?.address}
      />
      <BoxData
        data={data?.createdAt}
        icon={<BsCalendarDate size={24} />}
        label={labelData?.createdAt}
      />
    </TemplateDataDisplay>
  )
}
const DisplayShippingData = ({ data, labelData }: { data: any; labelData: any }) => {
  return (
    <TemplateDataDisplay title="My Shipping Informations">
      <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} label={labelData?.email} />
      <BoxData
        data={data?.address}
        icon={<HiOutlineLocationMarker size={24} />}
        label={labelData?.address}
      />
      <BoxData
        data={data?.createdAt}
        icon={<BsCalendarDate size={24} />}
        label={labelData?.createdAt}
      />
    </TemplateDataDisplay>
  )
}
const DisplayVendorData = ({ data, labelData }: { data: any; labelData: any }) => {
  return (
    <TemplateDataDisplay title="My Vendor Informations">
      <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} label={labelData?.email} />
      <BoxData
        data={data?.address}
        icon={<HiOutlineLocationMarker size={24} />}
        label={labelData?.address}
      />
      <BoxData
        data={data?.createdAt}
        icon={<BsCalendarDate size={24} />}
        label={labelData?.createdAt}
      />
    </TemplateDataDisplay>
  )
}

const BoxData = ({ data, label, icon }: { data: any; label: string; icon: any }) => {
  return (
    <Flex alignItems={'center'} mb="1rem">
      {icon}
      <Box as="span" fontSize="1rem" fontWeight="500" ml=".5rem" w="10rem">
        {label}
      </Box>
      {data ? (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
          {' '}
          {data}{' '}
        </Box>
      ) : (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
          {' '}
          ---{' '}
        </Box>
      )}
    </Flex>
  )
}

const TemplateDataDisplay = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const bgColor = useColorModeValue('white', 'gray_2')
  return (
    <Flex
      flexDir={'column'}
      boxShadow="md"
      p="1rem"
      borderRadius={'10px'}
      alignItems="flex-start"
      justifyContent={'center'}
      mb="2rem"
      bg={bgColor}
    >
      <Heading fontSize="1.2rem" mb="1rem" textTransform={'uppercase'}>
        {title}
      </Heading>

      <Flex flexDir="column" mt=".5rem">
        {children}
      </Flex>
    </Flex>
  )
}

export async function getStaticProps() {
  // api call
  const userExtends = {
    type: 'vendor',
    avatar: profileImage.src,
    email: 'sam@gmail.com'
  }
  const shipping = {}
  const vendor = {}

  return {
    props: {
      userExtends,
      shipping,
      vendor
    },
    revalidate: 10
  }
}
