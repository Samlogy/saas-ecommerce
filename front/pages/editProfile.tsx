import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box, Heading, Text, Button, Image,
    FormControl, FormLabel, Input, Textarea,
    useDisclosure
  } from '@chakra-ui/react'
import Link from 'next/link'

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Layout, FormTemplate, ErrorMessage } from "../components"
import { profileSchema } from "../lib/validation";

export default function EditProfile() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(profileSchema)
    });

    const onEdit = async (data: any) => {
        console.log('edit profile: ', data);
    };

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Heading as="h2" fontSize="2rem">
            Edit Profile
        </Heading>

        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> Edit Profile </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Heading as="h2" fontSize="1.5rem" mb="1.5rem">
                        Personal User information
                    </Heading>

                    <form onSubmit={handleSubmit(onEdit)}> 
                        <Image boxSize='100px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Product Image' mb="1rem" borderRadius='5px' />
                        <FormControl id="image" mb=".5rem">
                            <FormLabel> Choose Profile Picture </FormLabel>
                            <Input type="file" placeholder="" border="none" px="0" isInvalid={errors.img ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("img")} />
                            {errors.img && <ErrorMessage error={errors.img.message} />}
                        </FormControl>

                        <FormControl id="fullName" mb=".5rem">
                            <FormLabel> Full Name </FormLabel>
                            <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} isInvalid={errors.fullName ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("fullName")} />
                            {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
                        </FormControl>

                        <FormControl id="email" mb=".5rem">
                            <FormLabel> Email Address </FormLabel>
                            <Textarea placeholder="example@mail.com" _placeholder={{ color: 'gray.500' }} isInvalid={errors.email ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("email")} />
                            {errors.email && <ErrorMessage error={errors.email.message} />}
                        </FormControl>

                        <FormControl id="price" mb=".5rem">
                            <FormLabel> Mobile </FormLabel>
                            <Input type="number" placeholder="Phone Number" _placeholder={{ color: 'gray.500' }} isInvalid={errors.mobile ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("mobile")} />
                            {errors.mobile && <ErrorMessage error={errors.mobile.message} />}
                        </FormControl>

                        <Heading as="h2" fontSize="1.5rem" my="1.5rem">
                            My Billing Informations
                        </Heading>

                        <FormControl id="price" mb=".5rem">
                            <FormLabel> Billing Address </FormLabel>
                            <Input type="text" placeholder="My Billing Address" _placeholder={{ color: 'gray.500' }} isInvalid={errors.address ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("address")} />
                            {errors.address && <ErrorMessage error={errors.address.message} />}
                        </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button type="submit" colorScheme='blue' mr={3}> Edit </Button>
                    <Button variant='outline' color="blue.600" borderColor="blue.600" borderWidth="1px" onClick={onClose}> Close </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </Layout>
  );
}