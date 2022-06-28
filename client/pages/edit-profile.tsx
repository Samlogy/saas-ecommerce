import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillPlusCircle } from 'react-icons/ai'
import { ErrorMessage, FormTemplate, Layout, View } from '../components'
import { profileSchema } from '../lib/validation'
import avatarImage from '../public/images/avatar.png'

interface IForm {
  question: string
  register: any
  errors: any
}
interface IEditAvatar {
  data: any
  upload: any
  avatar: IAvatar
}

interface IAvatar {
  isLoading: boolean
  error: string
  image: any
  preview: string
}
interface IDefaultForm {
  data: string
  upload: any
  avatar: IAvatar
  register: any
  errors: any
}

export default function EditProfile({ profile }) {
  const router = useRouter()

  const formOptions = {
    resolver: yupResolver(profileSchema),
    defaultValues: profile
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  const [avatar, setAvatar] = useState<IAvatar>({
    isLoading: false,
    image: '',
    preview: '',
    error: ''
  })
  const [questions, setQuestions] = useState({ shipping: '', vendor: '' })

  const onEdit = async (profile: any) => {
    console.log(profile)
    router.push('/profile')
  }
  const onUploadImage = (val: any) => {
    const file = val
    if (file && file.type.substr(0, 5) === 'image') {
      setAvatar({ ...avatar, image: avatar.image })
    } else {
      setAvatar({ ...avatar, image: null })
    }
  }

  // useEffect(() => {
  //   if (avatar.image) {
  //     const img = URL.createObjectURL(avatar.image)
  //     setAvatar({ ...avatar, preview: img as string })
  //   } else setAvatar({ ...avatar, preview: null })
  // }, [avatar.image])

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
        <Stack align={'center'}>
          <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'} mr="auto" w="full">
            Edit Profile
          </Heading>
        </Stack>

        <FormTemplate>
          <form onSubmit={handleSubmit(onEdit)}>
            <Heading as="h2" fontSize="1.5rem" mb="1.5rem">
              My Personal Information
            </Heading>

            <DefaultForm
              register={register}
              errors={errors}
              data={avatar.preview || profile.avatar}
              upload={onUploadImage}
              avatar={avatar}
            />

            <Heading as="h2" fontSize="1rem" my="1.5rem" display={'flex'} alignItems="center">
              Do you want to buy produts ?
              <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
                {' '}
                (Optional){' '}
              </Box>{' '}
            </Heading>

            <RadioGroup
              onChange={val => setQuestions({ ...questions, shipping: val })}
              value={questions.shipping}
              my="1rem"
              colorScheme="green"
            >
              <Stack direction="row" spacing={4}>
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>

            <CustomerForm question={questions.shipping} register={register} errors={errors} />

            <Heading as="h2" fontSize="1rem" my="1.5rem" display={'flex'} alignItems="center">
              Are a Vendor ?
              <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
                {' '}
                (Optional){' '}
              </Box>{' '}
            </Heading>

            <RadioGroup
              onChange={val => setQuestions({ ...questions, vendor: val })}
              value={questions.vendor}
              my="1rem"
              colorScheme="green"
            >
              <Stack direction="row" spacing={4}>
                <Radio value={'yes'}>Yes</Radio>
                <Radio value={'no'}>No</Radio>
              </Stack>
            </RadioGroup>

            <VendorForm question={questions.vendor} register={register} errors={errors} />

            <Stack>
              <Button
                type="submit"
                isLoading={isSubmitting}
                bg="accent_4"
                color="white"
                _hover={{ bg: 'accent_3' }}
              >
                Edit Profile
              </Button>
            </Stack>
          </form>
        </FormTemplate>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps() {
  // const data = (await getProducts()) || {};
  return {
    props: {
      profile: {
        company_country_code: null,
        company_postale_code: null,
        country_code: null,
        postale_code: null
      }
    }
  }
}

const EditAvatar = ({ data, upload, avatar }: IEditAvatar) => {
  return (
    <>
      <Box pos="relative" mx="auto" w="fit-content">
        <Avatar src={data ? data : avatarImage.src} name="avatar" size="xl" />
        <FormLabel
          m="0"
          border="1px solid"
          borderColor="white"
          w="1.5rem"
          h="1.5rem"
          p="5px"
          borderRadius="50%"
          bg="white"
          boxShadow="md"
          pos="absolute"
          bottom="0"
          transform="translate(280%, -5px)"
          _hover={{ cursor: 'pointer' }}
          htmlFor="profile-image"
          display={'flex'}
          justifyContent={'center'}
          alignItems="center"
        >
          {avatar.isLoading ? (
            <Box>
              <Spinner size="sm" display="flex" thickness="3px" color="accent_6" />
            </Box>
          ) : (
            <Box>
              <AiFillPlusCircle color="#48bb78" size="20" />
            </Box>
          )}
          <FormControl id="avatar" mb="1rem">
            <Input
              type="file"
              id="profile-image"
              disabled={avatar.isLoading}
              borderRadius="5px"
              onChange={upload}
              display="none"
            />
          </FormControl>
        </FormLabel>
      </Box>
      <Flex mb=".5rem"> {avatar.error && <ErrorMessage error={avatar.error} />} </Flex>
    </>
  )
}

const VendorForm = ({ question, register, errors }: IForm) => {
  // const borderColor = useColorModeValue('gray_6', 'gray_4')
  const inputColor = useColorModeValue('white', 'gray_3')
  return (
    <View cond={question === 'yes'} display="flex" flexDir={'column'}>
      <Heading as="h2" fontSize="1.25rem" my="1.5rem" display={'flex'} alignItems="center">
        My Company Informations{' '}
        <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
          {' '}
          (Optional){' '}
        </Box>{' '}
      </Heading>

      <FormControl id="company_name" mb="1rem">
        <FormLabel> Company Name </FormLabel>
        <Input
          type={'text'}
          placeholder="Company's Name"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.company_name ? true : false}
          focusBorderColor={errors.company_name ? 'error' : 'accent_6'}
          bg={inputColor}
          // // borderColor={borderColor}
          borderRadius="5px"
          {...register('company_name')}
        />
        {errors.company_name && <ErrorMessage error={errors.company_name.message} />}
      </FormControl>

      <FormControl id="company_description" mb="1rem">
        <FormLabel> Company Description </FormLabel>
        <Textarea
          placeholder="Company's Description"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.company_description ? true : false}
          focusBorderColor={errors.company_description ? 'error' : 'accent_6'}
          bg={inputColor}
          // // borderColor={borderColor}
          borderRadius="5px"
          {...register('company_description')}
        />
        {errors.company_description && <ErrorMessage error={errors.company_description.message} />}
      </FormControl>

      <FormControl id="company_code" mb="1rem">
        <FormLabel> Company Code </FormLabel>
        <Input
          type={'number'}
          placeholder="Company's Code"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.company_code ? true : false}
          focusBorderColor={errors.company_code ? 'error' : 'accent_6'}
          bg={inputColor}
          // // borderColor={borderColor}
          borderRadius="5px"
          {...register('company_code')}
        />
        {errors.company_code && <ErrorMessage error={errors.company_code.message} />}
      </FormControl>

      <FormControl id="company_address" mb="1rem">
        <FormLabel> Company Address </FormLabel>
        <Textarea
          placeholder="Company Address"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.company_address ? true : false}
          focusBorderColor={errors.company_address ? 'error' : 'accent_6'}
          bg={inputColor}
          // // borderColor={borderColor}
          borderRadius="5px"
          {...register('company_address')}
        />
        {errors.company_address && <ErrorMessage error={errors.company_address.message} />}
      </FormControl>

      <FormControl id="company_country_code" mb="1rem">
        <FormLabel> Company Country Code </FormLabel>
        <Input
          type="number"
          placeholder="My Country"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.company_country_code ? true : false}
          focusBorderColor={errors.company_country_code ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('company_country_code')}
        />
        {errors.company_country_code && (
          <ErrorMessage error={errors.company_country_code.message} />
        )}
      </FormControl>

      <FormControl id="company_postale_code" mb="1rem">
        <FormLabel> Company Postal Code </FormLabel>
        <Input
          type="number"
          placeholder="My Postal Code"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.company_postale_code ? true : false}
          focusBorderColor={errors.company_postale_code ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('company_postale_code')}
        />
        {errors.company_postale_code && (
          <ErrorMessage error={errors.company_postale_code.message} />
        )}
      </FormControl>
    </View>
  )
}
const CustomerForm = ({ question, register, errors }: IForm) => {
  const inputColor = useColorModeValue('white', 'gray_3')
  // const borderColor = useColorModeValue('gray_6', 'gray_4')
  return (
    <View cond={question === 'yes'} display="flex" flexDir={'column'}>
      <Heading as="h2" fontSize="1.25rem" my="1.5rem" display={'flex'} alignItems="center">
        My Shipping Informations{' '}
        <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
          {' '}
          (Optional){' '}
        </Box>{' '}
      </Heading>

      <FormControl id="address_1" mb="1rem">
        <FormLabel> Shipping Address 1 </FormLabel>
        <Textarea
          placeholder="Address 1"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.address_1 ? true : false}
          focusBorderColor={errors.address_1 ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('address_1')}
        />
        {errors.address_1 && <ErrorMessage error={errors.address_1.message} />}
      </FormControl>

      <FormControl id="address_2" mb="1rem">
        <FormLabel> Shipping Address 2 </FormLabel>
        <Textarea
          placeholder="Address 2"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.address_2 ? true : false}
          focusBorderColor={errors.address_2 ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('address_2')}
        />
        {errors.address_2 && <ErrorMessage error={errors.address_2.message} />}
      </FormControl>

      <FormControl id="country_code" mb="1rem">
        <FormLabel> My Country </FormLabel>
        <Input
          type="number"
          placeholder="My Country"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.country_code ? true : false}
          focusBorderColor={errors.country_code ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('country_code')}
        />
        {errors.country_code && <ErrorMessage error={errors.country_code.message} />}
      </FormControl>

      <FormControl id="postale_code" mb="1rem">
        <FormLabel> Postal Code </FormLabel>
        <Input
          type="number"
          placeholder="My Postal Code"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.postale_code ? true : false}
          focusBorderColor={errors.postale_code ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('postale_code')}
        />
        {errors.postale_code && <ErrorMessage error={errors.postale_code.message} />}
      </FormControl>
    </View>
  )
}

const DefaultForm = ({ data, upload, avatar, register, errors }: IDefaultForm) => {
  // const borderColor = useColorModeValue('gray_6', 'gray_4')
  const inputColor = useColorModeValue('white', 'gray_3')
  return (
    <>
      <EditAvatar data={data} upload={upload} avatar={avatar} />

      <FormControl id="fullName" mb="1rem">
        <FormLabel> Full Name </FormLabel>
        <Input
          type="text"
          placeholder=""
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.fullName ? true : false}
          focusBorderColor={errors.fullName ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('fullName')}
        />
        {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
      </FormControl>

      <FormControl id="email" mb="1rem">
        <FormLabel> Email Address </FormLabel>
        <Input
          type="email"
          placeholder="example@mail.com"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.email ? true : false}
          focusBorderColor={errors.email ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('email')}
        />
        {errors.email && <ErrorMessage error={errors.email.message} />}
      </FormControl>

      <FormControl id="mobile" mb="1rem">
        <FormLabel> Mobile </FormLabel>
        <Input
          type="number"
          placeholder="Phone Number"
          _placeholder={{ color: 'gray_4' }}
          isInvalid={errors.mobile ? true : false}
          focusBorderColor={errors.mobile ? 'error' : 'accent_6'}
          bg={inputColor}
          // borderColor={borderColor}
          borderRadius="5px"
          {...register('mobile')}
        />
        {errors.mobile && <ErrorMessage error={errors.mobile.message} />}
      </FormControl>
    </>
  )
}
