import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  Flex,
  Stack,
  Avatar,
  Spinner
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { AiFillPlusCircle } from 'react-icons/ai'

import { Layout, FormTemplate, ErrorMessage } from '../components'
import { profileSchema } from '../lib/validation'

export default function EditProfile({ profileData }) {
  const router = useRouter()

  const formOptions = {
    resolver: yupResolver(profileSchema),
    defaultValues: profileData
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm(formOptions)

  const onEdit = async (profile: any) => {
    console.log('edit profile: ', profile)
    router.push('/profile')
  }
  const onUploadImage = () => {}
  const picture = ''
  const isLoading = false

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Flex flexDir="column" justifyContent={'center'} alignItems={'center'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}> Edit Profile </Heading>
        </Stack>

        <FormTemplate>
          <form onSubmit={handleSubmit(onEdit)}>
            <Heading as="h2" fontSize="1.5rem" mb="1.5rem">
              My Personal Information
            </Heading>

            <EditPicture data={picture} upload={onUploadImage} loading={isLoading} />

            <FormControl id="fullName" mb="1rem">
              <FormLabel> Full Name </FormLabel>
              <Input
                type="text"
                placeholder=""
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.fullName ? true : false}
                focusBorderColor={errors.fullName ? 'error' : 'accent_6'}
                errorBorderColor="error"
                borderColor="gray.300"
                borderRadius="4px"
                {...register('fullName')}
              />
              {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
            </FormControl>

            <FormControl id="email" mb="1rem">
              <FormLabel> Email Address </FormLabel>
              <Input
                type="email"
                placeholder="example@mail.com"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.email ? true : false}
                focusBorderColor={errors.email ? 'error' : 'accent_6'}
                errorBorderColor="error"
                borderColor="gray.300"
                borderRadius="4px"
                {...register('email')}
              />
              {errors.email && <ErrorMessage error={errors.email.message} />}
            </FormControl>

            <FormControl id="price" mb="1rem">
              <FormLabel> Mobile </FormLabel>
              <Input
                type="number"
                placeholder="Phone Number"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.mobile ? true : false}
                focusBorderColor={errors.mobile ? 'error' : 'accent_6'}
                errorBorderColor="error"
                borderColor="gray.300"
                borderRadius="4px"
                {...register('mobile')}
              />
              {errors.mobile && <ErrorMessage error={errors.mobile.message} />}
            </FormControl>

            <Heading as="h2" fontSize="1.25rem" my="1.5rem">
              My Billing Informations
            </Heading>

            <FormControl id="address" mb="1rem">
              <FormLabel> Billing Address </FormLabel>
              <Input
                type="text"
                placeholder="My Billing Address"
                _placeholder={{ color: 'gray.500' }}
                isInvalid={errors.address ? true : false}
                focusBorderColor={errors.address ? 'error' : 'accent_6'}
                errorBorderColor="error"
                borderColor="gray.300"
                borderRadius="4px"
                {...register('address')}
              />
              {errors.address && <ErrorMessage error={errors.address.message} />}
            </FormControl>

            <Stack>
              <Button
                type="submit"
                isLoading={isSubmitting}
                bg="accent_4"
                color="white"
                _hover={{ bg: 'accent_3' }}
              >
                {' '}
                Edit Profile{' '}
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
    props: { profileData: {} }
  }
}

const EditPicture = ({ data, upload, loading }: { data: any; upload?: any; loading?: any }) => {
  return (
    <Box pos="relative" mx="auto" w="fit-content">
      <Avatar src={data ? data : 'IconAvatar'} name="avatar" size="xl" />
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
        {loading ? (
          <Box>
            <Spinner size="sm" display="flex" thickness="3px" color="accent_6" />
          </Box>
        ) : (
          <Box>
            <AiFillPlusCircle color="#48bb78" size="20" />
          </Box>
        )}
        <FormControl id="image" mb="1rem">
          <Input
            type="file"
            id="profile-image"
            // isInvalid={errors.img ? true : false}
            // errorBorderColor="error"
            disabled={loading}
            borderColor="gray.300"
            borderRadius="4px"
            onChange={upload}
            display="none"
          />
          {/* {errors.img && <ErrorMessage error={errors.img.message} />} */}
        </FormControl>
      </FormLabel>
    </Box>
  )
}
