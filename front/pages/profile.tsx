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
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Layout, View } from '../components'
import profileImage from '../public/images/profile.jpg'
import { useLocale } from '../lib/hooks'
import productImage from '../public/images/product.png'
import Slider from 'react-slick'

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
  // const { t } = useLocale()
  // const products = [
  //   {
  //     id: 1,
  //     isNew: true,
  //     name: 'Automatic Watch',
  //     image: productImage.src,
  //     rate: 2,
  //     quantity: 1,
  //     price: 350,
  //     reviews: 25,
  //     currency: '$',
  //     description:
  //       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
  //     delivery: '2-3 business days'
  //   },
  //   {
  //     id: 2,
  //     isNew: true,
  //     name: 'Automatic Watch',
  //     image: 'productImage.src',
  //     rate: 2,
  //     quantity: 1,
  //     price: 350,
  //     reviews: 25,
  //     currency: '$',
  //     description:
  //       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
  //     delivery: '2-3 business days'
  //   },
  //   {
  //     id: 21,
  //     isNew: true,
  //     name: 'Automatic Watch',
  //     image: 'productImage.src',
  //     rate: 2,
  //     quantity: 1,
  //     price: 350,
  //     reviews: 25,
  //     currency: '$',
  //     description:
  //       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
  //     delivery: '2-3 business days'
  //   },
  //   {
  //     id: 13,
  //     isNew: true,
  //     name: 'Automatic Watch',
  //     image: 'productImage.src',
  //     rate: 2,
  //     quantity: 1,
  //     price: 350,
  //     reviews: 25,
  //     currency: '$',
  //     description:
  //       'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
  //     delivery: '2-3 business days'
  //   }
  // ]

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   lazyLoad: true,
  //   initialSlide: 2,
  //   slidesToShow: 2, // multi
  //   slidesToScroll: 2 // multi
  // }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
          Profile
        </Heading>

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
  const bgColor = useColorModeValue('gray_9', 'gray_2')
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
