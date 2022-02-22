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

export default function EditProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onCreate = () => {
        console.log('create product')
    }
    const onEdit = () => {
        console.log('edit product')
    }


  return (
    <Layout isHeaderVisible isFooterVisible>
        <Heading as="h2" fontSize="2rem">
            Edit Product
        </Heading>

        <Button onClick={onOpen}>Open Modal</Button>
        {/* <DeleteProduct isOpen={isOpen} onClose={onClose} /> */}
        
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> Edit Product </ModalHeader>
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
                    <Button colorScheme='blue' mr={3} onClick={() => onEdit()}> Edit </Button>
                    <Button variant='outline' color="blue.600" borderColor="blue.600" borderWidth="1px" onClick={() => onCreate()}> Create </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        

    </Layout>
  );
}

const DeleteProduct = ({ isOpen, onClose }) => {

    const onDelete = () => {
        console.log('delete product')
    }

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader> Delete Product </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Text> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora eius, ex quod ab nobis, maxime sunt consectetur hic rerum error labore tempore doloremque ipsum iusto dolores fugit facilis aliquam. 
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => onDelete()}> Delete </Button>
                    <Button variant='ghost' color="blue.600" onClick={onClose}> Cancel </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}