import { Box, Button, Flex, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Layout, View } from '../components'
import profileImage from '../public/images/profile.jpg'

export default function Profile(props) {
  const labels = {
    user: {
      fullName: 'Full Name',
      email: 'Email Address',
      address: 'Address',
      phone: 'Phone',
      createdAt: 'Creation Date'
    },
    customer: {
      shippingMethod: 'shipping Method',
      shippingAddress: 'shipping Address',
      shippingAddress_2: 'shipping Address 2',
      cityCustomer: 'Customer City',
      countryCustomer: 'Customer Country',
      stateCustomer: 'Customer State',
      zipCodeCustomer: 'Customer Zip Code'
    },
    vendor: {
      companyLogo: 'Company Logo',
      companyName: 'Company Name',
      companyAddress: 'Company Address',
      companyCity: 'Company City',
      companyCountry: 'Company Country',
      companyState: 'Company State',
      companyZipCode: 'Company Zip code / Postal'
    }
  }

  const { user, customer, vendor } = props?.data
  //  console.log(props)

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
          Profile
        </Heading>

        <Flex flexDir={'column'} justifyContent="center" alignItems={'center'}>
          <DisplayUserData data={user} labels={labels?.user} />

          <Button bg={'accent_3'} color={'white'} w="10em" mx="auto" _hover={{ bg: 'accent_4' }}>
            <Link href="/editProfile"> Edit My Profile </Link>
          </Button>

          <View cond={user?.isCustomer}>
            <DsplayCustomerData data={customer} labels={labels?.customer} />
          </View>

          <View cond={user?.isVendor}>
            <DisplayVendorData data={vendor} labels={labels?.vendor} />
          </View>
        </Flex>
      </View>
    </Layout>
  )
}

interface IBoxData {
  data: any
  label: string
  icon?: any
}
interface ITemplateDisplayData {
  title: string
  children: ReactNode
}
interface IDisplayData {
  data: any
  labels: any
}

const DisplayUserData = ({ data, labels }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My Personal Informations">
      <Image
        src={data?.avatar}
        boxSize="90px"
        fallbackSrc="https://via.placeholder.com/100"
        borderRadius={'10px'}
        mb="1rem"
        alt="avatar"
      />

      <BoxData data={data?.email} label={labels?.email} />
      <BoxData data={data?.address} label={labels?.address} />
      <BoxData data={data?.createdAt} label={labels?.createdAt} />
    </TemplateDisplayData>
  )
}
const DsplayCustomerData = ({ data, labels }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My customer Informations">
      <BoxData data={data?.shippingMethod} label={labels?.shippingMethod} />
      <BoxData data={data?.shippingAddress} label={labels?.shippingAddress} />
      <BoxData data={data?.shippingAddress_2} label={labels?.shippingAddress_2} />
      <BoxData data={data?.cityCustomer} label={labels?.cityCustomer} />
      <BoxData data={data?.countryCustomer} label={labels?.countryCustomer} />
      <BoxData data={data?.stateCustomer} label={labels?.stateCustomer} />
      <BoxData data={data?.companyZipCode} label={labels?.companyZipCode} />
    </TemplateDisplayData>
  )
}
const DisplayVendorData = ({ data, labels }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My Vendor Informations">
      <Image
        src={data?.companyLogo}
        boxSize="90px"
        fallbackSrc="https://via.placeholder.com/100"
        borderRadius={'10px'}
        mb="1em"
        alt="company-logo"
      />
      <BoxData data={data?.companyName} label={labels?.companyName} />
      <BoxData data={data?.companyAddress} label={labels?.companyAddress} />
      <BoxData data={data?.companyCity} label={labels?.companyCity} />
      <BoxData data={data?.companyCountry} label={labels?.companyCountry} />
      <BoxData data={data?.companyState} label={labels?.companyState} />
      <BoxData data={data?.companyZipCode} label={labels?.companyZipCode} />
    </TemplateDisplayData>
  )
}

const BoxData = ({ data, label, icon }: IBoxData) => {
  return (
    <Flex alignItems={'center'} mb="1rem">
      {icon && icon}
      <Box as="span" fontSize="1rem" fontWeight="600" ml=".5em" w="10em">
        {label}
      </Box>
      {data ? (
        <Text fontSize="1rem" fontWeight="400" ml=".5em" w="100%" color="gray_4">
          {data}
        </Text>
      ) : (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5em" color="gray_4">
          ---
        </Box>
      )}
    </Flex>
  )
}

const TemplateDisplayData = ({ title, children }: ITemplateDisplayData) => {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex
      flexDir={'column'}
      boxShadow="md"
      p="1rem"
      borderRadius={'10px'}
      alignItems="flex-start"
      justifyContent={'center'}
      my="2rem"
      w={['20rem', '30rem', '', '40rem']}
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
  const user = {
    isVendor: true,
    isCustomer: true,
    avatar: profileImage.src,
    fullName: 'sam',
    email: 'sam@gmail.com',
    mobile: '0540498180',
    address: 'tizi-york',
    createdAt: '',
    editedAt: ''
  }
  const customer = {
    shippingMethod: 'express',
    shippingAddress:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus libero magni nam eveniet, exercitationem',
    shippingAddress_2:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus libero magni nam eveniet, exercitationem',
    cityCustomer: 'tizi-york',
    countryCustomer: 'algeria',
    stateCustomer: 'tizi-yotk',
    zipCodeCustomer: '15007'
  }
  const vendor = {
    companyName: 'sam solutions',
    companyAddress:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus libero magni nam eveniet, exercitationem',
    companyCity: 'tizi-york',
    companyCountry: 'algeria',
    companyState: 'tizi-york',
    companyZipCode: '15007',
    companyLogo: profileImage.src
  }

  return {
    props: {
      data: {
        user,
        customer,
        vendor
      }
    },
    revalidate: 10
  }
}
