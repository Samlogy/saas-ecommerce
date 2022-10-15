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
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage, InputField, Layout, TextField, View, SelectField } from '../components'
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
  const [questions, setQuestions] = useState({ shipping: 'no', vendor: 'no' })

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

        <Stack
          spacing={4}
          bg={useColorModeValue('gray_9', 'gray_2')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={['1.5rem 1rem', '1.5rem 2rem', '', '']}
          w={['100%', '30em']}
          m="3rem 0 1rem 0"
        >
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

            <Box ml="3em">
              <Heading as="h2" fontSize="1rem" my="1.5rem" display={'flex'} alignItems="center">
                Do you want to buy produts ?
                <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
                  (Optional)
                </Box>
              </Heading>

              <RadioGroup
                onChange={val =>
                  setQuestions(prev => {
                    return {
                      ...prev,
                      shipping: val
                    }
                  })
                }
                value={questions?.shipping}
                my="1em"
                colorScheme="green"
              >
                <Stack direction="row" spacing={4}>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <View cond={questions?.shipping === 'yes'} display="flex" flexDir={'column'}>
              <CustomerForm register={register} errors={errors} />
            </View>

            <Box ml="3em">
              <Heading as="h2" fontSize="1rem" my="1.5rem" display={'flex'} alignItems="center">
                Are a Vendor ?
                <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
                  (Optional)
                </Box>
              </Heading>

              <RadioGroup
                onChange={val =>
                  setQuestions(prev => {
                    return {
                      ...prev,
                      vendor: val
                    }
                  })
                }
                value={questions?.vendor}
                my="1em"
                colorScheme="green"
              >
                <Stack direction="row" spacing={4}>
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <View cond={questions?.vendor === 'yes'} display="flex" flexDir={'column'}>
              <VendorForm
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
              />
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
        </Stack>
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

const VendorForm = ({ register, errors, setValue, getValues }: IDefaultForm) => {
  const companyLogoRef = useRef<any>()

  const handleImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setValue('companyLogo', imgPreview)
  }
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading
        as="h2"
        fontSize="1.25rem"
        my="1.5rem"
        display={'flex'}
        flexDir="column"
        alignItems="center"
      >
        My Company Informations
        <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
          (Optional)
        </Box>
      </Heading>

      <Flex flexDir="column" justify="center" alignItems="center" mb="1rem">
        <Input
          type={'file'}
          accept="image/*"
          w="20em"
          display="none"
          ref={companyLogoRef}
          onChange={handleImage}
        />
        <Avatar
          name="company-logo"
          size="2xl"
          src={getValues('companyLogo') ? getValues('companyLogo') : avatarImage.src}
          onClick={() => companyLogoRef.current.click()}
          cursor={'pointer'}
          mb="1rem"
          boxShadow="md"
        />
        <ErrorMessage error={!getValues('companyLogo') && errors.companyLogo?.message} />
      </Flex>

      <TextField
        name="companyAddress"
        register={register}
        errors={errors}
        label="Address"
        placeholder="Address"
      />

      <InputField
        name="companyCity"
        register={register}
        errors={errors}
        label="City"
        placeholder="City"
      />
      <InputField
        name="companyCountry"
        register={register}
        errors={errors}
        label="Country"
        placeholder="Country"
      />
      <InputField
        name="companyState"
        register={register}
        errors={errors}
        label="State"
        placeholder="State"
      />
      <InputField
        name="companyZipCode"
        register={register}
        errors={errors}
        label="Zip Code / Postal"
        placeholder="State"
      />
    </Flex>
  )
}
const CustomerForm = ({ register, errors }: IForm) => {
  const shippingMethods = ['standard', 'express'] // get it from api (to get more customized fields)
  return (
    <Flex flexDir="column" alignItems="ceter">
      <Heading as="h2" fontSize="1.25rem" my="1.5rem" display={'flex'} alignItems="center">
        My Shipping Informations
        <Box fontWeight={'400'} fontStyle="italic" fontSize={'.8rem'} ml=".25rem">
          (Optional)
        </Box>
      </Heading>

      <SelectField
        name="shippingMethod"
        register={register}
        errors={errors}
        label="Shipping Method"
        placeholder="Shipping Method"
      >
        {shippingMethods?.map((el: any, idx: number) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </SelectField>
      <TextField
        name="address_1"
        register={register}
        errors={errors}
        label="Address 1"
        placeholder="Address 1"
      />
      <TextField
        name="address_2"
        register={register}
        errors={errors}
        label="Address 2"
        placeholder="Address 2"
      />

      <InputField
        name="cityCustomer"
        register={register}
        errors={errors}
        label="City"
        placeholder="City"
      />
      <InputField
        name="countryCustomer"
        register={register}
        errors={errors}
        label="Country"
        placeholder="Country"
      />
      <InputField
        name="stateCustomer"
        register={register}
        errors={errors}
        label="State"
        placeholder="State"
      />
      <InputField
        name="zipCodeCustomer"
        register={register}
        errors={errors}
        label="Zip Code / Postal"
        placeholder="State"
      />
    </Flex>
  )
}
const DefaultForm = ({ register, errors, setValue, getValues }: IDefaultForm) => {
  const avatarRef = useRef<any>()

  const handleImage = (e: any) => {
    const imgBase = e.target.files[0]
    const imgPreview = URL.createObjectURL(imgBase)
    setValue('avatar', imgPreview)
  }

  return (
    <Flex flexDir="column" alignItems="center">
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
        placeholder="Full Name"
      />
      <InputField
        name="email"
        register={register}
        errors={errors}
        label="Email Address"
        placeholder="Email Address"
      />
      <InputField
        name="mobile"
        register={register}
        errors={errors}
        label="Mobile"
        placeholder="Mobile"
      />
      <InputField
        name="address"
        register={register}
        errors={errors}
        label="Address"
        placeholder="Address"
      />
    </Flex>
  )
}
