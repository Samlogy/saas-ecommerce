import {
  Button,
  Image,
  Box,
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
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { MultiSelect } from 'react-multi-select-component'

import { ErrorMessage } from 'components'
import { addProductSchema } from '../lib/validation'
import { setValues } from 'framer-motion/types/render/utils/setters'

interface IAddEditProduct {
  isOpen: boolean
  onClose: () => void
  product?: any
  mode: string
}
interface IEditImage {
  data: any
  upload: any
  avatar: IAvatar
}
interface IAvatar {
  isLoading: boolean
  error: string
}
const AddEditProduct = ({ isOpen, onClose, product, mode }: IAddEditProduct) => {
  const formOptions = {
    resolver: yupResolver(addProductSchema),
    defaultValues: mode === 'add' ? {} : product
  }
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  function onSubmit(data: any) {
    console.log(data)
    return mode === 'add' ? createProduct(data) : updateProduct(product.id, data)
  }

  function createProduct(data: any) {
    const new_data = {
      ...data,
      categories: category
    }
    console.log('create product: ', new_data)
  }

  function updateProduct(id: string, data: any) {
    const new_data = {
      ...data,
      categories: category
    }
    console.log('update product: ', id, new_data)
  }

  const [avatar, setAvatar] = useState<IAvatar>({
    isLoading: false,
    error: ''
  })

  // image
  const onUploadImage = () => {
    setAvatar({ ...avatar, isLoading: true })
    // call api when done --> error / success
    setAvatar({ ...avatar, isLoading: false })
  }

  const inputColor = useColorModeValue('gray_9', 'gray_3')
  const [category, setCategory] = useState([])
  const categoryList = [
    { label: 'Grapes 🍇', value: 'grapes' },
    { label: 'Mango 🥭', value: 'mango' },
    { label: 'Banane', value: 'banane' },
    { label: 'Kiwi', value: 'kiwi' },
    { label: 'Strawberry 🍓', value: 'strawberry', disabled: true }
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> {mode === 'add' ? 'Add' : 'Edit'} Product </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <EditImage data={product?.image} upload={onUploadImage} avatar={avatar} />

            <FormControl id="name" mb=".5rem">
              <FormLabel> Name </FormLabel>
              <Input
                type="text"
                placeholder="Product Name"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.name ? true : false}
                focusBorderColor={errors.name ? 'error' : 'accent_5'}
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
                bg={inputColor}
                borderRadius="5px"
                {...register('price')}
              />
              {errors.price && <ErrorMessage error={errors.price.message} />}
            </FormControl>

            <FormControl id="quantity" mb=".5rem">
              <FormLabel> Quantity </FormLabel>
              <Input
                type="number"
                placeholder="Product Quantity"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.quantity ? true : false}
                focusBorderColor={errors.quantity ? 'error' : 'accent_5'}
                bg={inputColor}
                borderRadius="5px"
                {...register('quantity')}
              />
              {errors.quantity && <ErrorMessage error={errors.quantity.message} />}
            </FormControl>

            <FormControl id="categories" mb=".5rem">
              <FormLabel> Category </FormLabel>
              <Controller
                name="categories"
                render={({ field }) => (
                  <MultiSelect
                    {...field}
                    options={categoryList}
                    value={category}
                    onChange={(val: any) => {
                      setCategory(val)
                      setValue('categories', val)
                    }}
                    valueRenderer={val => (!val.length ? 'Category' : null)}
                    className={errors.categories ? 'mutli-select error' : 'multi-select'}
                    // overrideStrings={multiselect_strings}
                    labelledBy="categories"
                  />
                )}
                control={control}
                defaultValue=""
              />
              {errors.categories && <ErrorMessage error={errors.categories.message} />}
            </FormControl>

            <FormControl id="discount" mb=".5rem">
              <FormLabel> Add Discount </FormLabel>
              <Input
                type="number"
                placeholder="Product Discount"
                _placeholder={{ color: 'gray_4' }}
                isInvalid={errors.discount ? true : false}
                focusBorderColor={errors.discount ? 'error' : 'accent_5'}
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
                {mode === 'add' ? 'Create' : 'Edit'}
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
                Reset
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default AddEditProduct

const EditImage = ({ data, upload, avatar }: IEditImage) => {
  return (
    <>
      <Box pos="relative" w="fit-content">
        <Flex justifyContent={'space-between'} alignItems="center">
          <Image
            boxSize="50px"
            objectFit="cover"
            src={data ? data : ''}
            fallbackSrc="https://via.placeholder.com/100"
            // fallback="https://via.placeholder.com/50"
            alt="Product Image"
            mb="1rem"
            borderRadius="5px"
          />
        </Flex>
        <FormControl id="avatar">
          <Input
            type="file"
            id="profile-image"
            border="none"
            disabled={avatar.isLoading}
            borderRadius="5px"
            onChange={upload}
            px="0"
          />
        </FormControl>
      </Box>
      <Flex mb=".5rem"> {avatar.error && <ErrorMessage error={avatar.error} />} </Flex>
    </>
  )
}
