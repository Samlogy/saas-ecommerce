import {
    Button,
    FormControl,
    FormLabel,
    Flex,
    Heading,
    Input,
    Stack,
    IconButton,
    Text,
    Box,
    Checkbox,
    useColorModeValue,
    InputRightElement, InputGroup
  } from '@chakra-ui/react';
  import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
  import { useState } from 'react';
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm } from "react-hook-form";
  import { useRouter } from "next/router"

import { Layout, FormTemplate, ErrorMessage } from "../components"
import { resetPasswordSchema } from "../lib/validation";


export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState({ password: false, confirm_password: false });

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordSchema)
    });
    const router = useRouter();

    const onResetPassword = async (data: any) => {
        console.log('reset password: ', data);
        router.push('/')
    };

  return (
    <Layout isFooterVisible isHeaderVisible>
        <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
            <FormTemplate>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Enter new password
                </Heading>

                <form onSubmit={handleSubmit(onResetPassword)}> 
                    <FormControl id="password"  mb=".75rem">
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

                    <FormControl id="confirm_password"  mb=".75rem">
                        <FormLabel> Re-enter Password </FormLabel>
                        <InputGroup>
                            <Input type={showPassword.confirm_password ? 'text' : 'password'}
                                isInvalid={errors.confirm_password ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px"
                                {...register("confirm_password")} />
                            <InputRightElement h={'full'}>
                                <IconButton variant='outline' aria-label='show-hide-password' _hover={{ bg:"transparent" }} borderColor="transparent"
                                        onClick={() => setShowPassword({...showPassword, confirm_password: !showPassword.confirm_password})} 
                                        icon={showPassword.confirm_password ? <AiFillEye /> : <AiFillEyeInvisible />} />
                            </InputRightElement>
                        </InputGroup>
                        {errors.confirm_password && <ErrorMessage error={errors.confirm_password.message} />}
                    </FormControl>

                    <Stack spacing={6}>
                        <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                            Reset Password
                        </Button>
                    </Stack>
                </form>
            </FormTemplate>
        </Flex>
    </Layout>
  );
}