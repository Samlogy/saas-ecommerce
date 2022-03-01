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
import { addProductSchema } from "../lib/validation";

export default function AddProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(addProductSchema)
    });

    const onAdd = async (data: any) => {
        console.log('add product: ', data);
    };

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Heading as="h2" fontSize="2rem">
            Add Product
        </Heading>

        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> Add Product </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <form onSubmit={handleSubmit(onAdd)}> 
                        <Image boxSize='100px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Product Image' mb="1rem" borderRadius='5px' />
                        <FormControl id="image" mb=".5rem">
                            <FormLabel> Choose Image </FormLabel>
                            <Input type="file" placeholder="Product Image" border="none" px="0" isInvalid={errors.img ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("img")} />
                            {errors.img && <ErrorMessage error={errors.img.message} />}
                        </FormControl>

                        <FormControl id="title" mb=".5rem">
                            <FormLabel> Title </FormLabel>
                            <Input type="text" placeholder="Product Name" _placeholder={{ color: 'gray.500' }} isInvalid={errors.name ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("name")} />
                            {errors.name && <ErrorMessage error={errors.name.message} />}
                        </FormControl>

                        <FormControl id="description" mb=".5rem">
                            <FormLabel> Description </FormLabel>
                            <Textarea placeholder="Product Description" _placeholder={{ color: 'gray.500' }} isInvalid={errors.description ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("description")} />
                            {errors.description && <ErrorMessage error={errors.description.message} />}
                        </FormControl>

                        <FormControl id="price" mb=".5rem">
                            <FormLabel> Price </FormLabel>
                            <Input type="number" placeholder="Product Price" _placeholder={{ color: 'gray.500' }} isInvalid={errors.price ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("price")} />
                            {errors.price && <ErrorMessage error={errors.price.message} />}
                        </FormControl>

                        <FormControl id="coupon" mb=".5rem">
                            <FormLabel> Add Coupon </FormLabel>
                            <Input type="text" placeholder="Product Coupon" _placeholder={{ color: 'gray.500' }} isInvalid={errors.coupon ? true : false}
                                    errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                    {...register("coupon")} />
                            {errors.coupon && <ErrorMessage error={errors.coupon.message} />}
                        </FormControl>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button type="submit" colorScheme='blue' mr={3}> Create </Button>
                    {/* <Button variant='outline' color="blue.600" borderColor="blue.600" borderWidth="1px" onClick={() => onCreate()}> Create </Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal>

    </Layout>
  );
}