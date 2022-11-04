import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Layout, View } from '../components'
import profileImage from '../public/images/profile.jpg'
import { useAuthStore } from '../store'

export default function Profile() {
  const user = useAuthStore((state: any) => state.user)

  const labels = {
    user: {
      fullName: 'Full Name',
      email: 'Email',
      address: 'Address',
      phone: 'Phone',
      createdAt: 'Created on',
      editedAt: 'Edited on'
    },
    customer: {
      shippingMethod: 'Shipping Method',
      shippingAddress: 'Shipping Address',
      shippingAddress_2: 'Shipping Address 2',
      cityCustomer: 'City',
      countryCustomer: 'Country',
      stateCustomer: 'State',
      zipCodeCustomer: 'Zip code / Postal'
    },
    vendor: {
      companyLogo: 'Logo',
      companyName: 'Name',
      companyAddress: 'Address',
      companyCity: 'City',
      companyCountry: 'Country',
      companyState: 'State',
      companyZipCode: 'Zip code / Postal'
    }
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading fontSize="1.5rem" mb="2em" textTransform={'uppercase'}>
          Profile
        </Heading>

        <Flex flexDir={'column'} justifyContent="center" alignItems={'center'}>
          <DisplayUserData data={user} labels={labels?.user} />

          <Button bg={'accent_3'} color={'white'} w="10em" mx="auto" _hover={{ bg: 'accent_4' }}>
            <Link href="/editProfile"> Edit My Profile </Link>
          </Button>

          <View cond={user?.isCustomer}>
            <DsplayCustomerData data={user} labels={labels?.customer} />
          </View>

          <View cond={user?.isVendor}>
            <DisplayVendorData data={user} labels={labels?.vendor} />
          </View>
        </Flex>
      </View>
    </Layout>
  )
}

interface IBoxData {
  data: any
  label: string
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
        src={data?.avatar ? data?.avatar : profileImage}
        boxSize="90px"
        borderRadius={'10px'}
        mb="1rem"
        alt="avatar"
      />
      <BoxData data={data?.email} label={labels?.email} />
      <BoxData data={data?.address} label={labels?.address} />
      <BoxData data={data?.createdAt} label={labels?.createdAt} />
      <BoxData data={data?.editedAt} label={labels?.editedAt} />
    </TemplateDisplayData>
  )
}
const DsplayCustomerData = ({ data, labels }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My customer Informations">
      <BoxData data={data?.shippingMethod} label={labels?.shippingMethod} />
      <BoxData data={data?.shippingAddress} label={labels?.shippingAddress} />
      <BoxData data={data?.shippingAddress_2} label={labels?.shippingAddress_2} />
      <BoxData data={data?.countryCustomer} label={labels?.countryCustomer} />
      <BoxData data={data?.cityCustomer} label={labels?.cityCustomer} />
      <BoxData data={data?.stateCustomer} label={labels?.stateCustomer} />
      <BoxData data={data?.zipCodeCustomer} label={labels?.zipCodeCustomer} />
    </TemplateDisplayData>
  )
}
const DisplayVendorData = ({ data, labels }: IDisplayData) => {
  return (
    <TemplateDisplayData title="My Vendor Informations">
      <Image
        src={data?.companyLogo ? data?.companyLogo : profileImage}
        boxSize="100px"
        borderRadius={'10px'}
        mb="1em"
        alt="company-logo"
      />
      <BoxData data={data?.companyName} label={labels?.companyName} />
      <BoxData data={data?.companyAddress} label={labels?.companyAddress} />
      <BoxData data={data?.companyCountry} label={labels?.companyCountry} />
      <BoxData data={data?.companyCity} label={labels?.companyCity} />
      <BoxData data={data?.companyState} label={labels?.companyState} />
      <BoxData data={data?.companyZipCode} label={labels?.companyZipCode} />
    </TemplateDisplayData>
  )
}

const BoxData = ({ data, label }: IBoxData) => {
  const textColor = useColorModeValue('gray_3', 'gray_5')
  return (
    <Flex alignItems={'center'} mb="1rem">
      <Box as="span" fontSize=".95rem" fontWeight="600" w="10em">
        {label}
      </Box>
      {data ? (
        <Text fontSize="1rem" fontWeight="400" ml=".5em" w="100%" color={textColor}>
          {data}
        </Text>
      ) : (
        <Text fontSize="1rem" fontWeight="400" ml=".5em" color={textColor}>
          ---
        </Text>
      )}
    </Flex>
  )
}

const TemplateDisplayData = ({ title, children }: ITemplateDisplayData) => {
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
      bg={useColorModeValue('gray_9', 'gray_2')}
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
