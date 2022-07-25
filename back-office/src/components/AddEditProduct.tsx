import { Box, Button, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CustomModal, ErrorMessage, InputField, SelectField, TextField } from 'components'
import { useProductStore } from 'store'
import { addProductSchema } from '../lib/validation'

interface IAddEditProduct {
  isOpen: boolean
  onClose: () => void
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
  img: string
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
    return mode === 'add' ? create(data) : update(product?.id, data)
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
    img: ''
  })

  // image
  const onUploadImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setAvatar({ ...avatar, img: imgPreview })
  }

  const inputColor = useColorModeValue('gray_9', 'gray_3')

  const Form = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EditImages data={product?.images} upload={onUploadImage} avatar={avatar} />

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

      <SelectField
        errors={errors}
        register={register}
        name="category"
        label="Category"
        placeholder="Category"
        bg={inputColor}
        w="full"
      >
        {CATEGORY_LIST?.map((el: string, idx: number) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </SelectField>

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

const EditImages = ({ data, upload, avatar }: IEditImage) => {
  return (
    <>
      <Box pos="relative" w="fit-content">
        <Flex justifyContent={'space-between'} alignItems="center">
          <Image
            boxSize="50px"
            objectFit="cover"
            src={data ? data : avatar.img}
            fallbackSrc="https://via.placeholder.com/100"
            alt="Image"
            mb="1rem"
            borderRadius="5px"
          />
        </Flex>

        <InputField
          type="file"
          accept="image/*"
          name="images"
          label="images"
          placeholder="images"
          onChange={upload}
          w="full"
          px="0"
          border="none"
        />
      </Box>
      <Flex mb=".5rem"> {avatar.error && <ErrorMessage error={avatar.error} />} </Flex>
    </>
  )
}
