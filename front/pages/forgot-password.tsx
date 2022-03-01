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
    useColorModeValue,
    InputRightElement, InputGroup
  } from '@chakra-ui/react';
  import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
  import { yupResolver } from "@hookform/resolvers/yup";
  import { useForm } from "react-hook-form";

import { Layout, FormTemplate, ErrorMessage } from "../components"
import { forgotPasswordSchema } from "../lib/validation";


export default function ForgotPassword() {

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(forgotPasswordSchema)
    });

    const onForgotPassword = async (data: any) => {
        console.log('forgot password: ', data);
    };

  return (
    <Layout isFooterVisible isHeaderVisible>
        <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
            <FormTemplate>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Forgot your password?
                </Heading>

                <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
                    You&apos;ll get an email with a reset link
                </Text>

                <form onSubmit={handleSubmit(onForgotPassword)}> 
                    <FormControl id="email" mb=".75rem">
                        <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} 
                                isInvalid={errors.email ? true : false} errorBorderColor="error" borderColor="gray.400"
                                {...register("email")} />
                        {errors.email && <ErrorMessage error={errors.email.message} />}
                    </FormControl>

                    <Stack spacing={6}>
                        <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }} transitionDuration=".2s">
                            Request Reset
                        </Button>
                    </Stack>
                </form>
            </FormTemplate>
        </Flex>
    </Layout>
  );
}