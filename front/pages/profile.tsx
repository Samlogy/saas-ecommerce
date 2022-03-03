import { Box, Heading, Button, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsCalendarDate } from "react-icons/bs"
import { useEffect } from 'react';

import Layout from "../components/Layout"


export default function Profile() {
  const data = {
    fullName: "John Doe",
    avatar: 'https://bit.ly/dan-abramov',
    email: "sam@gmail.com",
    phone: "213 540498180",
    address: "Karnavati, India",
    createdAt: "24-02-2022"
  }

  const onLoad = () => {
    console.log('load profile data')
  }

  useEffect(() => {
    onLoad()
  }, []);

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Heading as="h1" fontSize="30px">
          Profile
        </Heading>

        <DisplayUserData data={data} />

        <Flex flexWrap={'wrap'} justifyContent='space-evenly' mb="1.5rem">
          <Button bg={'blue.400'} color={'white'} w='11rem' mb={['1rem', '', '0', '']} _hover={{ bg: 'blue.500' }}>
              <Link href="/resetPassword"> Reset My Password </Link>
          </Button>
          <Button bg={'blue.400'} color={'white'} w='11rem' _hover={{ bg: 'blue.500' }}>
              <Link href="/editProfile"> Edit My Profile </Link>
          </Button>
        </Flex>

        <DisplayBillingData data={data} />
  </Layout>
  );
}

const DisplayUserData = ({ data }: { data: any }) => {
  return(
    <>
    <Heading as="h2" fontSize="1.5rem" mb='1rem'> My Personal Informations </Heading>
      <Image borderRadius='full' boxSize='150px' src={data.avatar} alt='Dan Abramov' fallbackSrc='https://via.placeholder.com/150'/>

      <Flex flexDir="column" mb="1.5rem" mt='.5rem'>
        <Flex alignItems={"center"} mb=".5rem">
          <AiOutlineUser size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Full Name: </Box> 
          <BoxData data={data.fullName} />
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <AiOutlineMail size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Email Address: </Box> 
          <BoxData data={data.email} />
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <HiOutlineLocationMarker size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Address: </Box> 
          <BoxData data={data.address} />
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <BsCalendarDate size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Date creation: </Box> 
          <BoxData data={data.createdAt} />
        </Flex>
      </Flex>
    </>
  )
}

const DisplayBillingData = ({ data }: { data: any }) => {
  return(
    <>
      <Heading as="h2" fontSize="1.5rem"> My Billing Informations </Heading>
      <Flex flexDir="column" my="1.5rem">
        <Flex alignItems={"center"} mb=".5rem">
            <AiOutlineUser size={24} />
            <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Full Name: </Box> 
            <BoxData data={data.fullName} />
          </Flex>

          <Flex alignItems={"center"} mb=".5rem">
            <AiOutlineMail size={24} />
            <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Email Address: </Box> 
            <BoxData data={data.email} />
          </Flex>

          <Flex alignItems={"center"} mb=".5rem">
            <HiOutlineLocationMarker size={24} />
            <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Address: </Box> 
            <BoxData data={data.address} />
          </Flex>

          <Flex alignItems={"center"} mb=".5rem">
            <BsCalendarDate size={24} />
            <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Date creation: </Box> 
            <BoxData data={data.createdAt} />
          </Flex>
      </Flex>
    </>
  )
}

const BoxData = ({ data }: { data: any }) => {
  return(
    data ?
      <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data} </Box> :
      <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem" color='gray.500'> --- </Box>   
  )
}