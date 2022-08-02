import { Button, Flex, useColorModeValue } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CustomModal, EditImage, InputField, MultiSelect, TextField } from 'components'
import { useProductStore } from 'store'
import { addProductSchema } from '../lib/validation'
import HandleImage from './HandleImage'

interface IAddEditProduct {
  isOpen: boolean
  onClose: () => void
  mode: string
}

interface IAvatar {
  isLoading: boolean
  error: string
  previews: string[]
  images: string[]
}

const CATEGORY_LIST = ['technology', 'food', 'tools', 'sport', 'teaching']

export default function AddEditProduct({ isOpen, onClose, mode }: IAddEditProduct) {
  const product = useProductStore((state: any) => state.product)

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
    console.log(data)
    mode === 'add' ? create(data) : update(product?.id, data)
  }

  function create(data: any) {
    console.log('create product: ', data)
  }

  function update(id: number, data: any) {
    console.log('update product: ', id, data)
  }

  const [avatar, setAvatar] = useState<IAvatar>({
    isLoading: false,
    error: '',
    previews: product?.images || [],
    images: product?.images || []
  })
  const [categories, setCategories] = useState([])

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  const Form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column-reverse">
        <HandleImage
          isEdit
          avatar={avatar}
          setAvatar={setAvatar}
          isMultiple={true}
          isPreview={true}
          label="Images"
        />
        <HandleImage avatar={avatar} setAvatar={setAvatar} isMultiple={true} isPreview={true} />
      </Flex>
      <InputField
        errors={errors}
        register={register}
        name="name"
        label="Name"
        placeholder="Name"
        bg={inputColor}
        w="full"
      />

      <TextField
        errors={errors}
        register={register}
        name="description"
        placeholder="Description"
        label="Description"
        bg={inputColor}
        w="full"
      />

      <InputField
        type="number"
        errors={errors}
        register={register}
        name="price"
        placeholder="Price"
        label="Price"
        bg={inputColor}
        w="full"
      />

      <InputField
        type="number"
        errors={errors}
        register={register}
        name="quantity"
        placeholder="Quantity"
        label="Quantity"
        bg={inputColor}
        w="full"
      />

      <MultiSelect
        label="Categories"
        options={CATEGORY_LIST}
        name="categories"
        selectedOptions={categories}
        setSelectedOptions={(value: any) => setCategories(value)}
      />

      <InputField
        type="number"
        errors={errors}
        register={register}
        name="discount"
        placeholder="Discount"
        label="Discount"
        bg={inputColor}
        w="full"
      />

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
  )

  return (
    <CustomModal
      title={mode === 'add' ? 'Add Product' : 'Edit Product'}
      isOpen={isOpen}
      onClose={onClose}
      body={Form}
    />
  )
}
