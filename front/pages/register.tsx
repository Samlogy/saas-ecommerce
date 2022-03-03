import {
    Button,
    FormControl,
    FormLabel,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    Box,
    IconButton,
    Divider,
    useColorModeValue,
    InputRightElement, InputGroup
  } from '@chakra-ui/react';
  import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
  import { useState } from 'react';
import Link from 'next/link'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Layout, FormTemplate, ErrorMessage, SocialMediaButton } from "../components"
import { registerSchema } from "../lib/validation";


export default function Register() {
    const [showPassword, setShowPassword] = useState({ password: false, confirm_password: false });

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onRegister = async (data: any) => {
        console.log('register: ', data);
    };

  return (
      <Layout isFooterVisible isHeaderVisible>
        <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
            <Stack align={'center'} >
                <Heading fontSize={'4xl'}> Create account </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Box as="span" color={'blue.400'}> features </Box> ✌️
                </Text>
            </Stack>

            <FormTemplate>
                <form onSubmit={handleSubmit(onRegister)}> 
                    <FormControl id="name" mb=".5rem">
                        <FormLabel> Your Name </FormLabel>
                        <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} 
                                isInvalid={errors.fullName ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("fullName")} />
                        {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
                    </FormControl>

                    <FormControl id="mobile_email"  mb=".5rem">
                        <FormLabel> Mobile number or email </FormLabel>
                        <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} 
                                isInvalid={errors.email ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("email")} />
                        {errors.email && <ErrorMessage error={errors.email.message} />}
                    </FormControl>

                    <FormControl id="password" mb=".5rem">
                        <FormLabel> Password </FormLabel>
                        <InputGroup>
                            <Input type={showPassword.password ? 'text' : 'password'} placeholder="At least 8 characters long" 
                                    isInvalid={errors.password ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("password")} />
                            <InputRightElement h={'full'}>
                                <IconButton variant='outline' aria-label='show-hide-password' _hover={{ bg:"transparent" }} borderColor="transparent"
                                        onClick={() => setShowPassword({...showPassword, password: !showPassword.password})} 
                                        icon={showPassword.password ? <AiFillEye /> : <AiFillEyeInvisible />} />
                            </InputRightElement>
                        </InputGroup>
                        {errors.password && <ErrorMessage error={errors.password.message} />}
                    </FormControl>

                    <FormControl id="confirm_password" mb=".5rem">
                        <FormLabel> Re-enter Password </FormLabel>
                        <InputGroup>
                            <Input type={showPassword.confirm_password ? 'text' : 'password'} placeholder="" 
                                    isInvalid={errors.confirm_password ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("confirm_password")} />
                            <InputRightElement h={'full'} >
                                <IconButton variant='outline' aria-label='show-hide-password' _hover={{ bg:"transparent" }} borderColor="transparent"
                                            onClick={() => setShowPassword({...showPassword, confirm_password: !showPassword.confirm_password})} 
                                            icon={showPassword.confirm_password ? <AiFillEye /> : <AiFillEyeInvisible />} />
                            </InputRightElement>
                        </InputGroup>
                        {errors.confirm_password && <ErrorMessage error={errors.confirm_password.message} />}
                    </FormControl>
                    
                    <Text fontSize=".8rem" mb=".75rem"> By creating an account, you agree to Amazon's 
                        <Box as="span" color="blue.500"> <Link href="/conditions"> Conditions of Use </Link> </Box>
                            and 
                        <Box as="span" color="blue.500"> <Link href="/privacy"> Privacy Notice </Link> </Box>
                    </Text>

                    <Button type="submit" w="full" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                        Sign up
                    </Button>
                </form>

                <Flex justifyContent={'space-between'} alignItems={'center'} my="1rem">
                    <Divider border='2px' borderColor='gray.300' bg='gray.300' />
                    <Text fontSize='.8rem' color='gray.400' w='full' textAlign={'center'}> Or Connect With </Text>
                    <Divider border='2px' borderColor='gray.300' bg='gray.300' />
                </Flex>

                <Flex justifyContent={'space-between'} m="0px">
                    <SocialMediaButton type="facebook" />
                    <SocialMediaButton type="twitter" />
                    <SocialMediaButton type="linkedin" />
                    <SocialMediaButton type="github" />
                </Flex>

                <Text fontSize=".8rem"> Already have an account? <Box as="span" color='blue.500'> <Link href="/login"> Sign-In </Link> </Box> </Text>
            </FormTemplate>
        </Flex>
    </Layout>
  );
}