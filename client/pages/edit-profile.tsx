import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { getVariableValues } from 'graphql'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage, FormTemplate, InputField, Layout, TextField, View } from '../components'
import { profileSchema } from '../lib/validation'
import avatarImage from '../public/images/avatar.png'

interface IForm {
  register: any
  errors: any
}
interface IDefaultForm {
  register: any
  errors: any
  setValue: any
  getValues: any
}

export default function EditProfile({ profile }) {
  const router = useRouter()
  //const [avatar, setAvatar] = useState<any>({ img: '', error: '' })
  const [questions, setQuestions] = useState({ shipping: '', vendor: '' })

  const formOptions = {
    resolver: yupResolver(profileSchema),
    defaultValues: profile
  }

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  const onEdit = async (profile: any) => {
    console.log(profile)
    // function --> keep only plain fields
    // router.push('/profile')
  }

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
              setValue={setValue}
              getValues={getValues}
            />

            <Heading as="h2" fontSize="1rem" my="1.5rem" display={'flex'} alignItems="center">
              Do you want to buy produts ?
              <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
                (Optional)
              </Box>
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

            <View cond={questions.shipping === 'yes'} display="flex" flexDir={'column'}>
              <CustomerForm register={register} errors={errors} />
            </View>

            <Heading as="h2" fontSize="1rem" my="1.5rem" display={'flex'} alignItems="center">
              Are a Vendor ?
              <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
                (Optional)
              </Box>
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

            <View cond={questions.vendor === 'yes'} display="flex" flexDir={'column'}>
              <VendorForm register={register} errors={errors} />
            </View>

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

const VendorForm = ({ register, errors }: IForm) => {
  // const borderColor = useColorModeValue('gray_6', 'gray_4')
  const inputColor = useColorModeValue('white', 'gray_3')
  return (
    <>
      <Heading as="h2" fontSize="1.25rem" my="1.5rem" display={'flex'} alignItems="center">
        My Company Informations
        <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
          (Optional)
        </Box>
      </Heading>

      <InputField
        name="company_name"
        register={register}
        errors={errors}
        label="Company Name"
        bg={inputColor}
      />

      <TextField
        name="company_description"
        register={register}
        errors={errors}
        label="Company Description"
        bg={inputColor}
      />

      <InputField
        type="number"
        name="company_code"
        register={register}
        errors={errors}
        label="Company's Code"
        bg={inputColor}
      />

      <TextField
        name="company_address"
        register={register}
        errors={errors}
        label="Company Address"
        bg={inputColor}
      />

      <InputField
        type="number"
        name="company_country_code"
        register={register}
        errors={errors}
        label="Company Country Code"
        bg={inputColor}
      />

      <InputField
        type="number"
        name="company_postale_code"
        register={register}
        errors={errors}
        label="Company Postal Code"
        bg={inputColor}
      />
    </>
  )
}
const CustomerForm = ({ register, errors }: IForm) => {
  const inputColor = useColorModeValue('white', 'gray_3')
  // const borderColor = useColorModeValue('gray_6', 'gray_4')
  return (
    <>
      <Heading as="h2" fontSize="1.25rem" my="1.5rem" display={'flex'} alignItems="center">
        My Shipping Informations
        <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
          (Optional)
        </Box>
      </Heading>

      <TextField
        name="address_1"
        register={register}
        errors={errors}
        label="Address 1"
        bg={inputColor}
      />

      <TextField
        name="address_2"
        register={register}
        errors={errors}
        label="Address 2"
        bg={inputColor}
      />

      <InputField
        type="number"
        name="country_code"
        register={register}
        errors={errors}
        label="My Country"
        bg={inputColor}
      />

      <InputField
        type="number"
        name="postale_code"
        register={register}
        errors={errors}
        label="My Postal Code"
        bg={inputColor}
      />
    </>
  )
}

const DefaultForm = ({ register, errors, setValue, getValues }: IDefaultForm) => {
  // const borderColor = useColorModeValue('gray_6', 'gray_4')
  const inputColor = useColorModeValue('white', 'gray_3')

  const avatarRef = useRef<any>()

  const handleImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setValue('avatar', imgPreview)
  }

  return (
    <>
      <Flex flexDir="column" justify="center" alignItems="center" mb="1rem">
        <Input
          type={'file'}
          accept="image/*"
          w="20rem"
          display="none"
          ref={avatarRef}
          onChange={handleImage}
        />
        <Avatar
          name="profile-picture"
          size="2xl"
          src={getValues('avatar') ? getValues('avatar') : avatarImage.src}
          onClick={() => avatarRef.current.click()}
          cursor={'pointer'}
          mb="1rem"
          boxShadow="md"
        />
        <ErrorMessage error={!getValues('avatar') && errors.avatar?.message} />
      </Flex>

      <InputField
        name="fullName"
        register={register}
        errors={errors}
        label="Full Name"
        bg={inputColor}
      />

      <InputField
        name="email"
        register={register}
        errors={errors}
        label="Email Address"
        bg={inputColor}
      />

      <InputField
        name="mobile"
        register={register}
        errors={errors}
        label="Mobile"
        bg={inputColor}
      />
    </>
  )
}
