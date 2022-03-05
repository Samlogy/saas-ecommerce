import {
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
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm } from "react-hook-form";
  
  import { Layout, ErrorMessage } from "../components"
  import { contactSchema } from "../lib/validation";
  
  export default function contact() {

        const { register, handleSubmit, getValues, formState: { errors } } = useForm({
            resolver: yupResolver(contactSchema)
        });

      const onContact = async (data: any) => {
          console.log('contact')
      }

      const data = [
        {
            data: "+91-988888888",
            icon: <MdPhone color="#1970F1" size="20px" />
        },
        {
            data: "email@example.com",
            icon: <MdEmail color="#1970F1" size="20px" />
        },
        {
            data: "Bali, Indonesia",
            icon: <MdLocationOn color="#1970F1" size="20px" />
        },
      ]

      const socialMedia = [
        <MdFacebook size="28px" />,
        <BsGithub size="28px" />,
        <BsDiscord size="28px" />
      ]

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
                                        { data.map(el => 
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="250px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={el.icon}>
                                                    {el.data}
                                            </Button>
                                        )}
                                    </VStack>
                                </Box>
                                    <HStack mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                            {   socialMedia.map(el =>
                                                    <IconButton
                                                        aria-label="facebook"
                                                        variant="ghost"
                                                        size="lg"
                                                        isRound={true}
                                                        _hover={{ bg: '#0D74FF' }}
                                                        icon={el}
                                                    /> 
                                                )}                                        
                                    </HStack>
                            </Box>
                        </WrapItem>

                        <WrapItem mb="1rem">
                            <Box bg="white" borderRadius="lg">
                                <Box m={8} color="#0B0E3F">
                                    <VStack spacing={5}>
                                        <form onSubmit={handleSubmit(onContact)}> 
                                            <FormControl id="name" mb=".5rem">
                                                <FormLabel> Your Name </FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                                                    <Input type="text" size="md" isInvalid={errors.name ? true : false}
                                                            errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                                            {...register("name")} />
                                                </InputGroup>
                                                {errors.name && <ErrorMessage error={errors.name.message} />}
                                            </FormControl>

                                            <FormControl id="name" mb=".5rem">
                                                <FormLabel> Email </FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                                                    <Input type="email" size="md" isInvalid={errors.email ? true : false}
                                                            errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                                            {...register("email")} />                                                    
                                                </InputGroup>
                                                {errors.email && <ErrorMessage error={errors.email.message} />}
                                            </FormControl>

                                            <FormControl id="name" mb=".5rem">
                                                <FormLabel> Message </FormLabel>
                                                <Textarea _hover={{ borderRadius: 'gray.300', }} placeholder="message" isInvalid={errors.email ? true : false}
                                                            errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                                            {...register("message")} />
                                                    {errors.message && <ErrorMessage error={errors.message.message} />}
                                            </FormControl>

                                            <FormControl id="name" float="right" mb=".5rem">
                                                <Button type="submit" variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </form>
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