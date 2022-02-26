import { Box, Heading, Text, Button, Flex, Container } from '@chakra-ui/react';
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BsCalendarDate } from "react-icons/bs"

import Layout from "../components/Layout"

export default function Profile() {
  const data = {
    fullName: "John Doe",
    email: "sam@gmail.com",
    phone: "213 540498180",
    address: "Karnavati, India",
    createdAt: "24-02-2022"
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Heading as="h1" fontSize="30px">
          Profile
        </Heading>

        <DisplayUserData data={data} />

        <Flex justifyContent='space-evenly' mb="1.5rem">
          <Button bg={'blue.400'} color={'white'} w="150px" _hover={{ bg: 'blue.500' }}>
              <Link href="/resetPassword"> Reset My Password </Link>
          </Button>
          <Button bg={'blue.400'} color={'white'} w="150px" _hover={{ bg: 'blue.500' }}>
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
    <Heading as="h2" fontSize="1.5rem"> My Personal Informations </Heading>
      <Flex flexDir="column" my="1.5rem">
        <Flex alignItems={"center"} mb=".5rem">
          <AiOutlineUser size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Full Name: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.fullName} </Box>
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <AiOutlineMail size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Email Address: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.email} </Box>
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <HiOutlineLocationMarker size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Address: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.address} </Box>
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <BsCalendarDate size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Date creation: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.createdAt} </Box>
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
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.fullName} </Box>
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <AiOutlineMail size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Email Address: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.email} </Box>
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <HiOutlineLocationMarker size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Address: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.address} </Box>
        </Flex>

        <Flex alignItems={"center"} mb=".5rem">
          <BsCalendarDate size={24} />
          <Box as="span" fontSize="16px" fontWeight="500" ml=".25rem"> Date creation: </Box> 
          <Box as="span" fontSize="16px" fontWeight="400" ml=".5rem"> {data.createdAt} </Box>
        </Flex>
      </Flex>
    </>
  )
}