import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

  import Layout from "../components/Layout"
  
  export default function contact() {
      const onContact = () => {
          console.log('contact')
      }

    return (
        <Layout isHeaderVisible isFooterVisible>
            <Box bg="#02054B" color="white" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 5, md: 5 }}>
                <Box p={4}>
                    <Heading textAlign="center" mb="1.5rem"> Contact </Heading>

                    <Flex justifyContent="space-evenly" flexWrap="wrap-reverse">
                        
                        <WrapItem>
                            <Box>
                                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                    Fill up the form below to contact
                                </Text>

                                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                    <VStack pl={0} spacing={3} alignItems="flex-start">
                                        <Button
                                            size="md"
                                            height="48px"
                                            width="200px"
                                            variant="ghost"
                                            color="#DCE2FF"
                                            _hover={{ border: '2px solid #1C6FEB' }}
                                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                                        +91-988888888
                                        </Button>
                                        <Button
                                            size="md"
                                            height="48px"
                                            width="200px"
                                            variant="ghost"
                                            color="#DCE2FF"
                                            _hover={{ border: '2px solid #1C6FEB' }}
                                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                        hello@abc.com
                                        </Button>
                                            <Button
                                            size="md"
                                            height="48px"
                                            width="200px"
                                            variant="ghost"
                                            color="#DCE2FF"
                                            _hover={{ border: '2px solid #1C6FEB' }}
                                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                        Karnavati, India
                                        </Button>
                                    </VStack>
                                </Box>
                                    <HStack mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsGithub size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsDiscord size="28px" />}
                                        />
                                    </HStack>
                            </Box>
                        </WrapItem>

                        <WrapItem mb="1rem">
                            <Box bg="white" borderRadius="lg">
                                <Box m={8} color="#0B0E3F">
                                <VStack spacing={5}>
                                    <FormControl id="name">
                                        <FormLabel> Your Name </FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                                            <Input type="text" size="md" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl id="name">
                                        <FormLabel> Mail </FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                                            <Input type="text" size="md" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl id="name">
                                        <FormLabel> Message </FormLabel>
                                        <Textarea borderColor="gray.300"  _hover={{ borderRadius: 'gray.300', }} placeholder="message" />
                                    </FormControl>

                                    <FormControl id="name" float="right">
                                        <Button  variant="solid" bg="#0D74FF" color="white" _hover={{}} onClick={() => onContact()}>
                                            Send Message
                                        </Button>
                                    </FormControl>
                                </VStack>
                                </Box>
                            </Box>
                        </WrapItem>
                    </Flex>
                </Box>
            </Box>
      </Layout>
    );
  }