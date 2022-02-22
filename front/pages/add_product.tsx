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

import Layout from "../components/Layout"

export default function AddProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onCreate = () => {
        console.log('create product')
    }
    const onAdd = () => {
        console.log('add product')
    }

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
                    <Image boxSize='100px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Product Image' mb="1rem" borderRadius='5px' />
                    <FormControl id="image" mb=".5rem">
                        <FormLabel> Choose Image </FormLabel>
                        <Input type="file" placeholder="Product Image" border="none" px="0" />
                    </FormControl>

                    <FormControl id="title" mb=".5rem">
                        <FormLabel> Title </FormLabel>
                        <Input type="text" placeholder="Product Name" _placeholder={{ color: 'gray.500' }} />
                    </FormControl>

                    <FormControl id="description" mb=".5rem">
                        <FormLabel> Description </FormLabel>
                        <Textarea placeholder="Product Description" _placeholder={{ color: 'gray.500' }} />
                    </FormControl>

                    <FormControl id="price" mb=".5rem">
                        <FormLabel> Price </FormLabel>
                        <Input type="number" placeholder="Product Price" _placeholder={{ color: 'gray.500' }} />
                    </FormControl>

                    <FormControl id="coupon" mb=".5rem">
                        <FormLabel> Add Coupon </FormLabel>
                        <Input type="text" placeholder="Product Coupon" _placeholder={{ color: 'gray.500' }} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => onAdd()}> Add </Button>
                    <Button variant='outline' color="blue.600" borderColor="blue.600" borderWidth="1px" onClick={() => onCreate()}> Create </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </Layout>
  );
}