import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  SimpleGrid,
  Image,
  Flex,
  StackDivider,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react';

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa"

import { ShoppingCart, Layout, ModalPopUp, CustomerReviews, SocialMediaButton, Carousel } from "../components" 
import { Item } from 'framer-motion/types/components/Reorder/Item';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo";

  const images = [
    'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];
  const qna = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo"
    },
  ]

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Button onClick={onOpen}> Open Modal </Button>
        {/* <ModalPopUp isOpen={isOpen} onClose={onClose} text={text} type="info" /> */}

        {/* <CustomerReviews /> */}

        {/* <SocialMediaButton type="facebook" />
        <SocialMediaButton type="twitter" />
        <SocialMediaButton type="linkedin" />
        <SocialMediaButton type="github" /> */}

        {/* <ShoppingCart isOpen={isOpen} onClose={onClose} /> */}

        {/* <Carousel data={images} /> */}

        <QuestionsAnswers data={qna} />
    </Layout>
  );
}

const QuestionsAnswers = ({ data }: { data: any }) => {
  return(
    <Flex flexDir="column">
      <Heading fontSize='24px' mb="1rem"> Questions and Answers </Heading>
      <Divider w="10rem" borderColor='blue.500' borderWidth='1px' mb="1rem" />

      <Box p="2.5rem 1.5rem" border="1px" borderColor="blue.500" borderRadius="5px">
        <Accordion defaultIndex={[0]} allowMultiple>
          { data.map((item: any) => 
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }} borderRadius="5px">
                  <Box flex='1' textAlign='left' fontWeight='500'>
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>
      </Box>
    </Flex>
  )
}




