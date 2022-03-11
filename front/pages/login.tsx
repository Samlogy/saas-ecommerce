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
    Checkbox,
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
import { loginSchema } from "../lib/validation";
import { useAuth } from "../store";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const logged = useAuth((state: any) => state.logged);

    const onLogin = async (data: any) => {
        console.log('login: ', data);

        // get user data from API
        const user_data = data
        logged(user_data)
    };

  return (
    <Layout isFooterVisible isHeaderVisible>
        <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
            <Stack align={'center'} >
                <Heading fontSize={'4xl'}> Sign in to your account </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Box as="span" color={'blue.400'}> features </Box> ✌️
                </Text>
            </Stack>

            <FormTemplate>
                <form onSubmit={handleSubmit(onLogin)}> 
                    <FormControl id="email" mb=".5rem">
                        <FormLabel> Email Address </FormLabel>
                        <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }}
                                isInvalid={errors.email ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="5px" 
                                {...register("email")} />
                        {errors.email && <ErrorMessage error={errors.email.message} />}
                    </FormControl>

                    <FormControl id="password" mb=".5rem">
                        <FormLabel> Password </FormLabel>
                        <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} placeholder="" 
                                    isInvalid={errors.password ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="5px" 
                                    {...register("password")} />
                            <InputRightElement h={'full'}>
                                <IconButton variant='outline' aria-label='show-hide-password' _hover={{ bg:"transparent" }} borderColor="transparent"
                                        onClick={() => setShowPassword(showPassword => !showPassword)}
                                        icon={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />} />
                            </InputRightElement>
                        </InputGroup>
                        {errors.password && <ErrorMessage error={errors.password.message} />}
                    </FormControl>

                    <Stack spacing={5}>
                        <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                            <Checkbox > <Box as="span" fontSize=".8rem"> Remember me </Box> </Checkbox>
                            <Box as="span" color="blue.500" fontSize=".8rem"> <a href="/forgot-password"> Forgot password? </a> </Box>
                        </Stack>
                        
                        <Button type="submit" bg={'blue.400'} color={'white'} borderRadius="5px" _hover={{ bg: 'blue.500' }}>
                            Sign in
                        </Button>
                    </Stack>
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
            </FormTemplate>
        </Flex>
    </Layout>
  );
}