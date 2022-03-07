import {
    Box, Heading, Text, Button, Image,
    FormControl, FormLabel, Input, Textarea,
    useDisclosure,
    Flex, Stack
  } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Layout, FormTemplate, ErrorMessage } from "../components"
import { profileSchema } from "../lib/validation";

export default function EditProfile({ profileData }) {
    const router = useRouter()

    const formOptions = { 
        resolver: yupResolver(profileSchema),
        defaultValues: profileData 
    };
    const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm(formOptions);

    const onEdit = async (data: any) => {
        console.log('edit profile: ', data);
        router.push('/profile')
    };

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
            <Stack align={'center'} >
                <Heading fontSize={'4xl'}> Edit Profile </Heading>
            </Stack>

            <FormTemplate>
                <form onSubmit={handleSubmit(onEdit)}> 
                    <Heading as="h2" fontSize="1.5rem" mb="1.5rem">
                        My Personal Information
                    </Heading>

                    <Image boxSize='100px' objectFit='cover' src={'https://bit.ly/dan-abramov'} fallbackSrc='https://via.placeholder.com/150' alt='Product Image' mb="1rem" borderRadius='5px' />
                    <FormControl id="image" mb="1rem">
                        <FormLabel> Choose Profile Picture </FormLabel>
                        <Input type="file" placeholder="" border="none" px="0" isInvalid={errors.img ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("img")} />
                        {errors.img && <ErrorMessage error={errors.img.message} />}
                    </FormControl>

                    <FormControl id="fullName" mb="1rem">
                        <FormLabel> Full Name </FormLabel>
                        <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} isInvalid={errors.fullName ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("fullName")} />
                        {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
                    </FormControl>

                    <FormControl id="email" mb="1rem">
                        <FormLabel> Email Address </FormLabel>
                        <Input type="email" placeholder="example@mail.com" _placeholder={{ color: 'gray.500' }} isInvalid={errors.email ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("email")} />
                        {errors.email && <ErrorMessage error={errors.email.message} />}
                    </FormControl>

                    <FormControl id="price" mb="1rem">
                        <FormLabel> Mobile </FormLabel>
                        <Input type="number" placeholder="Phone Number" _placeholder={{ color: 'gray.500' }} isInvalid={errors.mobile ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("mobile")} />
                        {errors.mobile && <ErrorMessage error={errors.mobile.message} />}
                    </FormControl>


                    <Heading as="h2" fontSize="1.25rem" my="1.5rem">
                        My Billing Informations
                    </Heading>

                    <FormControl id="address" mb="1rem">
                        <FormLabel> Billing Address </FormLabel>
                        <Input type="text" placeholder="My Billing Address" _placeholder={{ color: 'gray.500' }} isInvalid={errors.address ? true : false}
                                errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                {...register("address")} />
                        {errors.address && <ErrorMessage error={errors.address.message} />}
                    </FormControl>

                    <Stack>  
                        <Button type="submit" isLoading={isSubmitting} bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}> Edit Profile </Button>
                    </Stack>
                </form>
            </FormTemplate>
        </Flex>
    </Layout>
  );
}


export async function getStaticProps() {
    // const data = (await getProducts()) || {};
    return {
      props: { profileData: {} },
    };
  }