import { Box, Button, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Layout, View } from '../components'
import profileImage from '../public/images/profile.jpg'

export default function Profile(props: any) {
  const user = {} // super tokens
  const userExtends = props.userExtends // our db
  const customer = props.customer // our db
  const vendor = props.vendor // our db

  const labelData = {
    fullName: 'Full Name',
    email: 'Email Address',
    address: 'Address',
    phone: 'Phone',
    createdAt: 'Creation Date',
    // Customer
    shippingMethod: 'shipping Method',
    shippingAddress: 'shipping Address',
    shippingAddress_2: 'shipping Address 2',
    cityCustomer: 'Customer City',
    countryCustomer: 'Customer Country',
    stateCustomer: 'Customer State',
    zipCodeCustomer: 'Customer Zip Code',
    // Vendor
    companyLogo: 'Company Logo',
    companyName: 'Company Name',
    companyAddress: 'Company Address',
    companyCity: 'Company City',
    companyCountry: 'Company Country',
    companyState: 'Company State',
    companyZipCode: 'Company Zip code / Postal'
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
          Profile
        </Heading>

        <Flex flexDir={'column'} justifyContent="center" alignItems={'center'}>
          <DisplayUserData data={user} labelData={labelData} />

          <Button bg={'accent_3'} color={'white'} w="10em" mx="auto" _hover={{ bg: 'accent_4' }}>
            <Link href="/edit-profile"> Edit My Profile </Link>
          </Button>

          <View cond={userExtends?.isCustomer}>
            <DsplayCustomerData data={customer} labelData={labelData} />
          </View>

          <View cond={userExtends?.isVendor}>
            <DisplayVendorData data={vendor} labelData={labelData} />
          </View>
        </Flex>
      </View>
    </Layout>
  )
}

interface IBoxData {
  data: any
  label: string
  icon: any
}
interface ITemplateDisplayData {
  title: string
  children: ReactNode
}
interface IDisplayData {
  data: any
  labelData: any
}

const DisplayUserData = ({ data, labelData }: IDisplayData) => {
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
    </TemplateDisplayData>
  )
}
const DsplayCustomerData = ({ data, labelData }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My customer Informations">
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
    </TemplateDisplayData>
  )
}
const DisplayVendorData = ({ data, labelData }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My Vendor Informations">
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
    </TemplateDisplayData>
  )
}

const BoxData = ({ data, label, icon }: IBoxData) => {
  return (
    <Flex alignItems={'center'} mb="1rem">
      {icon}
      <Box as="span" fontSize="1rem" fontWeight="500" ml=".5rem" w="10rem">
        {label}
      </Box>
      {data ? (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
          {data}
        </Box>
      ) : (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
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
  const userExtends = {
    isVendor: true,
    isCustomer: true,
    avatar: profileImage.src,
    email: 'sam@gmail.com'
  }
  const customer = {}
  const vendor = {}

  return {
    props: {
      userExtends,
      customer,
      vendor
    },
    revalidate: 10
  }
}
