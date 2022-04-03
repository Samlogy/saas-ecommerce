import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsCalendarDate } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Layout, View } from '../components'
import profileImage from '../public/images/profile.jpg'

function Profile(props: any) {
  const user = { avatar: profileImage.src } // super tokens
  const userExtends = props.userExtends // our db
  const shipping = props.shipping // our db

  return (
    <Layout isHeaderVisible isFooterVisible>
      <View cond={user}>
        <Heading as="h1" fontSize="1.5rem">
          Profile
        </Heading>

        <DisplayUserData data={user} />
        <DisplayBillingData data={shipping} />

        <Button bg={'accent_3'} color={'white'} w="10rem" _hover={{ bg: 'accent_4' }}>
          <Link href="/edit-profile"> Edit My Profile </Link>
        </Button>
      </View>
    </Layout>
  )
}

export default Profile

const DisplayUserData = ({ data }: { data: any }) => {
  return (
    <>
      <Heading as="h2" fontSize="1.5rem" mb="1rem">
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

      <Flex flexDir="column" mb="1.5rem" mt=".5rem">
        <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} />
        <BoxData data={data?.address} icon={<HiOutlineLocationMarker size={24} />} />
        <BoxData data={data?.createdAt} icon={<BsCalendarDate size={24} />} />
      </Flex>
    </>
  )
}

const DisplayBillingData = ({ data }: { data: any }) => {
  return (
    <>
      <Heading as="h2" fontSize="1.5rem" mb="1rem">
        {' '}
        My Billing Informations{' '}
      </Heading>

      <Flex flexDir="column" mb="1.5rem" mt=".5rem">
        <BoxData data={data?.email} icon={<AiOutlineMail size={24} />} />
        <BoxData data={data?.address} icon={<HiOutlineLocationMarker size={24} />} />
        <BoxData data={data?.createdAt} icon={<BsCalendarDate size={24} />} />
      </Flex>
    </>
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
