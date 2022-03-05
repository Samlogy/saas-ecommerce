import { 
  Box, Heading, Text, Button, Image, Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl, FormLabel, Input, Textarea,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react';
import Link from 'next/link'
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiEdit, FiTrash } from "react-icons/fi"
import { AiOutlineClose } from 'react-icons/ai';
import { useRef } from "react"

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Layout, ErrorMessage } from "../components"
import { addProductSchema } from "../lib/validation";

export default function Admin() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const headers = ['Name', 'Description', 'Quantity', 'Price', 'Actions']
  const products = [
    {
      id: "1",
      img: 'https://bit.ly/dan-abramov',
      name: "Throwback Hip Ba",
      // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
      quantity: 1,
      price: 90.00
    },
  ]
  
  const data = {
    headers,
    products
  }

  const product = {
    img: 'https://bit.ly/dan-abramov',
    name: 'The title ...',
    description: 'la desc ...',
    price: 0,
    coupon: 'coupon ...'
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading as="h2" fontSize="24px">
        Products List
      </Heading>

      <Button colorScheme='blue' variant='outline' leftIcon={<AiOutlinePlus />} onClick={onOpen}> Add Product </Button>
      <AddEditProduct isOpen={isOpen} onClose={onClose} product={product} mode='edit' />

      {/* <ProductBox isOpen={isOpen} onClose={onClose} type="disable" /> */}

      {/* <ProductsFilter /> */}
      {/* <ProductsList data={data} /> */}
    </Layout>
  );
}


const ProductsList = ({ data }: { data: any }) => {
  return(
      <Table variant='striped' colorScheme='blue'>
        <Thead>
          <Tr>
            { data.headers.map((header: any) => <Th> {header} </Th>) }
          </Tr>
        </Thead>

        <Tbody>
          { data.products.map((product: any) => 
            <Tr> 
              <Td> <Image src={product?.img} alt='product iamge' borderRadius={'5px'} w="5rem" h="5rem" /> </Td>
              <Td> {product?.name}  </Td>
              <Td> <Text isTruncated w="2rem"> {product?.description} </Text>  </Td>
              <Td> {product?.quantity}  </Td>
              <Td> {product?.price}  </Td>
              <Td> <ActionsMenu productId={product.id} /> </Td>
            </Tr>
          )}
        </Tbody>

        <Tfoot>
          <Tr>
            { data.headers.map((header: any) => <Th> {header} </Th>) }
          </Tr>
        </Tfoot>
      </Table>
  )
}

const ProductsFilter = () => {
  return(
    <>
      <Input placeholder='Product Name' />
    </>
  )
}

const ActionsMenu = ({ productId }: { productId: string }) => {
  return(
    <Menu>
      <MenuButton as={Button} rightIcon={<BsThreeDotsVertical />}>
      </MenuButton>

      <MenuList>
        <MenuItem > <FiEdit color='#deb055' /> <Box as="span" ml=".5rem" color='yellow.500'> Edit </Box> </MenuItem>
        <MenuItem > <FiTrash color="#e53e3e" /> <Box as="span" ml=".5rem" color='red.500'> Delete </Box> </MenuItem>
        <MenuItem > <AiOutlineClose color="#718096" />  <Box as="span" ml=".5rem" color='gray.500'> Disable </Box> </MenuItem>
      </MenuList>
    </Menu>
  )
}

function AddEditProduct({ isOpen, onClose, product, mode }: { isOpen: any, onClose: any, product: any, mode: string }) {

    const formOptions = { 
      resolver: yupResolver(addProductSchema),
      defaultValues: mode === 'add' ? {} : product 
    };
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm(formOptions);


    function onSubmit(data: any) {
        return mode === 'add' ? createProduct(data) : updateProduct(product.id, data);
    }

    function createProduct(data: any) {
      console.log('create product: ', data)
    }

    function updateProduct(id: string, data: any) {
      console.log('edit product: ', data, id)
    }

    return (
          <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader> { mode === 'add' ? "Add" : 'Edit' } Product </ModalHeader>
                  <ModalCloseButton />

                  <ModalBody>
                      <form onSubmit={handleSubmit(onSubmit)}> 
                          <Image boxSize='100px' objectFit='cover' src={product.img} fallbackSrc='https://via.placeholder.com/150' alt='Product Image' mb="1rem" borderRadius='5px' />
                          <FormControl id="image" mb=".5rem">
                              <FormLabel> Choose Image </FormLabel>
                              <Input type="file" placeholder="Product Image" border="none" px="0" isInvalid={errors.img ? true : false}
                                      errorBorderColor="error" borderColor="gray.300" borderRadius="4px" 
                                      {...register("img")} />
                              {errors.img && <ErrorMessage error={errors.img.message} />}
                          </FormControl>

                          <FormControl id="name" mb=".5rem">
                              <FormLabel> Name </FormLabel>
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

                          <Flex flexDir="row"> 
                            <Button type="submit" isLoading={isSubmitting || !product} bg='blue.600' color="white" mt="1rem" ml="auto" display={'flex'} justifyContent='flex-end' _hover={{ bg: 'blue.700' }}> Create </Button>
                            <Button type="reset" bg="gray.600" color='white' mt="1rem" ml="1rem" display={'flex'} justifyContent='flex-end' _hover={{ bg: 'gray.700' }} onClick={() => reset(formOptions.defaultValues)}> Reset </Button>
                          </Flex>
                      </form>
                  </ModalBody>
              </ModalContent>
          </Modal>
      );
}

function ProductBox({ isOpen, onClose, type }: { isOpen: any, onClose: any, type: string }) {
  const cancelRef = useRef()

  return(
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>  
            { type === 'delete' ? "Delete Product ?" : "Disable Product ?" }
          </AlertDialogHeader>

          <AlertDialogCloseButton />

          <AlertDialogBody>
            { type === 'delete' ? "Are you sure you want to delete this product ?" : "Are you sure you want to disable this product ?" }
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}

export async function getStaticProps() {
  // const data = (await getProducts()) || {};
  return {
    props: { products: {} },
  };
}

