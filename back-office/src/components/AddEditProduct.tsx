import {
  Button,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from 'components'
import { addProductSchema } from '../lib/validation'

interface IAddEditProduct {
  isOpen: boolean
  onClose: () => void
  product?: any
  mode: string
}
const AddEditProduct = ({ isOpen, onClose, product, mode }: IAddEditProduct) => {
  console.log(product)
  const formOptions = {
    resolver: yupResolver(addProductSchema),
    defaultValues: mode === 'add' ? {} : product
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(data: any) {
    return mode === 'add' ? createProduct(data) : updateProduct(product.id, data)
  }

  function createProduct(data: any) {
    console.log('create product: ', data)
  }

  function updateProduct(id: string, data: any) {
    console.log('edit product: ', data, id)
  }

  const borderColor = useColorModeValue('gray_6', 'gray_4')
  const inputColor = useColorModeValue('gray_3', 'gray_2')

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {mode === 'add' ? 'Add' : 'Edit'} Product </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={product?.img}
              fallbackSrc="https://via.placeholder.com/150"
              alt="Product Image"
              mb="1rem"
              borderRadius="5px"
            />
            <FormControl id="image" mb=".5rem">
              <FormLabel> Choose Image </FormLabel>
              <Input
                type="file"
                placeholder="Product Image"
                border="none"
                px="0"
                isInvalid={errors.image ? true : false}
                errorBorderColor="error"
                borderColor={borderColor}
                bg={inputColor}
                borderRadius="5px"
                focusBorderColor={errors.image ? 'error' : 'accent_5'}
                {...register('image')}
              />
              {errors.image && <ErrorMessage error={errors.image.message} />}
            </FormControl>

            <FormControl id="name" mb=".5rem">
              <FormLabel> Name </FormLabel>
              <Input
                type="text"
                placeholder="Product Name"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.name ? true : false}
                focusBorderColor={errors.name ? 'error' : 'accent_5'}
                errorBorderColor="error"
                borderColor={borderColor}
                bg={inputColor}
                borderRadius="5px"
                {...register('name')}
              />
              {errors.name && <ErrorMessage error={errors.name.message} />}
            </FormControl>

            <FormControl id="description" mb=".5rem">
              <FormLabel> Description </FormLabel>
              <Textarea
                placeholder="Product Description"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.description ? true : false}
                focusBorderColor={errors.description ? 'error' : 'accent_5'}
                errorBorderColor="error"
                borderColor={borderColor}
                bg={inputColor}
                borderRadius="5px"
                {...register('description')}
              />
              {errors.description && <ErrorMessage error={errors.description.message} />}
            </FormControl>

            <FormControl id="price" mb=".5rem">
              <FormLabel> Price </FormLabel>
              <Input
                type="number"
                placeholder="Product Price"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.price ? true : false}
                focusBorderColor={errors.price ? 'error' : 'accent_5'}
                errorBorderColor="error"
                borderColor={borderColor}
                bg={inputColor}
                borderRadius="5px"
                {...register('price')}
              />
              {errors.price && <ErrorMessage error={errors.price.message} />}
            </FormControl>

            <FormControl id="discount" mb=".5rem">
              <FormLabel> Add Discount </FormLabel>
              <Input
                type="number"
                placeholder="Product Discount"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.discount ? true : false}
                focusBorderColor={errors.discount ? 'error' : 'accent_5'}
                errorBorderColor="error"
                borderColor={borderColor}
                bg={inputColor}
                borderRadius="5px"
                {...register('discount')}
              />
              {errors.discount && <ErrorMessage error={errors.discount.message} />}
            </FormControl>

            <Flex flexDir="row">
              <Button
                type="submit"
                isLoading={isSubmitting}
                bg="accent_3"
                color="white"
                mt="1rem"
                ml="auto"
                display={'flex'}
                justifyContent="flex-end"
                _hover={{ bg: 'accent_2' }}
              >
                {' '}
                {mode === 'add' ? 'Create' : 'Edit'}{' '}
              </Button>
              <Button
                type="reset"
                bg="gray_3"
                color="white"
                mt="1rem"
                ml="1rem"
                display={'flex'}
                justifyContent="flex-end"
                _hover={{ bg: 'gray_4' }}
                onClick={() => (mode === 'edit' ? {} : reset(formOptions.defaultValues))}
              >
                {' '}
                Reset{' '}
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default AddEditProduct
