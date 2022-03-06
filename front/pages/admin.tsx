import { 
  Box, Heading, Text, Button, Image, Flex, IconButton, Select,
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
  ModalFooter,
  FormControl, FormLabel, Input, Textarea,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';
// import Link from 'next/link'
import { AiOutlinePlus } from "react-icons/ai"
import { BiDetail } from "react-icons/bi"
import { FiEdit, FiTrash } from "react-icons/fi"
import { AiOutlineClose } from 'react-icons/ai';
import { FaEllipsisV } from "react-icons/fa"
import { useRef } from "react"

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react"

import { Layout, ErrorMessage, View } from "../components"
import { addProductSchema } from "../lib/validation";

export default function Admin() {
  const [action, setAction] = useState({ delete: false, disable: false, add: false, edit: false, details: false })
  const [currentProduct, setCurrentProduct] = useState({
    id: '', name: '', price: '', description: '', coupon: '', img: '', quantity: ''
  })

  const headers = ['Image', 'Name', 'Description', 'Quantity', 'Price', 'Actions']
  const products = [
    {
      id: "1",
      img: 'https://bit.ly/dan-abramov',
      name: "Throwback Hip Ba",
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
      quantity: 1,
      price: 90.00
    },
  ]
  
  const data = {
    headers,
    products
  }

  const product = {
    id: '1',
    img: 'https://bit.ly/dan-abramov',
    name: 'The title ...',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique quam reprehenderit repudiandae adipisci saepe. Est officiis, dolore, natus molestias nemo facilis ad pariatur rem accusantium numquam quae, unde doloribus.',
    price: 0,
    coupon: '30%',
    features: ['feature1', 'feature1', 'feature1', 'feature1', 'feature1', 'feature1']
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading as="h2" fontSize="24px">
        Products List
      </Heading>

      <Button colorScheme='blue' variant='outline' ml="auto" display={'flex'} leftIcon={<AiOutlinePlus />} 
        onClick={() => setAction({...action, add: true})}> Add Product </Button>

      
      <View cond={action.delete}>
          <ProductBox isOpen={action.delete} setAction={setAction} onClose={() => setAction({...action, delete: false})} productId={"1"} mode="delete" />  
      </View>

      <View cond={action.disable}>
          <ProductBox isOpen={action.disable} setAction={setAction} onClose={() => setAction({...action, disable: false})} productId={"1"} mode="disable" />  
      </View>

      <View cond={action.add}>
        <AddEditProduct isOpen={action.add} 
            currentProduct={currentProduct} onClose={() => setAction({...action, add: false})} mode='add' />
      </View>

      <View cond={action.edit}>
        <AddEditProduct isOpen={action.edit} 
              currentProduct={currentProduct} onClose={() => setAction({...action, edit: false})} product={product} mode='edit' />
      </View>

      <View cond={action.details}>
        <ProductDetails isOpen={action.details} onClose={() => setAction({...action, details: false})} product={product} />
      </View>

      <ProductsFilter />
      <ProductsList data={data} setAction={setAction} />
    </Layout>
  );
}


const ProductsList = ({ data, setAction }: { data: any, setAction: any }) => {
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
              <Td> <Image src={product?.img} fallbackSrc='https://via.placeholder.com/150' alt='product iamge' borderRadius={'5px'} w="5rem" h="5rem" /> </Td>
              <Td> {product?.name}  </Td>
              <Td> <Text isTruncated w="2rem"> {product?.description} </Text>  </Td>
              <Td> {product?.quantity}  </Td>
              <Td> {product?.price}  </Td>
              <Td> <ActionsMenu productId={product.id} setAction={setAction} /> </Td>
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
  const onSort = (e: any) => {
    const selected = e.target.value
    console.log('selected: ', selected)
  }
  const onFilter = (e: any) => {
    const filters = e.target.value;
    console.log('filters: ', filters)
  }
  return(
    <Flex flexDir="row" flexWrap={"wrap"} justifyContent={["space-between", "", "space-evenly", ""]} my="3rem">
      <Flex alignItems={"center"} mb={["1rem", "0", "", ""]}>
        <Box as="span" fontSize="1rem" mr=".5rem" w="3rem"> Filter: </Box> 
        <Input onChange={onFilter} placeholder='Search...' w={["80%", "", "20rem", ""]} />
      </Flex>

      <Flex alignItems={"center"}>
        <Box as="span" fontSize="1rem" mr=".5rem" w="3rem"> Sort: </Box>
        <Select onChange={onSort} placeholder="Order" w={["80%", "", "6rem", ""]}>
          <option value='asc'> ASC </option> 
          <option value='desc'> DESC </option> 
        </Select>
      </Flex>
    </Flex>
  )
}

const ActionsMenu = ({ productId, setAction }: { productId: string, setAction: any }) => {
  const onEdit = (productId: string) => {
    // console.log('edit product: ', productId)
    setAction({ edit: true})
  }
  const onDelete = (productId: string) => {
    // console.log('delete product: ', productId)
    setAction({ delete: true })
  }
  const onDisable = (productId: string) => {
    // console.log('disable product: ', productId)
    setAction({ disable: true })
  }
  const onDetails = (productId: string) => {
    // console.log('details product: ', productId)
    setAction({ details: true })
  }

  return(
    <Menu>
      <MenuButton as={IconButton} icon={<FaEllipsisV />}>
      </MenuButton>

      <MenuList>
        <MenuItem color={"yellow.500"} icon={<FiEdit color='warning' size="18" />} onClick={() => onEdit(productId)}> Edit </MenuItem>
        <MenuItem color={"red.500"} icon={<FiTrash color="error" size="18" />} onClick={() => onDelete(productId)}> Delete </MenuItem>
        <MenuItem color={"gray.500"} icon={<AiOutlineClose color="disable" size="18" />} onClick={() => onDisable(productId)}> Disable </MenuItem>
        <MenuItem color={"blue.500"} icon={<BiDetail color={'info'} size="18" />} onClick={() => onDetails(productId)}> Details </MenuItem>
      </MenuList>
    </Menu>
  )
}

const AddEditProduct = ({ isOpen, onClose, product, currentProduct, mode }: { isOpen: any, onClose: any, product?: any, currentProduct: any, mode: string }) => {

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
                          <Image boxSize='100px' objectFit='cover' src={currentProduct?.img || product?.img} fallbackSrc='https://via.placeholder.com/150' alt='Product Image' mb="1rem" borderRadius='5px' />
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
                            <Button type="submit" isLoading={isSubmitting} bg='blue.600' color="white" mt="1rem" ml="auto" display={'flex'} justifyContent='flex-end' _hover={{ bg: 'blue.700' }}> {mode === 'add' ? 'Create' : 'Edit'} </Button>
                            <Button type="reset" bg="gray.600" color='white' mt="1rem" ml="1rem" display={'flex'} justifyContent='flex-end' _hover={{ bg: 'gray.700' }} onClick={() => reset(formOptions.defaultValues)}> Reset </Button>
                          </Flex>
                      </form>
                  </ModalBody>
              </ModalContent>
          </Modal>
      );
}

const ProductBox = ({ isOpen, onClose, productId, setAction, mode }: { isOpen: any, onClose: any, productId: string, setAction: any, mode: string }) => {
  const cancelRef = useRef()

  const onDelete = (productId: string) => {
    console.log('delete product: ', productId)
    setAction({ delete: false })
  }

  const onDisable = (productId: string) => {
    console.log('disable product: ', productId)
    setAction({ disable: false })
  }

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
            { mode === 'delete' ? "Delete Product ?" : "Disable Product ?" }
          </AlertDialogHeader>

          <AlertDialogCloseButton />

          <AlertDialogBody>
            { mode === 'delete' ? "Are you sure you want to delete this product ?" : "Are you sure you want to disable this product ?" }
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme='red' 
                onClick={mode === 'delete' ? () => onDelete(productId) : () => onDisable(productId)}>
                Yes
              </Button>
              <Button ref={cancelRef} onClick={onClose} bg="gray.600" color="white" _hover={{ bg: "gray.700" }} ml={3}>
                No
              </Button>            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  )
}

const ProductDetails = ({ isOpen, onClose, product }: { isOpen: any, onClose: any, product: any }) => {

  const Display = (label: string, data: any) => {
    return(
      <Flex mb=".5rem"> 
        <Box as="span" w="10rem" textAlign={'left'} fontWeight={'600'}> {label}: </Box>

        { Array.isArray(data) ? <UnorderedList textAlign={'left'}> {data.map(el => <ListItem key={el.id}> {el} </ListItem>)} </UnorderedList> :
          <Text ml='.5rem' textAlign={'left'} w="auto"> {data} </Text>
        }
      </Flex>
    )
  }
  return(
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader> Product Details </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
                <Flex flexDir='column'>
                  <Image src={product?.img} alt='product iamge' borderRadius={'5px'} w="5rem" h="5rem" mb=".5rem" />
                  { Display('Name', product.name) }
                  { Display('Quantity', product.quantity) }
                  { Display('Description', product.description) }    
                  { Display('Coupon', product.coupon) }   
                  { Display('Features', product.features) }               
                </Flex>
            </ModalBody>
            <ModalFooter> <Button bg={'disable'} color='white' _hover={{ bg: 'gray.600' }} onClick={onClose}> Close </Button> </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export async function getStaticProps() {
  // const data = (await getProducts()) || {};
  return {
    props: { products: {} },
  };
}

