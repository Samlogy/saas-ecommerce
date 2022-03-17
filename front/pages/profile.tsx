import { Box, Heading, Button, Flex, Image, Text, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

import { Layout, View } from '../components'

function Profile(props: any) {
  const { user, isLoading } = useUser()

  const userData = {
    ...user, ...props.userExtend
  }
  
  return (
    <Layout isHeaderVisible isFooterVisible>
      {/* <View cond={isLoading}>
        <Spinner thickness="4px" speed="0.65s" size="xl" />
      </View> */}

      <View cond={!isLoading && user}>
        <Heading as="h1" fontSize="30px">
          Profile
        </Heading>

        <DisplayUserData data={userData} />
        <DisplayBillingData data={props.shipping} />

        <Button bg={'blue.400'} color={'white'} w="11rem" _hover={{ bg: 'blue.500' }}>
          <Link href="/edit-profile"> Edit My Profile </Link>
        </Button>
      </View>
    </Layout>
  )
}

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
        src={data.picture}
        alt="Dan Abramov"
        fallbackSrc="https://via.placeholder.com/150"
      />

      <Flex flexDir="column" mb="1.5rem" mt=".5rem">
        <Flex alignItems={'center'} mb=".5rem">
          <AiOutlineUser size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Full Name:{' '}
          </Box>
          <BoxData data={data.name} />
        </Flex>

        <Flex alignItems={'center'} mb=".5rem">
          <AiOutlineMail size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Email Address:{' '}
          </Box>
          <BoxData data={data.email} />
        </Flex>

        <Flex alignItems={'center'} mb=".5rem">
          <HiOutlineLocationMarker size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Address:{' '}
          </Box>
          <BoxData data={data?.address} />
        </Flex>

        <Flex alignItems={'center'} mb=".5rem">
          <BsCalendarDate size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Date creation:{' '}
          </Box>
          <BoxData data={data.createdAt} />
        </Flex>
      </Flex>
    </>
  )
}

const DisplayBillingData = ({ data }: { data: any }) => {
  return (
    <>
      <Heading as="h2" fontSize="1.5rem">
        {' '}
        My Billing Informations{' '}
      </Heading>
      <Flex flexDir="column" my="1.5rem">
        <Flex alignItems={'center'} mb=".5rem">
          <AiOutlineUser size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Full Name:{' '}
          </Box>
          <BoxData data={data.fullName} />
        </Flex>

        <Flex alignItems={'center'} mb=".5rem">
          <AiOutlineMail size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Email Address:{' '}
          </Box>
          <BoxData data={data.email} />
        </Flex>

        <Flex alignItems={'center'} mb=".5rem">
          <HiOutlineLocationMarker size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Address:{' '}
          </Box>
          <BoxData data={data.address} />
        </Flex>

        <Flex alignItems={'center'} mb=".5rem">
          <BsCalendarDate size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem">
            {' '}
            Date creation:{' '}
          </Box>
          <BoxData data={data.createdAt} />
        </Flex>
      </Flex>
    </>
  )
}

const BoxData = ({ data }: { data: any }) => {
  return data ? (
    <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem">
      {' '}
      {data}{' '}
    </Box>
  ) : (
    <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem" color="gray.500">
      {' '}
      ---{' '}
    </Box>
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
    revalidate: 10,
  }
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Spinner thickness="4px" speed="0.65s" size="xl" />,
  onError: error => <Text> {error.message} </Text>
})
